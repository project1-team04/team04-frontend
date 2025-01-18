export const paths = {
  auth: {
    root: '/auth',
    login: { fullPath: '/auth/login', relativePath: 'login' },
    signup: { fullPath: '/auth/signup', relativePath: 'signup' },
    findPassword: {
      fullPath: '/auth/find-password',
      relativePath: 'find-password',
    },
  },
  projects: {
    root: '/projects',
    new: { fullPath: '/projects/new', relativePath: 'new' },
    detail: { fullPath: '/projects/:projectId', relativePath: ':projectId' },
    issueDetail: {
      fullPath: '/projects/:projectId/issues/:issueId',
      relativePath: 'issues/:issueId',
    },
    settings: {
      fullPath: '/projects/:projectId/settings',
      relativePath: 'settings',
    },
  },
  profile: {
    root: '/profile',
    delegate: { fullPath: '/profile/delegate', relativePath: 'delegate' },
  },
  notFound: '*',
} as const;
