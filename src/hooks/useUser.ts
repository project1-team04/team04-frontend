import { useLoaderData } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { UserData } from '@/types/userTypes';
import { getUserWithId } from '@/utils/getUserWithId';
import { updateUser } from '@/apis/userApi';

// 사용자 정보 조회
export const useGetUser = () => {
  // protectedLoader()에서 반환한 값을 초기 데이터로 사용
  const initialData = useLoaderData() as UserData;

  return useQuery({
    queryKey: ['user'],
    queryFn: getUserWithId,
    initialData,
    retry: 3,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
  });
};

// 사용자 정보 변경
export const useUpdateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] });
    },
    onError: (error) => {
      console.error('사용자 정보 업데이트 실패', error);
    },
  });
};
