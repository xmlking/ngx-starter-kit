import { Action, NgxsOnInit, Selector, State, StateContext } from '@ngxs/store';
import { Notification } from './notification.model';
import { tap } from 'rxjs/operators';
import { NotificationsService } from './notifications.service';
import {
  FetchNotifications,
  AddNotification,
  DeleteNotification,
  MarkAsRead,
  MarkAllAsRead,
} from './notifications.actions';

@State<Notification[]>({
  name: 'notifications',
  defaults: [],
})
export class NotificationsState implements NgxsOnInit {
  constructor(private notificationsService: NotificationsService) {}

  @Selector()
  static unReadCount(state: Notification[]) {
    return state.filter(note => !note.read).length;
  }

  ngxsOnInit(ctx: StateContext<Notification[]>) {
    console.log('State initialized, now getting Notifications.');
    // well, this way be call be called before dashboard is routed due to preloadingStrategy. so lets use ngOnInit on component
    // ctx.dispatch(new FetchNotifications())
  }

  @Action(AddNotification)
  add({ getState, setState, patchState }: StateContext<Notification[]>, { payload }: AddNotification) {
    setState([...getState(), payload]);
  }

  @Action(FetchNotifications, { cancelUncompleted: true })
  fetchNotifications({ getState, patchState, setState }: StateContext<Notification[]>) {
    return this.notificationsService.getAll().pipe(tap(res => setState(res)));
  }

  @Action(DeleteNotification)
  delete({ getState, setState, patchState }: StateContext<Notification[]>, { payload }: AddNotification) {
    setState(getState().filter(note => note !== payload));
  }

  @Action(MarkAsRead)
  markAsRead({ getState, setState, patchState }: StateContext<Notification[]>, { payload }: MarkAsRead) {
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
  markAllAsRead({ getState, setState, patchState }: StateContext<Notification[]>) {
    setState(
      getState().map(notification => {
        notification.read = true;
        return notification;
      }),
    );
  }
}
