export interface TokenPayload {
  sub: string; // email
  userId: number;
  username: string;
  iat: number;
  exp: number;
}
