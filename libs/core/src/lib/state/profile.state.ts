import { State, Selector, Action, StateContext, NgxsAfterBootstrap } from '@ngxs/store';
import { Profile } from '@ngx-starter-kit/models';
import { ProfileService } from '../services/profile.service';
import { tap } from 'rxjs/operators';

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
  profile: Profile;
  loading: boolean;
}

@State<ProfileStateModel>({
  name: 'profile',
  defaults: {
    profile: undefined,
    loading: false,
  },
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

  ngxsAfterBootstrap({ setState, dispatch }: StateContext<ProfileStateModel>) {
    console.log('in ProfileState: ngxsAfterBootstrap')
    // dispatch(new FetchProfile());
  }

  @Action(FetchProfile, { cancelUncompleted: true })
  fetchNotifications(ctx: StateContext<ProfileStateModel>) {
    // ctx.setState( startLoading() );
    return this.profileService.getMyProfile().pipe(tap(profile => ctx.patchState({ profile })));
  }

  @Action(CreateProfile)
  public createProfile(ctx: StateContext<ProfileStateModel>, { payload }: CreateProfile) {
    return this.profileService.create(payload).pipe(tap((profile: Profile) => ctx.patchState({ profile })));
  }

  @Action(UpdateProfile)
  public UpdateProfile(ctx: StateContext<ProfileStateModel>, { payload }: UpdateProfile) {
    return this.profileService
      .update(payload.id, payload.profile)
      .pipe(tap((profile: Profile) => ctx.patchState({ profile })));
  }

  @Action(DeleteProfile)
  public deleteProfile(ctx: StateContext<ProfileStateModel>, { payload }: DeleteProfile) {
    return this.profileService.delete(payload).pipe(tap(_ => ctx.patchState({ profile: undefined })));
  }
}
