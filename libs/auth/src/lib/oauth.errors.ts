type InvalidRequest = 'invalid_request';
type UnauthorizedClient = 'unauthorized_client';

type AuthorizationError =
  | 'invalid_request'
  | 'unauthorized_client'
  | 'access_denied'
  | 'unsupported_response_type'
  | 'invalid_scope'
  | 'server_error'
  | 'temporarily_unavailable';

type AccessTokenError =
  | 'invalid_request'
  | 'invalid_client'
  | 'invalid_grant'
  | 'unauthorized_client'
  | 'unsupported_grant_type'
  | 'invalid_scope';

export interface AccessTokenErrorResponse {
  error: AccessTokenError;
  error_description?: string;
  error_uri?: URL;
}

export interface AuthorizationErrorResponse {
  error: AuthorizationError;
  error_description?: string;
  error_uri?: URL;
  state?: string;
}
