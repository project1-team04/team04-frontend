import instance from './instance';

interface CreateProjectResponse {
  id: string;
  name: string;
}

export interface Project extends CreateProjectResponse {
  projectKey: string;
  issueCount: number;
}

export const getUserProjects = async (page: number, size: number) => {
  try {
    const res = await instance.get<Project[]>('/projects', {
      params: { page, size },
    });
    console.log('프로젝트 목록:', res.data);
    return res.data;
  } catch (error) {
    console.log('프로젝트 목록 에러: ', error);
    return [];
  }
};

export const getProjectsDetail = async (projectId: string) => {
  try {
    const res = await instance.get<CreateProjectResponse>(
      `/projects/details?projectId=${projectId}`
    );
    console.log('프로젝트 상세:', res.data);
    return res.data;
  } catch (error) {
    console.log('프로젝트 상세 에러: ', error);
    return [];
  }
};

export const createProject = async (name: string) => {
  try {
    const res = await instance.post('/projects', { name });

    console.log('프로젝트 생성:', res.data);
    return res.data;
  } catch (error) {
    console.log('프로젝트 생성 에러: ', error);
  }
};
