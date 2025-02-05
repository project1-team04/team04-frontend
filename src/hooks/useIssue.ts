import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { createIssue, getIssue, getProjectIssues } from '@/apis/issueApi';
import { IssueResponse } from '@/types/issueTypes';

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
