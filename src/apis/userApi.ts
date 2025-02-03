import instance from './instance';

export const getUser = () => {
  return instance.get('user/profile');
};
