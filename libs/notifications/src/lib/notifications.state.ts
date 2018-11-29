import { Action, NgxsOnInit, Selector, State, StateContext } from '@ngxs/store';
import { AppNotification } from './app-notification.model';
import { tap } from 'rxjs/operators';
import { NotificationsService } from './notifications.service';
import {
  FetchNotifications,
  AddNotification,
  DeleteNotification,
  MarkAsRead,
  MarkAllAsRead,
} from './notifications.actions';

@State<AppNotification[]>({
  name: 'notifications',
  defaults: [],
})
export class NotificationsState implements NgxsOnInit {
  constructor(private notificationsService: NotificationsService) {}

  @Selector()
  static unReadCount(state: AppNotification[]) {
    return state.filter(note => !note.read).length;
  }

  ngxsOnInit(ctx: StateContext<AppNotification[]>) {
    console.log('State initialized, now getting Notifications.');
    /**
     * well, this way, it will be called before dashboard is routed due to preloadingStrategy.
     * we will loose lazy loading benefits. so lets use ngOnInit on component to load initial data.
     */
    // ctx.dispatch(new FetchNotifications())
  }

  @Action(AddNotification)
  add({ getState, setState, patchState }: StateContext<AppNotification[]>, { payload }: AddNotification) {
    setState([...getState(), payload]);
    if (payload.native) {
      return this.notificationsService.showNativeNotification({
        title: 'NGX WebApp Notification',
        options: {
          body: payload.message,
          icon: 'assets/icons/icon-72x72.png',
        },
      });
    }
  }

  @Action(FetchNotifications, { cancelUncompleted: true })
  fetchNotifications({ getState, patchState, setState }: StateContext<AppNotification[]>) {
    return this.notificationsService.getAll().pipe(tap(res => setState(res)));
  }

  @Action(DeleteNotification)
  delete({ getState, setState, patchState }: StateContext<AppNotification[]>, { payload }: AddNotification) {
    setState(getState().filter(note => note !== payload));
  }

  @Action(MarkAsRead)
  markAsRead({ getState, setState, patchState }: StateContext<AppNotification[]>, { payload }: MarkAsRead) {
    setState(
      getState().map(notification => {
        if (notification === payload) {
          notification.read = true;
        }
        return notification;
      }),
    );
  }

  @Action(MarkAllAsRead)
  markAllAsRead({ getState, setState, patchState }: StateContext<AppNotification[]>) {
    setState(
      getState().map(notification => {
        notification.read = true;
        return notification;
      }),
    );
  }
}
