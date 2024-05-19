import { useState } from 'react';

import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import PATH from '@/constants/path.js';
import ProfileImage from '@/components/ProfileImage';
import useAuth from '@/hooks/useAuth.js';
import useToast from '@/hooks/useToast.js';
import { logoutUser } from '@/apis/user.js';

ProfileNav.propTypes = {
  isLogin: PropTypes.bool,
  loginUser: PropTypes.object,
};

function ProfileNav() {
  const createToast = useToast();
  const navigate = useNavigate();
  const { userInfo, reload } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const handleGoUpdateProfile = () => {
    navigate(PATH.EDIT_PROFILE);
  };

  const handleGoEditPassword = () => {
    navigate(PATH.EDIT_PASSWORD);
  };

  const handleLogout = async () => {
    await logoutUser()
      .then(() => {
        navigate(PATH.LOGIN);
        setIsOpen(false);
        createToast({ message: '로그아웃 완료' });
        reload();
      })
      .catch(() => createToast({ message: '로그아웃 실패' }));
  };

  return (
    <ProfileContainer
      onMouseOver={() => setIsOpen(true)}
      onMouseOut={() => setIsOpen(false)}>
      {userInfo && (
        <>
          <ProfileImage src={userInfo.profileImage} alt={'AVATAR'} />
          {isOpen && (
            <DropdownContainer>
              <DropdownOption onClick={handleGoUpdateProfile}>
                회원정보 수정
              </DropdownOption>
              <DropdownOption onClick={handleGoEditPassword}>
                비밀번호 변경
              </DropdownOption>
              <DropdownOption onClick={handleLogout}>로그아웃</DropdownOption>
            </DropdownContainer>
          )}
        </>
      )}
    </ProfileContainer>
  );
}

export default ProfileNav;

const ProfileContainer = styled.div`
  width: 40px;
  height: 40px;
`;

const DropdownContainer = styled.ul`
  position: absolute;
  z-index: 1;

  min-width: 100px;

  background-color: lightgray;
`;

const DropdownOption = styled.li`
  padding: 12px 16px;

  font-size: 14px;

  cursor: pointer;

  &:hover {
    background-color: var(--white-2);
  }
`;
