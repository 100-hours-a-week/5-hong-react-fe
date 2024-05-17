import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

import S from '@/styles/common.jsx';
import PropTypes from 'prop-types';
import Button from '@/components/Button';

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  contents: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

function Modal({ title, contents, onClose, onConfirm }) {
  console.debug('Modal() - rendering');

  /**
   * <h1>이벤트 버블링 방지</h1>
   * <p>클릭 이벤트가 부모 요소까지 전파되어 `handleClose()` 가 동작되는 버블링 현상 방지</p>
   * @param {Event} e - 클릭 이벤트 객체
   */
  const handleContainerClick = (e) => {
    e.stopPropagation();
  };

  /**
   * <h1>모달 닫기 버튼 클릭 이벤트</h1>
   * <p>이벤트 버블링을 중단하고 `handleClose()` 호출하여 모달을 닫기</p>
   * @param {Event} e - 클릭 이벤트 객체
   */
  const handleCloseClick = (e) => {
    e.stopPropagation();
    onClose();
  };

  // 키보드 입력 처리 (Esc 키를 통한 모달 닫기)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // clean-up
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return createPortal(
    <ModalWrapper onClick={onClose}>
      <ModalContainer onClick={handleContainerClick}>
        <StyledTitle>
          <S.Highlight>{title}</S.Highlight>
        </StyledTitle>
        <StyledText>{contents}</StyledText>
        <ButtonContainer>
          <CloseModalButton onClick={handleCloseClick}>취소</CloseModalButton>
          <Button
            type={'submit'}
            text={'확인'}
            onClick={onConfirm}
            width={'127px'}
            $radius={'15px'}
          />
        </ButtonContainer>
      </ModalContainer>
    </ModalWrapper>,
    document.querySelector('#portal'),
  );
}

export default Modal;

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  width: 100%;
  height: 100%;

  background-color: rgb(0 0 0 / 50%);
  overflow: auto;
`;

const ModalContainer = styled.div`
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

const StyledTitle = styled.h2`
  font-size: 28px;
  font-weight: bold;
`;

const StyledText = styled.p`
  padding-top: 5px;

  font-size: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
`;

const CloseModalButton = styled.button`
  width: 127px;
  height: 43px;

  border: none;
  border-radius: 15px;
  background-color: black;

  color: #fff;
  text-align: center;

  cursor: pointer;
`;
