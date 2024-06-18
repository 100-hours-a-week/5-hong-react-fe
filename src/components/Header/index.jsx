import { useNavigate } from 'react-router-dom';

import {
  Container,
  StyledHeader,
  StyledTitleText,
} from '@/components/Header/Header.style.js';

import PATH from '@/constants/path.js';
import GoBackNav from '@/components/Header/GoBackNav';
import ProfileNav from '@/components/Header/ProfileNav';

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
