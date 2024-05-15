import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import GoBackNav from '@/components/Header/GoBackNav.jsx';
import ProfileNav from '@/components/Header/ProfileNav.jsx';

import { getUserInfo } from '@/apis/user.js';

// TODO: hook 이용해서 뒤로가기, 프로필창 보이게 하기
// TODO: 커스텀 훅으로 전역 로그인 상태 확인
function Header() {
  const [isLogin, setIsLogin] = useState(false);
  const [loginUser, setLoginUser] = useState({});

  const fetchLoginUser = useCallback(async () => {
    const response = await getUserInfo();
    console.log(`response = ${response.message}`);

    setLoginUser({
      ...response,
    });
    setIsLogin(true);
  }, []);

  useEffect(() => {
    (async () => {
      await fetchLoginUser();
    })();
  }, [fetchLoginUser]);

  const navigate = useNavigate();

  const handleGoMain = () => {
    console.log('TODO: 메인 페이지로 이동');
    navigate('/');
  };

  return (
    <StyledHeader>
      <Container>
        <GoBackNav />
        <StyledTitleText onClick={handleGoMain}>아무말 대잔치</StyledTitleText>
        <ProfileNav isLogin={isLogin} loginUser={loginUser} />
      </Container>
    </StyledHeader>
  );
}

export default Header;

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 10vh; /* 화면 전체 높이의 10%를 차지하도록 설정 */
  max-height: 10vh;
  border-bottom: 1px solid #000;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 500px;
`;

const StyledTitleText = styled.h1`
  font-weight: bold;
  text-align: center;

  cursor: pointer;
`;
