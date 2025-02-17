import { createBrowserRouter, Navigate } from 'react-router-dom';
import { QueryClient } from '@tanstack/react-query';
import { paths } from './paths';
import { rootLoader } from './rootLoader';
import { publicLoader } from './publicLoader';
import { protectedLoader } from './protectedLoader';
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

export const createRouter = (queryClient: QueryClient) => {
  return createBrowserRouter([
    { path: '/', loader: rootLoader },
    {
      path: paths.auth.root,
      element: <AuthLayout />,
      loader: publicLoader,
      children: [
        {
          // /auth 경로 접근 시 /auth/login으로 자동 리다이렉트
          index: true,
          element: <Navigate to={paths.auth.login.fullPath} replace />,
        },
        {
          path: paths.auth.login.relativePath,
          element: <AuthLoginPage />,
        },
        {
          path: paths.auth.signup.relativePath,
          element: <AuthSignupPage />,
        },
        {
          path: paths.auth.findPassword.relativePath,
          element: <AuthFindPasswordPage />,
        },
      ],
    },
    {
      path: paths.projects.root,
      element: <MainLayout />,
      loader: protectedLoader(queryClient),
      children: [
        {
          index: true,
          element: <ProjectsListPage />,
        },
        {
          path: paths.projects.new.relativePath,
          element: <ProjectsCreatePage />,
        },
        {
          path: paths.projects.detail.relativePath,
          children: [
            {
              index: true,
              element: <ProjectsDetailPage />,
            },
            {
              path: paths.projects.issueDetail.relativePath,
              element: <ProjectsIssueDetailPage />,
            },
            {
              path: paths.projects.settings.relativePath,
              element: <ProjectsSettingPage />,
            },
          ],
        },
      ],
    },
    {
      path: paths.profile.root,
      element: <MainLayout />,
      loader: protectedLoader(queryClient),
      children: [
        {
          index: true,
          element: <ProfilePage />,
        },
        {
          path: paths.profile.delegate.relativePath,
          element: <ProfileDelegatePage />,
        },
      ],
    },
    {
      path: paths.notFound,
      element: <NotFoundPage />,
    },
  ]);
};
