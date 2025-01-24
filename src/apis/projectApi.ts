import instance from './instance';

export const getUserProjects = async () => {
  try {
    const res = await instance.get('/projects');
    console.log('프로젝트 목록:', res.data);
    return res.data;
  } catch (error) {
    console.log('프로젝트 목록 에러: ', error);
    // throw error
  }
};
