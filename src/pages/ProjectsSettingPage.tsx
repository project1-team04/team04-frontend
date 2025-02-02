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

const ProjectsSettingPage = () => {
  const navigate = useNavigate();

  const [projectName, setProjectName] = useState('');
  const [email, setEmail] = useState<string>('');
  const [inviteMessage, setInviteMessage] = useState<string>('');
  const [members, setMembers] = useState<Member[]>([]);
  const { projectId } = useParams();

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
      const {
        name,
        email: invitedEmail,
        message,
      } = await inviteMember(projectId, email);
      console.log('프로젝트 생성 페이지 - 인원 초대', name, invitedEmail);

      if (!message) {
        setMembers((prevMembers) => [
          ...prevMembers,
          {
            id: crypto.randomUUID(),
            name,
            email: invitedEmail,
            position: 'Member',
          },
        ]);
      } else setInviteMessage(message);
    } catch (error) {
      console.log('프로젝트 생성 페이지 에러 - 인원 초대', error);
    }
  };

  return (
    <>
      <ProjectsLayout
        header='프로젝트 설정'
        deleteButton='프로젝트 삭제'
        member={members}
        projectName={projectName}
        projectId={projectId ? Number(projectId) : undefined}
        onUpdate={handleUpdate}
        onInputChange={(e) => setProjectName(e.target.value)}
        onDelete={handleDelete}
        onInvite={handleInviteMember}
        onEmailChange={(e) => {
          setEmail(e.target.value);
          setInviteMessage('');
        }}
        email={email}
        inviteMessage={inviteMessage}
      />
    </>
  );
};

export default ProjectsSettingPage;
