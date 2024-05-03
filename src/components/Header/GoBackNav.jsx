import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

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

const StyledButton = styled.button`
  border: none;
  background-color: transparent;
`;

const StyledImg = styled.img`
  width: 40px;
  height: 40px;
`;
