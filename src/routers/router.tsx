import { createBrowserRouter, Navigate } from 'react-router-dom';
import { paths } from './paths';
import AuthLayout from '../layouts/AuthLayout';
import MainLayout from '@/layouts/MainLayout';
import AuthLoginPage from '@/pages/AuthLoginPage';
import AuthSignupPage from '@/pages/AuthSignupPage';
import AuthFindPasswordPage from '@/pages/AuthFindPasswordPage';
import ProjectsListPage from '@/pages/ProjectsListPage';
import ProjectsCreatePage from '@/pages/ProjectsCreatePage';
import ProjectsDetailPage from '@/pages/ProjectsDetailPage';
import ProjectsIssueDetailPage from '@/pages/ProjectsIssueDetailPage';
import ProjectsSettingPage from '@/pages/ProjectsSettingPage';
import ProfilePage from '@/pages/ProfilePage';
import ProfileDelegatePage from '@/pages/ProfileDelegatePage';
import NotFoundPage from '@/pages/NotFoundPage';

// TODO) Protected Route 적용 및 루트 경로 접근 처리
const router = createBrowserRouter([
  {
    path: paths.auth.root,
    element: <AuthLayout />,
    children: [
      {
        // /auth 경로 접근 시 /auth/login으로 자동 리다이렉트
        index: true,
        element: <Navigate to={paths.auth.login} replace />,
      },
      {
        path: paths.auth.login,
        element: <AuthLoginPage />,
      },
      {
        path: paths.auth.signup,
        element: <AuthSignupPage />,
      },
      {
        path: paths.auth.findPassword,
        element: <AuthFindPasswordPage />,
      },
    ],
  },
  {
    path: paths.projects.root,
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <ProjectsListPage />,
      },
      {
        path: paths.projects.new,
        element: <ProjectsCreatePage />,
      },
      {
        path: paths.projects.detail,
        children: [
          {
            index: true,
            element: <ProjectsDetailPage />,
          },
          {
            path: paths.projects.issueDetail,
            element: <ProjectsIssueDetailPage />,
          },
          {
            path: paths.projects.settings,
            element: <ProjectsSettingPage />,
          },
        ],
      },
    ],
  },
  {
    path: paths.profile.root,
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <ProfilePage />,
      },
      {
        path: paths.profile.delegate,
        element: <ProfileDelegatePage />,
      },
    ],
  },
  {
    path: paths.notFound,
    element: <NotFoundPage />,
  },
]);

export default router;
