import { LoaderFunction, redirect } from 'react-router-dom';
import { QueryClient } from '@tanstack/react-query';
import { paths } from './paths';
import { UserData } from '@/types/userTypes';
import { getUserWithId } from '@/utils/getUserWithId';

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
