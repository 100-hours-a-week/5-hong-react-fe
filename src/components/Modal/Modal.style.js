import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  width: 100%;
  height: 100%;

  background-color: rgb(0 0 0 / 50%);
  overflow: auto;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;

  position: absolute;
  top: 50%;
  left: 50%;

  width: 420px;
  height: 240px;

  padding: 20px;
  margin: 0 auto;

  border: 1px solid var(--dark-gray-1);
  border-radius: 20px;
  background-color: white;

  transform: translate(-50%, -50%);
`;

export const StyledTitle = styled.h2`
  font-size: 28px;
  font-weight: bold;
`;

export const StyledText = styled.p`
  padding-top: 5px;

  font-size: 20px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
`;

export const CloseModalButton = styled.button`
  width: 127px;
  height: 43px;

  border: none;
  border-radius: 15px;
  background-color: black;

  color: #fff;
  text-align: center;

  cursor: pointer;
`;
