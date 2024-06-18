import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import S from '@/styles/common.jsx';
import PATH from '@/constants/path.js';
import Modal from '@/components/Modal';
import Input from '@/components/Input';
import Button from '@/components/Button';
import ImageInput from '@/components/ImageInput';
import formValidate from '@/components/ProfileForm/formValidate.js';
import useForm from '@/hooks/useForm.js';
import useAuth from '@/hooks/useAuth.js';
import useToast from '@/hooks/useToast.js';
import useModal from '@/hooks/useModal.js';
import useUploadImage from '@/hooks/useUploadImage.js';
import { deleteWithdraw } from '@/apis/member/deleteWithdraw.js';
import { putUpdateProfile } from '@/apis/member/putUpdateProfile.js';

function ProfileForm() {
  console.debug('ProfileForm() - rendering');

  const createToast = useToast();
  const { userInfo, reload } = useAuth();
  const { isOpen, openModal, closeModal } = useModal();
  const { image, handleOnUpload } = useUploadImage(userInfo.profileImage);
  const { values, errors, isLoading, handleOnChange, handleOnSubmit } = useForm(
    {
      initialValues: { nickname: '' },
      onSubmit: () => updateRequest({ ...values, profileImage: image }),
      validateFn: (formValue) => formValidate(formValue),
    },
  );

  const navigate = useNavigate();

  const handleWithdrawButton = async (e) => {
    e.preventDefault();

    await deleteWithdraw()
      .then(() => {
        reload();
        navigate(PATH.LOGIN);
        createToast({ message: '회원탈퇴 완료' });
      })
      .catch(() => createToast({ message: '회원탈퇴 실패' }));
  };

  const updateRequest = async (userInfo) => {
    await putUpdateProfile(userInfo)
      .then(() => {
        reload();
        navigate(PATH.MAIN);
      })
      .catch(() => createToast({ message: '프로필 업로드 실패' }));
  };

  const handleGoMain = () => {
    navigate(PATH.MAIN);
  };

  // 버튼 disabled
  const isSubmitDisabled = Object.keys(errors).length > 0 || isLoading;

  return (
    <>
      <StyledForm>
        <StyledInputContainer>
          <ImageInput
            id={'file'}
            type={'file'}
            onChange={handleOnUpload}
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
          <StyledSubTitle>{userInfo.email}</StyledSubTitle>
        </div>

        <div>
          <Input
            id={'nickname'}
            type={'text'}
            name={'nickname'}
            label={'닉네임'}
            helperText={errors.nickname}
            onChange={handleOnChange}
          />
        </div>

        <div>
          <Button
            width={'100%'}
            text={'수정하기'}
            type={'submit'}
            disabled={isSubmitDisabled}
            onClick={handleOnSubmit}
          />
          <StyledButton type={'button'} onClick={openModal}>
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

      {isOpen && (
        <Modal
          title={'회원탈퇴를 하시겠습니까?'}
          contents={'작성하신 게시글과 댓글은 삭제됩니다.'}
          onClose={closeModal}
          onConfirm={handleWithdrawButton}
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
