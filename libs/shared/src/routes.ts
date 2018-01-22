import { Type } from '@angular/core';
import { Route } from '@angular/router';

export const ADD_ROUTE_NAME = 'add';
export const ID_PARAM_NAME = 'id';

export function getEntityRoutes(route: string, mainComponent: Type<any>, entityFormComponent: Type<any>): Route[] {
  return [
    { path: route, component: mainComponent },
    { path: `${route}/${ADD_ROUTE_NAME}`, component: entityFormComponent },
    { path: `${route}/:${ID_PARAM_NAME}`, component: entityFormComponent }
  ];
}
