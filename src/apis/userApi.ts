import instance from './instance';

export const getUser = () => {
  return instance.get('user/profile');
};

export const updateUser = (data: FormData) => {
  return instance.patch('user/profile', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};
