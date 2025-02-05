import { LoaderFunction, redirect } from 'react-router-dom';
import { paths } from './paths';

//  로그인 상태에서 auth 페이지 접근 제한
export const publicLoader: LoaderFunction = () => {
  const accessToken = localStorage.getItem('AccessToken');

  if (accessToken) {
    return redirect(paths.projects.root);
  }

  return null; // 비로그인 상태에서는 그대로 접근 가능
};
