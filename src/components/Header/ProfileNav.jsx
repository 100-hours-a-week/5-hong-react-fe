import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import PATH from '@/constants/path.js';

import { logoutUser } from '@/apis/user.js';

ProfileNav.propTypes = {
  isLogin: PropTypes.bool,
  loginUser: PropTypes.object,
};

// TODO: 로그인 ? 개인 프로필 : 기본 사진
function ProfileNav({ isLogin, loginUser }) {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const handleGoUpdateProfile = () => {
    navigate(PATH.EDIT_PROFILE);
  };

  const handleGoEditPassword = () => {
    navigate(PATH.EDIT_PASSWORD);
  };

  const handleLogout = async () => {
    await logoutUser()
      .then(() => navigate(PATH.LOGIN))
      .catch(() => console.log('로그아웃 실패'));
  };

  return (
    <ProfileContainer
      onMouseOver={() => setIsOpen(true)}
      onMouseOut={() => setIsOpen(false)}>
      {isLogin && (
        <>
          <ProfileImage src={loginUser.profileImage} alt={'AVATAR'} />
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

const ProfileImage = styled.img`
  width: 36px;
  height: 36px;

  border: 1px solid black;
  border-radius: 50%;
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
