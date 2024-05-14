import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import GoBackNav from '@/components/Header/GoBackNav.jsx';
import ProfileNav from '@/components/Header/ProfileNav.jsx';

function Header() {
  // TODO: hook 이용해서 뒤로가기, 프로필창 보이게 하기

  let navigate = useNavigate();

  const handleGoMain = () => {
    console.log('TODO: 메인 페이지로 이동');
    navigate('/');
  };

  return (
    <StyledHeader>
      <Container>
        <GoBackNav />
        <StyledTitleText onClick={handleGoMain}>아무말 대잔치</StyledTitleText>
        <ProfileNav />
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
