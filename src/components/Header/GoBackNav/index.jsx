import { useNavigate } from 'react-router-dom';

import {
  StyledButton,
  StyledImg,
} from '@/components/Header/GoBackNav/GoBackNav.style.js';

import goBackImage from '@/assets/images/goBackImage.svg';

function GoBackNav() {
  const navigate = useNavigate();

  const handleGoBackButton = () => {
    console.log('뒤로가기');
    navigate(-1);
  };

  return (
    <StyledButton onClick={handleGoBackButton}>
      <StyledImg src={goBackImage} alt='뒤로가기 이미지' />
    </StyledButton>
  );
}

export default GoBackNav;
