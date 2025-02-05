import { LoaderFunction, redirect } from 'react-router-dom';
import { paths } from './paths';

// 로그인 여부에 따라 동적으로 루트 경로 설정
export const rootLoader: LoaderFunction = () => {
  const accessToken = localStorage.getItem('AccessToken');

  if (accessToken) {
    return redirect(paths.projects.root);
  }

  return redirect(paths.auth.root);
};
