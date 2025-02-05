import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { createIssue, getIssue } from '@/apis/issueApi';
import { IssueResponse } from '@/types/issueTypes';

export const useCreateIssue = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createIssue,
    onSuccess: (newIssue) => {
      // 전체 이슈 목록 캐시 무효화 (목록 최신 상태 유지)
      queryClient.invalidateQueries({
        queryKey: ['issues', newIssue.projectId],
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
