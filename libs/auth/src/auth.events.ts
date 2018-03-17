export enum AuthMode {
  ImplicitFLow = 'ImplicitFLow',
  PasswordFlow = 'ROPCFlow',
  AuthorizationCodeFLow = 'AuthorizationCodeFLow'
}

//  Action Events
export class Login {
  constructor(public payload?: { infoMsg?: string }) {}
}
export class Logout {}
export class LoadProfile {
  constructor(public payload: any) {}
}
export class ChangeAuthMode {
  constructor(public payload: AuthMode) {}
}

// Mutation Events
export class LoginSuccess {
  constructor(public payload: { isLoggedIn: boolean; profile: any }) {}
}
export class LoginCanceled {}
export class LogoutSuccess {}
export class ProfileLoaded {}
export class AuthModeChanged {
  constructor(public payload: AuthMode) {}
}
