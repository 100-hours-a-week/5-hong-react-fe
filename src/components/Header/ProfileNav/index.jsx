import { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import {
  DropdownContainer,
  DropdownOption,
  ProfileContainer,
} from '@/components/Header/ProfileNav/ProfileNav.style.js';

import PATH from '@/constants/path.js';
import ProfileImage from '@/components/ProfileImage/index.jsx';
import useAuth from '@/hooks/useAuth.js';
import useToast from '@/hooks/useToast.js';
import { postLogout } from '@/apis/member/postLogout.js';

const ProfileNav = () => {
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
    await postLogout()
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
};

ProfileNav.propTypes = {
  isLogin: PropTypes.bool,
  loginUser: PropTypes.object,
};

export default ProfileNav;
