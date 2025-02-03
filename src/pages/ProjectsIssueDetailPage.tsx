import Chat from '../components/chat/Chat';

const ProjectsIssueDetailPage = () => {
  const { data } = useOutletContext<OutletContextType>();
  console.log('user data:', data);
  console.log('userID:', data.userId);

  return (
    <>
      <div>Issue Name | Issue ID</div>
      <Chat />
    </>
  );
};

export default ProjectsIssueDetailPage;
