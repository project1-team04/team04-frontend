export type IssueStatus = 'TODO' | 'ON_PROGRESS' | 'DONE';

export interface CreateIssueRequest {
  projectId: number;
  labelId: number;
  name: string;
  description: string;
  troubleShooting: string;
  status: IssueStatus;
}

export interface IssueResponse {
  id: string;
  projectId: number;
  labelId: number;
  assigneeUserId: number | null;
  reporterUserId: number;
  issueKey: string;
  name: string;
  description: string;
  troubleShooting: string;
  status: IssueStatus;
}

export type IssueCardProps = Pick<
  IssueResponse,
  'id' | 'name' | 'assigneeUserId' | 'projectId'
>;
