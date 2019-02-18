import { Store } from '@ngxs/store';
import { LoginSuccess } from './state/auth.actions';
import { AuthorizationErrorResponse } from './types';
import { AuthService } from '@ngx-starter-kit/oidc';

export function initializeAuth(authService: AuthService, store: Store) {
  // TODO only check if not logged in. use Store and localStorage?
  // authService.setStorage(sessionStorage);
  return async () => {
    let authenticated = false;
    try {
      authenticated = await authService.init();
    } catch (err /*: AuthorizationErrorResponse */) {
      console.log(`Error Code: ${err.error}, Error Description: ${err.error_description}`);
    }

    if (authenticated) {
      const profile = await authService.loadUserProfile();
      store.dispatch(new LoginSuccess(profile));
    }
    return authenticated;
  };
}
