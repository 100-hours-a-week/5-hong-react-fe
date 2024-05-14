import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import S from '@/styles/common.jsx';
import Input from '@/components/Input';
import Button from '@/components/Button';
import ImageInput from '@/components/ImageInput';
import Modal from '@/components/Modal';
import VALIDATE_MESSAGES from '@/constants/validateMessages.js';
import REGEX from '@/constants/regex.js';

ProfileForm.propTypes = {
  loginUser: PropTypes.object,
};

function ProfileForm({ loginUser }) {
  console.debug('ProfileForm() - rendering');

  const [isDisabled, setIsDisabled] = useState(true);
  const [nickname, setNickname] = useState(null);
  const [helperText, setHelperText] = useState(
    VALIDATE_MESSAGES.NICKNAME.REQUIRED,
  );

  const navigate = useNavigate();

  // 닉네임 유효성 검사 이벤트
  const handleChangeNickname = (e) => {
    const value = e.target.value;

    if (value.trim().length === 0) {
      setHelperText(VALIDATE_MESSAGES.NICKNAME.REQUIRED);
      setNickname(null);
      setIsDisabled(true);
      return;
    }

    if (!REGEX.NICKNAME.test(value)) {
      setHelperText(VALIDATE_MESSAGES.NICKNAME.INVALID);
      setNickname(null);
      setIsDisabled(true);
      return;
    }

    setHelperText(null);
    setNickname(value);
    setIsDisabled(false);
  };

  // Modal state
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = useCallback(() => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden'; // 스크롤 이벤트 방지
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsOpen(false);
    document.body.style.overflow = 'auto'; // 스크롤 이벤트 방지
  }, []);

  const handleWithdrawButton = (e) => {
    e.preventDefault();

    console.log('누름');
  };

  // 이미지 업로드 state
  const [image, setImage] = useState(null);

  useEffect(() => {
    setImage(loginUser.profileImage);
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) {
      setImage(null);
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result);
    };
  };

  const handleUpdateButton = (e) => {
    e.preventDefault();

    console.log(`nickname: ${nickname}`);
  };

  const handleGoMain = () => {
    navigate('/');
  };

  return (
    <>
      <StyledForm>
        <StyledInputContainer>
          <ImageInput
            id={'file'}
            type={'file'}
            onChange={handleImageUpload}
            image={image}
            label={'프로필 사진*'}
            width={'95px'}
            height={'95px'}
            showChangeButton={true}
            $brightness={'50%'}
          />
        </StyledInputContainer>

        <div>
          <StyledSubTitle>
            <S.Highlight>이메일</S.Highlight>
          </StyledSubTitle>
          <StyledSubTitle>{loginUser.email}</StyledSubTitle>
        </div>

        <div>
          <Input
            id={'nickname'}
            type={'text'}
            label={'닉네임'}
            helperText={helperText}
            onChange={handleChangeNickname}
          />
        </div>

        <div>
          <Button
            width={'100%'}
            text={'수정하기'}
            type={'submit'}
            disabled={isDisabled}
            onClick={handleUpdateButton}
          />
          <StyledButton type={'button'} onClick={handleOpenModal}>
            회원 탈퇴
          </StyledButton>
        </div>

        <div>
          <Button
            width={'100px'}
            text={'수정완료'}
            type={'button'}
            onClick={handleGoMain}
            $radius={'20px'}
          />
        </div>
      </StyledForm>

      {/*TODO: 추후 전역 hooks 로 관리 (리팩토링)*/}
      {isOpen && (
        <Modal
          title={'회원탈퇴를 하시겠습니까?'}
          contents={'작성하신 게시글과 댓글은 삭제됩니다.'}
          handleClose={handleCloseModal}
          handleConfirm={handleWithdrawButton}
        />
      )}
    </>
  );
}

export default ProfileForm;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  width: 100%;
  height: auto;

  margin: 10px 0;
`;

const StyledInputContainer = styled.div`
  text-align: left;
`;

const StyledSubTitle = styled.p`
  display: block;

  font-size: 16px;
  text-align: left;
  margin-bottom: 6px;
`;

const StyledButton = styled.button`
  margin: 7px 0 0;

  border: none;
  background-color: var(--white-1);
`;
