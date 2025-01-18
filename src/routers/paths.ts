export const paths = {
  auth: {
    root: '/auth',
    login: 'login',
    signup: 'signup',
    findPassword: 'find-password',
  },
  projects: {
    root: '/projects',
    new: 'new',
    detail: ':projectId',
    issueDetail: 'issues/:issueId',
    settings: 'settings',
  },
  profile: {
    root: '/profile',
    delegate: 'delegate',
  },
  notFound: '*',
} as const;
