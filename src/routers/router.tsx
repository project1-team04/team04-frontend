import { createBrowserRouter, Navigate } from 'react-router-dom';
import AuthLayout from '../layouts/AuthLayout';
import MainLayout from '@/layouts/MainLayout';
import AuthLoginPage from '@/pages/AuthLoginPage';
import AuthSignupPage from '@/pages/AuthSignupPage';
import DetailLayout from '@/layouts/DetailLayout';
import ProjectsListPage from '@/pages/ProjectsListPage';
import ProjectsCreatePage from '@/pages/ProjectsCreatePage';
import ProjectsDelegationPage from '@/pages/ProjectsDelegationPage';
import ProjectsDetailPage from '@/pages/ProjectsDetailPage';
import ProjectsIssueDetailPage from '@/pages/ProjectsIssueDetailPage';
import ProjectsSettingPage from '@/pages/ProjectsSettingPage';
import UserProfilePage from '@/pages/UserProfilePage';
import NotFoundPage from '@/pages/NotFoundPage';

// TODO) Protected Route 적용 및 루트 경로 접근 처리
const router = createBrowserRouter([
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        // /auth 경로 접근 시 자동으로 /auth/login으로 리다이렉트
        index: true,
        element: <Navigate to='/auth/login' replace />,
      },
      {
        path: 'login',
        element: <AuthLoginPage />,
      },
      {
        path: 'signup',
        element: <AuthSignupPage />,
      },
    ],
  },
  {
    path: '/projects',
    element: <MainLayout />,
    children: [
      {
        path: '',
        element: <ProjectsListPage />,
      },
      {
        path: 'new',
        element: <ProjectsCreatePage />,
      },
      {
        path: ':projectId',
        children: [
          {
            path: '',
            element: (
              <DetailLayout>
                <ProjectsDetailPage />
              </DetailLayout>
            ),
          },
          {
            path: 'issues/:issueId',
            element: (
              <DetailLayout>
                <ProjectsIssueDetailPage />
              </DetailLayout>
            ),
          },
          {
            path: 'settings',
            element: <ProjectsSettingPage />,
          },
        ],
      },
    ],
  },
  {
    path: 'profile',
    element: <MainLayout />,
    children: [
      {
        path: '',
        element: <UserProfilePage />,
      },
      {
        path: 'delegate',
        element: <ProjectsDelegationPage />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

export default router;
