import { deactivateUser } from '@/apis/authApi';
import { paths } from '@/routers/paths';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

export const useDeactivateUser = () => {
  // FIXME) 토큰 유무에 따른 라우팅 로직 추가 후 아래 navigate 삭제
  const navigate = useNavigate();

  return useMutation({
    mutationFn: deactivateUser,
    onSuccess: () => {
      console.log('회원 탈퇴 성공');
      localStorage.removeItem('AccessToken');
      navigate(paths.auth.login.fullPath);
    },
    onError: (error) => {
      console.error('회원 탈퇴 실패', error);
    },
  });
};
