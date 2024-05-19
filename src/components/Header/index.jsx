import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import PATH from '@/constants/path.js';
import GoBackNav from '@/components/Header/GoBackNav.jsx';
import ProfileNav from '@/components/Header/ProfileNav.jsx';

function Header() {
  console.debug('Header() - rendering');

  const navigate = useNavigate();

  const handleGoMain = () => {
    navigate(PATH.MAIN);
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
