import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route, Router } from '@angular/router';
import { PrefetchRegistryService } from './prefetch-registry.service';
import { EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PreloadViewportStrategy implements PreloadingStrategy {
  constructor(private queue: PrefetchRegistryService, private router: Router) {}

  preload(route: Route, load: Function) {
    const conn = (navigator as any).connection;
    if (conn) {
      // Don't prefetch if the user is on 2G. or if Save-Data is enabled..
      if ((conn.effectiveType || '').includes('2g') || conn.saveData) {
        return EMPTY;
      }
    }
    const fullPath = findPath(this.router.config, route);
    console.log('fullPath', fullPath);
    console.log('shouldPrefetch', this.queue.shouldPrefetch(fullPath));
    // TODO(mgechev): make sure it works for parameterized routes
    if (this.queue.shouldPrefetch(fullPath)) {
      return load();
    }
    return EMPTY;
  }
}

const findPath = (config: Route[], route: Route): string => {
  config = config.slice();
  const parent = new Map<Route, Route>();
  while (config.length) {
    const el = config.shift();
    if (el === route) {
      break;
    }
    const current1 = (el as any)._loadedConfig;
    if (!current1 || !current1.routes) {
      continue;
    }
    current1.routes.forEach((r: Route) => {
      parent.set(r, el);
      config.push(r);
    });
  }
  const segments: string[] = [];
  let current = route;
  while (current) {
    segments.unshift(current.path);
    current = parent.get(current);
  }
  return '/' + segments.join('/');
};
