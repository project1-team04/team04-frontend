import { TokenPayload } from '@/types/tokenTypes';
import { jwtDecode } from 'jwt-decode';

export const decodeToken = (token: string): TokenPayload | null => {
  try {
    return jwtDecode<TokenPayload>(token);
  } catch (error) {
    console.error('Invalid token:', error);
    return null;
  }
};
