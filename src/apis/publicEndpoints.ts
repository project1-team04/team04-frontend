const SOCIAL_LOGIN_TYPES = ['kakao', 'google', 'naver'];

// Access Token 없이 접근 가능한 API 엔드포인트 목록
export const PUBLIC_API_ENDPOINTS = [
  '/auth/login',
  '/auth/signup',
  '/auth/verify',
  '/auth/verify-email',
  '/auth/reset-password',
  '/auth/refresh-token',
  ...SOCIAL_LOGIN_TYPES.flatMap((type) => [
    `/auth/${type}/login`,
    `/auth/${type}/login/callback`,
  ]),
];
