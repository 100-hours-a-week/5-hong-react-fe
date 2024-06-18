import styled, { keyframes } from 'styled-components';

export const StyledToast = styled.div`
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

export const fadeIn = keyframes`
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

export const StyledToastWrapper = styled.li`
  animation: ${fadeIn} 3s forwards;
`;
