import { deactivateUser } from '@/apis/authApi';
import { paths } from '@/routers/paths';
import { useMutation } from '@tanstack/react-query';

export const useDeactivateUser = () => {
  return useMutation({
    mutationFn: deactivateUser,
    onSuccess: () => {
      console.log('회원 탈퇴 성공');
      localStorage.removeItem('AccessToken');
      window.location.href = paths.auth.login.fullPath;
    },
    onError: (error) => {
      console.error('회원 탈퇴 실패', error);
    },
  });
};
