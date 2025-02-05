import { useQuery } from '@tanstack/react-query';
import instance from '@/apis/instance';

export interface Label {
  id: string;
  projectId: number;
  name: string;
  description: string;
  hexCode: string;
}

// 해당 프로젝트의 라벨 목록 조회
export const useGetLabels = (projectId: number) => {
  return useQuery<Label[]>({
    queryKey: ['labels', projectId],
    queryFn: async () => {
      const response = await instance.get(`/projects/${projectId}/labels`);
      return response.data;
    },
    enabled: !!projectId, // projectId가 존재할 때만 실행
  });
};
