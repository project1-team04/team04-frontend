import instance from './instance';

interface CreateProjectResponse {
  id: string;
  name: string;
}

export interface Project extends CreateProjectResponse {
  projectKey: string;
  issueCount: number;
}

export interface ProjectResponse {
  projects: Project[];
  conditionTotalProjects: number;
  totalProjects: number;
}

export const getUserProjects = async (page: number, size: number) => {
  try {
    const res = await instance.get<ProjectResponse>('/projects', {
      params: { page, size },
    });
    console.log('프로젝트 목록:', res.data);
    return res.data;
  } catch (error) {
    console.log('프로젝트 목록 에러: ', error);
    return {
      projects: [],
      conditionTotalProjects: 0,
      totalProjects: 0,
    };
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

export const deleteProject = async (projectId: number) => {
  try {
    const res = await instance.delete('/projects', {
      params: { projectId },
    });

    console.log('프로젝트 나가기:', res.data);
    return res.data;
  } catch (error) {
    console.log('프로젝트 나가기 에러: ', error);
  }
};
