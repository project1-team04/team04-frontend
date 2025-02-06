import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  createIssue,
  deleteIssue,
  getIssue,
  getProjectIssues,
  updateIssue,
} from '@/apis/issueApi';
import { IssueResponse, UpdateIssueRequest } from '@/types/issueTypes';

// 이슈 생성
export const useCreateIssue = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createIssue,
    onSuccess: (newIssue) => {
      // 전체 이슈 목록 캐시 무효화 (목록 최신 상태 유지)
      queryClient.invalidateQueries({
        queryKey: ['projectIssues', newIssue.projectId],
      });

      // 방금 생성한 이슈의 상세 데이터 강제 갱신
      queryClient.invalidateQueries({
        queryKey: ['issue', newIssue.projectId, newIssue.id],
      });
    },
    onError: (error) => {
      console.error('이슈 생성 실패:', error);
    },
  });
};

// 특정 이슈 조회
export const useGetIssue = (
  projectId: number,
  issueId: number,
  enabled: boolean
) => {
  return useQuery<IssueResponse>({
    queryKey: ['issue', projectId, issueId],
    queryFn: () => getIssue(projectId, issueId),
    enabled, // enabled가 true일 때만 api 요청 실행 (이슈 생성 후 자동 조회)
  });
};

// 이슈 목록 조회
export const useGetProjectIssues = (projectId: number) => {
  return useQuery<IssueResponse[]>({
    queryKey: ['projectIssues', projectId],
    queryFn: () => getProjectIssues(projectId),
    enabled: !!projectId, // projectId가 존재할 때만 실행
  });
};

// 이슈 삭제
export const useDeleteIssue = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      projectId,
      issueId,
    }: {
      projectId: number;
      issueId: number;
    }) => deleteIssue(projectId, issueId),
    onSuccess: (_, { projectId }) => {
      // 이슈 목록 캐시 무효화 (삭제된 이슈 반영)
      queryClient.invalidateQueries({
        queryKey: ['projectIssues', projectId],
      });
    },
    onError: (error) => {
      console.error('이슈 삭제 실패:', error);
    },
  });
};

// 이슈 수정
export const useUpdateIssue = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      projectId,
      issueId,
      updatedData,
    }: {
      projectId: number;
      issueId: number;
      updatedData: UpdateIssueRequest;
    }) => updateIssue(projectId, issueId, updatedData),
    onSuccess: (_, { projectId, issueId }) => {
      // 이슈 상세 데이터 캐시 무효화 (최신 데이터 반영)
      queryClient.invalidateQueries({
        queryKey: ['issue', projectId, issueId],
      });

      // 이슈 목록도 갱신 (목록에서도 변경된 정보 반영)
      queryClient.invalidateQueries({
        queryKey: ['projectIssues', projectId],
      });
    },
    onError: (error) => {
      console.error('이슈 수정 실패:', error);
    },
  });
};
