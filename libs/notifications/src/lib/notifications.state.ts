import { ImmutableContext } from '@ngxs-labs/immer-adapter';
import { Action, NgxsAfterBootstrap, Selector, State, StateContext } from '@ngxs/store';
import { removeItem } from '@ngxs/store/operators';
import { tap } from 'rxjs/operators';
import { AppNotification } from './app-notification.model';
import {
  AddNotification,
  DeleteNotification,
  FetchNotifications,
  MarkAllAsRead,
  MarkAsRead,
} from './notifications.actions';
import { NotificationsService } from './notifications.service';
import { Injectable } from '@angular/core';

/** @dynamic */
@State<AppNotification[]>({
  name: 'notifications',
  defaults: [],
})
@Injectable({
  providedIn: 'root',
})
export class NotificationsState implements NgxsAfterBootstrap {
  constructor(private notificationsService: NotificationsService) {}

  @Selector()
  static unReadCount(state: AppNotification[]) {
    return state.filter((note) => !note.read).length;
  }

  ngxsAfterBootstrap(ctx: StateContext<AppNotification[]>) {
    console.log('State initialized, now getting Notifications.');
    /**
     * well, this way, it will be called before dashboard is routed due to preloadingStrategy.
     * we will loose lazy loading benefits. so lets use ngxsAfterBootstrap on component to load initial data.
     */
    // ctx.dispatch(new FetchNotifications())
  }

  @ImmutableContext()
  @Action(AddNotification)
  add(ctx: StateContext<AppNotification[]>, { payload }: AddNotification) {
    ctx.setState((state: AppNotification[]) => {
      state.push(payload);
      return state;
    });
  }

  @Action(FetchNotifications, { cancelUncompleted: true })
  fetchNotifications({ getState, patchState, setState }: StateContext<AppNotification[]>) {
    return this.notificationsService.getAll().pipe(tap((res) => setState(res)));
  }

  // @ImmutableContext()
  // @Action(DeleteNotification)
  // delete(ctx: StateContext<AppNotification[]>, { payload }: DeleteNotification) {
  //   ctx.setState((state: AppNotification[]) => {
  //     return state.splice(state.findIndex(note => note.id === payload.id), 1);
  //     // or (slower):
  //     // return state.filter(note => note.id !== payload.id);
  //   });
  // }

  @Action(DeleteNotification)
  delete(ctx: StateContext<AppNotification[]>, { payload }: DeleteNotification) {
    ctx.setState(removeItem<AppNotification>((note) => note.id === payload.id));
  }

  @ImmutableContext()
  @Action(MarkAsRead)
  markAsRead(ctx: StateContext<AppNotification[]>, { payload }: MarkAsRead) {
    ctx.setState((state: AppNotification[]) => {
      state[state.findIndex((note) => note.id === payload.id)].read = true;
      return state;
    });
  }

  @ImmutableContext()
  @Action(MarkAllAsRead)
  markAllAsRead(ctx: StateContext<AppNotification[]>) {
    ctx.setState((state: AppNotification[]) => {
      state.forEach((item) => {
        item.read = true;
      });
      return state;
    });
  }
}
