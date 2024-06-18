import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import {
  ButtonContainer,
  CloseModalButton,
  ModalContainer,
  ModalWrapper,
  StyledText,
  StyledTitle,
} from '@/components/Modal/Modal.style.js';

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

  const handleContainerClick = (e) => {
    e.stopPropagation();
  };

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
