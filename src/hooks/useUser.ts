import { getUserWithId } from '@/utils/getUserWithId';
import { useQuery } from '@tanstack/react-query';

// 사용자 정보 조회
export const useGetUser = () => {
  return useQuery({
    queryKey: ['user'],
    queryFn: getUserWithId,
    retry: 3,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
  });
};
