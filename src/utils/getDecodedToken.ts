import { TokenPayload } from '@/types/tokenTypes';
import { decodeToken } from './decodeToken';

// 디코딩된 토큰 가져와서 검사
export const getDecodedToken = async (): Promise<TokenPayload> => {
  const token = localStorage.getItem('AccessToken');
  if (!token) throw new Error('No token found');

  const decoded: TokenPayload | null = decodeToken(token);
  if (!decoded || !decoded.userId) throw new Error('Invalid token');

  return decoded;
};
