import instance from './instance';
import {
  CreateIssueRequest,
  IssueResponse,
  UpdateIssueRequest,
} from '@/types/issueTypes';

// 이슈 생성 API
export const createIssue = async (
  issueData: CreateIssueRequest
): Promise<IssueResponse> => {
  const { projectId, ...data } = issueData;
  const response = await instance.post(`/projects/${projectId}/issues`, data);

  return response.data;
};

// 이슈 조회 API
export const getIssue = async (
  projectId: number,
  issueId: number
): Promise<IssueResponse> => {
  const response = await instance.get(
    `/projects/${projectId}/issues/${issueId}`
  );

  return response.data;
};

// 이슈 목록 조회 API
export const getProjectIssues = async (
  projectId: number
): Promise<IssueResponse[]> => {
  if (!projectId) throw new Error('projectId가 없습니다.');
  const response = await instance.get(`/projects/${projectId}/issues`);

  return response.data;
};

// 이슈 삭제 API
export const deleteIssue = async (
  projectId: number,
  issueId: number
): Promise<void> => {
  await instance.delete(`/projects/${projectId}/issues/${issueId}`);
};

// 이슈 수정 API
export const updateIssue = async (
  projectId: number,
  issueId: number,
  updatedData: UpdateIssueRequest
): Promise<IssueResponse> => {
  const response = await instance.patch(
    `/projects/${projectId}/issues/${issueId}`,
    updatedData
  );
  return response.data;
};
