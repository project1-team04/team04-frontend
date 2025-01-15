import { createBrowserRouter } from 'react-router-dom';
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
        path: 'delegate',
        element: <ProjectsDelegationPage />,
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
    element: (
      <MainLayout>
        <UserProfilePage />
      </MainLayout>
    ),
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

export default router;
