import { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

Toast.propTypes = {
  children: PropTypes.node,
};

function Toast({ children }) {
  const [isShown, setIsShown] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShown(false);
    }, 3000);

    return () => clearTimeout(timer); // clean up
  }, []);

  return isShown ? (
    <StyledToastWrapper>
      <StyledToast>{children}</StyledToast>
    </StyledToastWrapper>
  ) : null;
}

export default Toast;

const StyledToast = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  width: 250px;

  padding: 15px;

  border-radius: 8px;
  background-color: black;

  color: white;
  font-size: small;
  line-height: 1.5;
  box-shadow: 3px 3px 3px 1px #bcbcbc;
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(30px);
  }

  10% {
    height: fit-content;
    opacity: 1;
    transform: translateY(0px);
  }

  90% {
    height: fit-content;
    opacity: 1;
    transform: translateY(0px);
  }

  100% {
    opacity: 0;
    height: 0;
    transform: translateY(-50px);
  }
`;

const StyledToastWrapper = styled.li`
  animation: ${fadeIn} 3s forwards;
`;
