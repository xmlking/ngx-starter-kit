import { Action, NgxsAfterBootstrap, Selector, State, StateContext } from '@ngxs/store';
import { ImmutableContext, ImmutableSelector } from '@ngxs-labs/immer-adapter';
import { tap } from 'rxjs/operators';
import { AppNotification } from './app-notification.model';
import { NotificationsService } from './notifications.service';
import {
  FetchNotifications,
  AddNotification,
  DeleteNotification,
  MarkAsRead,
  MarkAllAsRead,
} from './notifications.actions';

/** @dynamic */
@State<AppNotification[]>({
  name: 'notifications',
  defaults: [],
})
export class NotificationsState implements NgxsAfterBootstrap {
  constructor(private notificationsService: NotificationsService) {}

  @Selector()
  static unReadCount(state: AppNotification[]) {
    return state.filter(note => !note.read).length;
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
    return this.notificationsService.getAll().pipe(tap(res => setState(res)));
  }

  @ImmutableContext()
  @Action(DeleteNotification)
  delete(ctx: StateContext<AppNotification[]>, { payload }: AddNotification) {
    ctx.setState((state: AppNotification[]) => {
      return state.splice(state.findIndex(note => note.id === payload.id), 1);
      // or (slower):
      // return state.filter(note => note.id !== payload.id);
    });
  }

  @ImmutableContext()
  @Action(MarkAsRead)
  markAsRead(ctx: StateContext<AppNotification[]>, { payload }: MarkAsRead) {
    ctx.setState((state: AppNotification[]) => {
      state[state.findIndex(note => note.id === payload.id)].read = true;
      return state;
    });
  }

  @ImmutableContext()
  @Action(MarkAllAsRead)
  markAllAsRead(ctx: StateContext<AppNotification[]>) {
    ctx.setState((state: AppNotification[]) => {
      state.forEach(item => {
        item.read = true;
      });
      return state;
    });
  }
}
