import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import PATH from '@/constants/path.js';
import defaultProfileImage from '@/assets/images/defaultProfileImage.svg';

function ProfileNav() {
  // TODO: 로그인 ? 개인 프로필 : 기본 사진

  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const goUpdateProfile = () => {
    console.log('TODO: 프로필 수정');
    navigate(PATH.ROOT);
  };

  const goUpdatePassword = () => {
    console.log('TODO: 비밀번호 수정');
    navigate(PATH.ROOT);
  };

  const logout = () => {
    console.log('TODO: 로그아웃');
    navigate(PATH.ROOT);
  };

  return (
    <ProfileContainer
      onMouseOver={() => setIsOpen(true)}
      onMouseOut={() => setIsOpen(false)}>
      <ProfileImage src={defaultProfileImage} />
      {isOpen && (
        <DropdownContainer>
          <DropdownOption onClick={goUpdateProfile}>
            회원정보 수정
          </DropdownOption>
          <DropdownOption onClick={goUpdatePassword}>
            비밀번호 변경
          </DropdownOption>
          <DropdownOption onClick={logout}>로그아웃</DropdownOption>
        </DropdownContainer>
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

  border: 2px solid black;
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
