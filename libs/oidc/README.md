# OIDC


> Redirect behaviour after `login()` and `logout()`

1. if `postLoginRedirectUri` is provided then `login()` call without `args`, will redirect to this URL after successful login.
2. if `postLogoutRedirectUri` is provided then `logout()` call without `args`, will redirect to this URL after successful logout.
3. if both of the above urls are configured, but if  `redirectUri` is  provided, will redirect to this URL after successful login and logout.
4. if non of the above urls are configured, will redirect to `currentUrl`  after successful login and logout.
5. always  `args` in `login()` and `logout()` take priority. 

> if the above URLs are relative URLs, then, the `OIDC Provider` may prepend `baseUrl` configured in `OIDC Provider`.


### Flows
1. [Silent Refresh](https://www.scottbrady91.com/OpenID-Connect/Silent-Refresh-Refreshing-Access-Tokens-when-using-the-Implicit-Flow
) for Implicit Flow
2. Auto Refresh for Code Flow

## Running unit tests

Run `ng test breadcrumbs` to execute the unit tests.

TODO
https://github.com/damienbod/angular-auth-oidc-client
