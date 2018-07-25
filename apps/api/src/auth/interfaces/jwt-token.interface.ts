export interface JwtToken {
  email: string;
  preferred_username: string;
  [key: string]: any;
}
