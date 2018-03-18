export enum AuthMode {
  ImplicitFLow = 'ImplicitFLow',
  PasswordFlow = 'ROPCFlow',
  AuthorizationCodeFLow = 'AuthorizationCodeFLow'
}

//  Actions
export class Login {
  constructor(public readonly payload?: { infoMsg?: string }) {}
}
export class Logout {}
export class LoadProfile {
  constructor(public payload: any) {}
}
export class ChangeAuthMode {
  constructor(public readonly payload: AuthMode) {}
}

// Mutation Actions
export class LoginSuccess {
  constructor(public readonly payload: any) {}
}
export class LoginCanceled {}
export class LogoutSuccess {}
export class ProfileLoaded {}
export class AuthModeChanged {
  constructor(public readonly payload: AuthMode) {}
}
