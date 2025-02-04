import {
  deleteProject,
  getMember,
  inviteMember,
  modifyProject,
} from '@/apis/projectApi';
import MemberCard from '@/components/MemberCard';
import Modal from '@/components/Modal';
import ProjectsLayout from '@/components/ProjectsLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useModalStore, ModalType } from '@/stores/useModalStore';

interface Member {
  id: string;
  name: string;
  email: string;
  role: 'MANAGER' | 'MEMBER';
}

const ProjectsSettingPage = () => {
  const navigate = useNavigate();
  const { modalType, open } = useModalStore();

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

  const handleMember = async (projectId: number) => {
    try {
      const membersData = await getMember(projectId);

      console.log('프로젝트 설정 - 팀원', membersData);

      if (Array.isArray(membersData)) {
        setMembers(
          membersData.map((member) => ({
            id: member.userId,
            name: member.userName,
            email: member.email,
            role: member.role,
          }))
        );
      } else {
        console.log('팀원 데이터가 배열이 아닙니다:', membersData);
        setMembers([]); // 데이터가 잘못된 경우 빈 배열로 설정
      }
    } catch (error) {
      console.log('프로젝트 생성 페이지 에러 - 인원 초대', error);
    }
  };

  useEffect(() => {
    if (projectId) {
      handleMember(Number(projectId));
    }
  }, [projectId]);

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
            role: 'MEMBER',
          },
        ]);
      } else setInviteMessage(message);
    } catch (error) {
      console.log('프로젝트 생성 페이지 에러 - 인원 초대', error);
    }
  };

  return (
    <ProjectsLayout
      header='프로젝트 설정'
      deleteButton='프로젝트 삭제'
      onDelete={handleDelete}
      projectId={Number(projectId)}
      onInputChange={(e) => setProjectName(e.target.value)}
    >
      <div className='flex flex-col h-full'>
        <div className='grid w-full grid-cols-2 gap-5 p-4 mt-4 mb-4 overflow-y-auto bg-bg-deep'>
          {members && members.length > 0 ? (
            members.map((member) => (
              <MemberCard
                key={member.id}
                name={member.name}
                email={member.email}
                role={member.role}
              />
            ))
          ) : (
            <p>팀원이 없습니다.</p>
          )}
        </div>
        {inviteMessage && (
          <p className='mb-4 mt-[-10px] text-sm text-text-error'>
            {inviteMessage}
          </p>
        )}

        <div className='flex flex-col w-full mb-9 gap-y-4'>
          <Button
            variant='secondary'
            children={'+ 인원 추가'}
            onClick={() => open(ModalType.INVITE_PEOPLE)}
          />

          <Button
            children='설정 완료'
            disabled={!projectName}
            onClick={() => handleUpdate(Number(projectId))}
          />
        </div>
      </div>

      {modalType === ModalType.INVITE_PEOPLE && (
        <Modal
          title={'인원 초대'}
          content={
            <div className='w-64'>
              <span className='text-sm'>
                이메일 <span className='text-red'>*</span>
              </span>
              <Input
                onChange={(e) => {
                  setEmail(e.target.value);
                  setInviteMessage('');
                }}
              />
            </div>
          }
          buttons={[
            { text: '취소', variantStyle: 'outline' },
            {
              text: '추가',
              onClick: () => {
                if (projectId) {
                  console.log('인원 추가 전송:', projectId, email);

                  if (email) {
                    handleInviteMember(Number(projectId), email);
                  } else {
                    console.error('이메일이 비어 있습니다.');
                  }
                } else {
                  console.error('projectId가 undefined입니다.');
                }
              },
            },
          ]}
        />
      )}
    </ProjectsLayout>
  );
};

export default ProjectsSettingPage;
