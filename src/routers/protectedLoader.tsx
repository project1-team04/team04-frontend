import { LoaderFunction, redirect } from 'react-router-dom';
import { QueryClient } from '@tanstack/react-query';
import { paths } from './paths';
import { UserData } from '@/types/userTypes';
import { getUserWithId } from '@/utils/getUserWithId';

// TODO) 로그인 여부에 따라 루트 경로를 동적으로 리다이렉트
// TODO) 로그인 상태에서는 (토큰 존재할 때) 퍼블릭 경로로 이동 불가하도록 설정
export const protectedLoader = (queryClient: QueryClient): LoaderFunction => {
  return async () => {
    try {
      // 초기 데이터 캐싱
      const userData = await queryClient.ensureQueryData<UserData>({
        queryKey: ['user'],
        queryFn: getUserWithId,
        staleTime: 1000 * 60 * 5,
      });

      return userData;
    } catch (error) {
      return redirect(paths.auth.login.fullPath);
    }
  };
};
