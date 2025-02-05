import instance from './instance';
import { CreateIssueRequest, IssueResponse } from '@/types/issueTypes';

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
