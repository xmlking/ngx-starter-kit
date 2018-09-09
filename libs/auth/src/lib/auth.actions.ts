export enum AuthMode {
  ImplicitFLow = 'ImplicitFLow',
  PasswordFlow = 'ROPCFlow',
  AuthorizationCodeFLow = 'AuthorizationCodeFLow',
}

//  Actions
export class Login {
  static readonly type = '[Auth] Login';
  constructor(public readonly payload?: { infoMsg?: string }) {}
}
export class Logout {
  static readonly type = '[Auth] Logout';
}
export class LoadProfile {
  static readonly type = '[Auth] Load Profile';
  constructor(public payload: any) {}
}
export class ChangeAuthMode {
  static readonly type = '[Auth] Change Auth Mode';
  constructor(public readonly payload: AuthMode) {}
}

// Mutation Actions
export class LoginSuccess {
  static readonly type = '[Auth] Login Success';
  constructor(public readonly payload: any) {}
}
export class LoginCanceled {
  static readonly type = '[Auth] Login Canceled';
}
export class LogoutSuccess {
  static readonly type = '[Auth] Logout Success';
}
export class ProfileLoaded {
  static readonly type = '[Auth] Profile Loaded';
}
export class AuthModeChanged {
  static readonly type = '[Auth] Auth Mode Changed';
  constructor(public readonly payload: AuthMode) {}
}
