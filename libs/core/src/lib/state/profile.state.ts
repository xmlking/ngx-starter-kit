import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Profile } from '@ngx-starter-kit/models';
import { Action, NgxsAfterBootstrap, Selector, State, StateContext } from '@ngxs/store';
import { patch } from '@ngxs/store/operators';
import { throwError } from 'rxjs';
import { catchError, finalize, last, map, tap } from 'rxjs/operators';
import { ProfileService } from '../services/profile.service';
import { finishedLoading, setProgress, startLoading } from './state.operators';

export class FetchProfile {
  static readonly type = '[Profile] Fetch';
}
export class CreateProfile {
  public static readonly type = '[Profile] Create';
  constructor(public payload: Profile) {}
}
export class UpdateProfile {
  public static readonly type = '[Profile] Update';
  constructor(public payload: { id: number | string; profile: Profile }) {}
}
export class DeleteProfile {
  static readonly type = '[Profile] Delete';
  constructor(public payload: number | string) {}
}

export interface ProfileStateModel {
  profile?: Profile;
  error?: string;
  loading?: boolean;
  progress?: number;
}

@State<ProfileStateModel>({
  name: 'profile',
  defaults: {
    profile: undefined,
    error: undefined,
    loading: false,
    progress: undefined
  }
})
@Injectable({
  providedIn: 'root'
})
export class ProfileState implements NgxsAfterBootstrap {
  constructor(private profileService: ProfileService) {}

  @Selector()
  public static getState(state: ProfileStateModel) {
    return state;
  }
  @Selector()
  public static profile(state: ProfileStateModel) {
    return state.profile;
  }
  @Selector()
  public static loading(state: ProfileStateModel) {
    return state.loading;
  }
  @Selector()
  public static error(state: ProfileStateModel) {
    return state.error;
  }

  ngxsAfterBootstrap({ setState, dispatch }: StateContext<ProfileStateModel>) {
    console.log('in ProfileState: ngxsAfterBootstrap');
    // dispatch(new FetchProfile());
  }

  @Action(FetchProfile, { cancelUncompleted: true })
  fetchProfile(ctx: StateContext<ProfileStateModel>) {
    ctx.setState(startLoading());
    return this.profileService.getMyProfile().pipe(
      tap(profile => ctx.setState(patch({ profile }))),
      catchError(error => {
        ctx.setState(patch({ error }));
        return throwError(error);
      }),
      finalize(() => ctx.setState(finishedLoading()))
    );
  }

  @Action(CreateProfile)
  public createProfile(ctx: StateContext<ProfileStateModel>, { payload }: CreateProfile) {
    ctx.setState(setProgress(0));
    ctx.setState(startLoading());
    return this.profileService.create(payload).pipe(
      map(event => event.type),
      map(event => this.getStatusMessage(ctx, event)),
      tap({
        next: message => console.log(message),
        complete: () => console.log('competed request!')
      }),
      last(),
      tap((profile: Profile) => ctx.setState(patch({ profile }))),
      catchError(error => {
        ctx.setState(patch({ error }));
        return throwError(error);
      }),
      finalize(() => ctx.setState(finishedLoading()))
    );
  }

  @Action(UpdateProfile)
  public UpdateProfile(ctx: StateContext<ProfileStateModel>, { payload }: UpdateProfile) {
    ctx.setState(setProgress(0));
    ctx.setState(startLoading());
    return this.profileService.update(payload.id, payload.profile).pipe(
      map(event => this.getStatusMessage(ctx, event)),
      tap({
        next: message => console.log(message),
        complete: () => console.log('competed request!')
      }),
      last(),
      tap((profile: Profile) => ctx.setState(patch({ profile }))),
      catchError(error => {
        ctx.setState(patch({ error }));
        return throwError(error);
      }),
      finalize(() => ctx.setState(finishedLoading()))
    );
  }

  @Action(DeleteProfile)
  public deleteProfile(ctx: StateContext<ProfileStateModel>, { payload }: DeleteProfile) {
    ctx.setState(startLoading());
    return this.profileService.delete(payload).pipe(
      tap(_ => ctx.setState(patch({ profile: undefined }))),
      catchError(error => {
        ctx.setState(patch({ error }));
        return throwError(error);
      }),
      finalize(() => ctx.setState(finishedLoading()))
    );
  }

  private getStatusMessage(ctx, event) {
    let status: number;

    switch (event.type) {
      case HttpEventType.Sent:
        return `Uploading Files`;

      case HttpEventType.UploadProgress:
        status = Math.round((100 * event.loaded) / event.total);
        ctx.setState(setProgress(status));
        return `Files are ${status}% uploaded`;

      case HttpEventType.DownloadProgress:
        status = Math.round((100 * event.loaded) / event.total);
        // NOTE: The Content-Length header must be set on the server to calculate this
        ctx.setState(setProgress(status));
        return `Files are ${status}% downloaded`;

      case HttpEventType.Response:
        return (event as HttpResponse<Profile>).body; // `Done`;

      default:
        return `Something went wrong`;
    }
  }
}
