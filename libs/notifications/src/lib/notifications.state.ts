import { Action, NgxsOnInit, Selector, State, StateContext } from '@ngxs/store';
import { produce } from '@ngxs-labs/immer-adapter';
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
  add(ctx: StateContext<AppNotification[]>, { payload }: AddNotification) {
    produce(ctx, (draft: AppNotification[]) => {
      draft.push(payload);
    });
  }

  @Action(FetchNotifications, { cancelUncompleted: true })
  fetchNotifications({ getState, patchState, setState }: StateContext<AppNotification[]>) {
    return this.notificationsService.getAll().pipe(tap(res => setState(res)));
  }

  @Action(DeleteNotification)
  delete(ctx: StateContext<AppNotification[]>, { payload }: AddNotification) {
    produce(ctx, draft => {
      draft.splice(draft.findIndex(note => note.id === payload.id), 1);
      // or (slower):
      // return draft.filter(note => note.id !== payload.id);
    });
  }

  @Action(MarkAsRead)
  markAsRead(ctx: StateContext<AppNotification[]>, { payload }: MarkAsRead) {
    produce(ctx, draft => {
      draft[draft.findIndex(note => note.id === payload.id)].read = true;
    });
  }

  @Action(MarkAllAsRead)
  markAllAsRead(ctx: StateContext<AppNotification[]>) {
    produce(ctx, draft => {
      draft.forEach(item => {
        item.read = true;
      });
    });
  }
}
