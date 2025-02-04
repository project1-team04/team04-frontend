import instance from './instance';
import axios from 'axios';

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

export const modifyProject = async (projectId: number, name: string) => {
  try {
    const res = await instance.patch(
      '/projects',
      { name },
      { params: { projectId } }
    );

    console.log('프로젝트 수정:', res.data);
    return res.data;
  } catch (error) {
    console.log('프로젝트 수정 에러: ', error);
  }
};

export const inviteMember = async (projectId: number, email: string) => {
  try {
    const res = await instance.post('/projects/invite-single-user', null, {
      params: { projectId, email },
    });

    console.log('인원 초대:', res.data);
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('Axios Error:', error.response?.status, error.response?.data);
      return error.response?.data;
    } else {
      console.log('Unexpected Error:', error);
      return { message: 'Unexpected error occurred' };
    }
  }
};

export const getMember = async (projectId: number) => {
  try {
    const res = await instance.get('/projects/users', {
      params: { projectId },
    });
    console.log('프로젝트 설정 - 팀원 조회:', res.data);
    return res.data;
  } catch (error) {
    console.log('프로젝트 설정 - 팀원 조회 에러: ', error);
  }
};
