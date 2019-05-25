import { Injectable } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { distinctUntilChanged, filter, tap } from 'rxjs/operators';

// tslint:disable-next-line:ban-types
declare let ga: Function;

export enum EventCategory {
  SideNav = 'sideNav',
  Outbound = 'outboundLink',
  Login = 'login',
  Install = 'install',
}

export enum EventAction {
  Play = 'play',
  Click = 'click',
}

// FIXME: to keep GoogleAnalyticsService injected before AuthHandler
@Injectable()
// @Injectable({
//   providedIn: 'root',
// })
export class GoogleAnalyticsService {
  constructor(public router: Router) {}

  public initPageViewTracking() {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        distinctUntilChanged((previous: any, current: RouterEvent) => {
          return previous.url === current.url;
        }),
      )
      .subscribe((event: NavigationEnd) => {
        this.setPage(event.urlAfterRedirects);
      });
  }

  /**
   * set user after login success.
   */
  public setUsername(username: string) {
    if (typeof ga === 'function') {
      ga('set', 'userId', username);
    }
  }

  /**
   * set page after navigation success
   */
  public setPage(path: string) {
    if (typeof ga === 'function') {
      // TODO: remove dynamic data if needed. e.g., /user/USER_ID/profile
      ga('set', 'page', path);
      ga('send', 'pageview');
    }
  }

  /**
   * @param eventCategory : 'Video'
   * @param eventAction : 'play'
   * @param eventLabel : 'Fall Campaign'
   * @param eventValue : 42
   */
  public emitEvent(eventCategory: EventCategory, eventAction: string, eventLabel?: string, eventValue?: number) {
    if (typeof ga === 'function') {
      ga('send', 'event', {
        eventCategory,
        eventAction,
        eventLabel,
        eventValue,
      });
    }
  }

  /**
   * @param socialNetwork : 'facebook
   * @param socialAction : 'like'
   * @param socialTarget : 'http://foo.com'
   */
  public emitSocial(socialNetwork: string, socialAction: string, socialTarget: string) {
    if (typeof ga === 'function') {
      ga('send', 'social', {
        socialNetwork,
        socialAction,
        socialTarget,
      });
    }
  }

  /**
   * @param timingCategory : 'JS Dependencies'
   * @param timingVar : 'load'
   * @param timingValue: 20 in milliseconds
   * @param timingLabel : 'Google CDN'
   */

  public emitTiming(timingCategory: string, timingVar: string, timingValue: number, timingLabel?: string) {
    if (typeof ga === 'function') {
      ga('send', 'timing', {
        timingCategory,
        timingVar,
        timingValue,
        timingLabel,
      });
    }
  }

  public emitException(exDescription?: string, exFatal?: boolean) {
    if (typeof ga === 'function') {
      ga('send', 'exception', {
        exDescription,
        exFatal,
      });
    }
  }
}
