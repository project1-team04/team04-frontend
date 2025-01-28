import { deleteProject, inviteMember, modifyProject } from '@/apis/projectApi';
import ProjectsLayout from '@/components/ProjectsLayout';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

interface Member {
  id: string;
  name: string;
  email: string;
  position?: 'Project Manager' | 'Member';
}

const member: Member[] = [
  {
    id: '1',
    name: '정태승',
    email: 'hfgdf3@naver.com',
    position: 'Project Manager',
  },
  // { id: '2', name: '권보령', email: 'hfgdf3@naver.com' },
];

const ProjectsSettingPage = () => {
  const [projectName, setProjectName] = useState('');
  const [email, setEmail] = useState<string>('');
  const navigate = useNavigate();

  const { projectId } = useParams();

  const [inviteMessage, setInviteMessage] = useState<string>('');

  const handleDelete = async (projectId: number) => {
    try {
      await deleteProject(projectId);

      navigate('/projects');
    } catch (error) {
      console.log('프로젝트 삭제:', error);
    }
  };

  const handleUpdate = async (projectId: number) => {
    try {
      await modifyProject(projectId, projectName);

      navigate('/projects');
    } catch (error) {
      console.log('프로젝트명 수정:', error);
    }
  };

  const handleInviteMember = async (projectId: number, email: string) => {
    try {
      const res = await inviteMember(projectId, email);
      console.log('프로젝트 생성 페이지 - 인원 초대', res);

      console.log('프로젝트 생성 페이지 - 인원 초대', res.message);

      if (res.message) {
        setInviteMessage(res.message);
      }
    } catch (error) {
      console.log('프로젝트 생성 페이지 에러 - 인원 초대', error);
    }
  };

  console.log(email);

  return (
    <>
      <ProjectsLayout
        header='프로젝트 설정'
        deleteButton='프로젝트 삭제'
        member={member}
        projectName={projectName}
        projectId={projectId ? Number(projectId) : undefined}
        onUpdate={handleUpdate}
        onInputChange={(e) => setProjectName(e.target.value)}
        onDelete={handleDelete}
        onInvite={handleInviteMember}
        onEmailChange={(e) => setEmail(e.target.value)}
        email={email}
        inviteMessage={inviteMessage}
      />
    </>
  );
};

export default ProjectsSettingPage;
