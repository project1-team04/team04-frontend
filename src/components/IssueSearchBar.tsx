import SearchInput from './SearchInput';

interface SearchResult {
  id: number;
  issueName: string;
  assignee: string;
}

// const mockSearchResults: SearchResult[] = []; // 조건부렌더링 테스트용
const mockSearchResults: SearchResult[] = [
  {
    id: 1,
    issueName: '로그인 오류 발생!!! 로그인 오류 발생!!! 로그인 오류 발생!!!',
    assignee: '양혜림',
  },
  { id: 2, issueName: '대시보드 UI 버그', assignee: '권보령' },
  { id: 3, issueName: 'API 응답 속도 저하', assignee: '정태승' },
  { id: 4, issueName: '파일 업로드 실패', assignee: '이태정' },
  { id: 5, issueName: '알림 기능 미작동', assignee: '명광호' },
  // { id: 6, issueName: '모바일 반응형 깨짐', assignee: '양혜림' },
  // { id: 7, issueName: '결제 오류 리포트', assignee: '권보령' },
  // { id: 8, issueName: '404 페이지 미적용', assignee: '정태승' },
  // { id: 9, issueName: '다크 모드 안됨', assignee: '이태정' },
  // { id: 10, issueName: '이메일 인증 불가', assignee: '명광호' },
  // { id: 11, issueName: '소셜 로그인 오류 발생', assignee: '양혜림' },
  // { id: 12, issueName: '채팅 UI 버그', assignee: '권보령' },
];

const IssueSearchBar = () => {
  return (
    <div className='flex h-full flex-col items-center overflow-hidden'>
      <SearchInput />

      {/* 검색 결과 영역 - 스크롤 적용 */}
      <div className='my-3 h-full w-full divide-y divide-divider-default overflow-y-auto rounded-lg border border-bg-deep bg-bg-deep'>
        {mockSearchResults.length > 0 ? (
          mockSearchResults.map((issue) => (
            <div
              key={issue.id}
              className='bg-white px-4 py-2 hover:bg-bg-light'
            >
              <p className='truncate text-sm font-medium'>{issue.issueName}</p>
              <p className='truncate text-xs text-text-sub'>{issue.assignee}</p>
            </div>
          ))
        ) : (
          <p className='px-4 py-2 text-center text-sm text-text-sub'>
            검색 결과가 없습니다.
          </p>
        )}
      </div>
    </div>
  );
};

export default IssueSearchBar;
