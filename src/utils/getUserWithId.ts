import { getUser } from '@/apis/userApi';
import { UserData } from '@/types/userTypes';
import { getDecodedToken } from './getDecodedToken';

// UserData 타입에 맞는 유저 정보 가져오는 함수
export const getUserWithId = async (): Promise<UserData> => {
  const decoded = await getDecodedToken();
  const userRes = await getUser();
  const userData: UserData = { ...userRes.data, userId: decoded.userId };

  return userData;
};
