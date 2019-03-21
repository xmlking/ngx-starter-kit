import { AfterViewInit, Component, ComponentRef, Inject, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { hierarchicalRouteAnimation } from '@ngx-starter-kit/animations';
import { RouterState } from '@ngxs/router-plugin';
import { map } from 'rxjs/operators';
import { Store } from '@ngxs/store';
import { RouterStateData, WINDOW } from '@ngx-starter-kit/core';
import { NotificationsComponent } from '../notifications/notifications.component';

/** @dynamic */
@Component({
  selector: 'ngx-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss'],
  animations: [hierarchicalRouteAnimation],
})
export class AdminLayoutComponent implements OnInit {
  quickpanelOpen = false;
  crumbs$;
  depth$;

  constructor(private store: Store, @Inject(WINDOW) private window: Window) {}

  ngOnInit() {
    this.crumbs$ = this.store
      .select<any>(RouterState.state)
      .pipe(map(state => Array.from(state.breadcrumbs, ([key, value]) => ({ name: key, link: '/' + value }))));

    this.depth$ = this.store.select<RouterStateData>(RouterState.state).pipe(map(state => state.data.depth));
  }

  onActivate(componentRef: ComponentRef<any>) {
    // HINT: I can set inputs on activated component!
    // if (componentRef instanceof NotificationsComponent) {
    //   componentRef.sayhello();
    //   componentRef.crumbs$ = this.crumbs$;
    // }
  }
}
