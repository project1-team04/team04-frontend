import instance from './instance';

export interface Project {
  id: string;
  name: string;
  issueCount: number;
}

export const getUserProjects = async () => {
  try {
    const res = await instance.get<Project[]>('/projects');
    console.log('프로젝트 목록:', res.data);
    return res.data;
  } catch (error) {
    console.log('프로젝트 목록 에러: ', error);
    return [];
  }
};

export const getProjectsDetail = async (projectId: string) => {
  try {
    const res = await instance.get(`/projects/details?projectId=${projectId}`);
    console.log('프로젝트 상세:', res.data);
    return res.data;
  } catch (error) {
    console.log('프로젝트 상세 에러: ', error);
    return [];
  }
};
