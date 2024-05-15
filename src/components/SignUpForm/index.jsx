import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import ImageInput from '@/components/ImageInput';
import Input from '@/components/Input';
import Button from '@/components/Button';
import PATH from '@/constants/path.js';
import REGEX from '@/constants/regex.js';
import VALIDATE_MESSAGES from '@/constants/validateMessages.js';

import { signUpUser, validateEmail, validateNickname } from '@/apis/user.js';
import { uploadImage } from '@/apis/image.js';

// TODO: 로그인 이랑 겹치는 부분 전부 hooks 이동
function SignUpForm() {
  console.debug('SignUpForm() - rendering');

  const [image, setImage] = useState(null);
  const [imageHelperText, setImageHelperText] = useState(
    VALIDATE_MESSAGES.PROFILE_IMAGE.REQUIRED,
  );
  const [email, setEmail] = useState(null);
  const [emailHelperText, setEmailHelperText] = useState(
    VALIDATE_MESSAGES.EMAIL.REQUIRED,
  );
  const [password, setPassword] = useState(null);
  const [passwordHelperText, setPasswordHelperText] = useState(
    VALIDATE_MESSAGES.PASSWORD.REQUIRED,
  );
  const [passwordConfirm, setPasswordConfirm] = useState(null);
  const [passwordConfirmHelperText, setPasswordConfirmHelperText] = useState(
    VALIDATE_MESSAGES.PASSWORD_CONFIRM.REQUIRED,
  );
  const [nickname, setNickname] = useState(null);
  const [nicknameHelperText, setNicknameHelperText] = useState(
    VALIDATE_MESSAGES.NICKNAME.REQUIRED,
  );
  const navigate = useNavigate();

  // 이미지 업로드 event
  const handleChangeProfileImage = (e) => {
    const file = e.target.files[0];
    if (!file) {
      setImage(null);
      setImageHelperText(VALIDATE_MESSAGES.PROFILE_IMAGE.REQUIRED);
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = async () => {
      await uploadImage(file)
        .then((data) => {
          const { image } = data;
          setImage(image);
          setImageHelperText(null);
        })
        .catch(() => console.log('이미지 업로드 실패'));
    };
  };

  // 이메일 유효성 검사 이벤트
  const handleChangeEmail = async (e) => {
    const value = e.target.value;

    if (value.trim().length === 0) {
      setEmailHelperText(VALIDATE_MESSAGES.EMAIL.REQUIRED);
      setEmail(null);
      return;
    }

    if (!REGEX.EMAIL.test(value)) {
      setEmailHelperText(VALIDATE_MESSAGES.EMAIL.INVALID);
      setEmail(null);
      return;
    }

    const email = value;
    await validateEmail({ email })
      .then(() => {
        setEmailHelperText(null);
        setEmail(value);
      })
      .catch(() => {
        setEmailHelperText('*중복된 이메일입니다.');
        setEmail(null);
      });
  };

  // 비밀번호 유효성 검사 이벤트
  const handleChangePassword = (e) => {
    const value = e.target.value;

    if (value.trim().length === 0) {
      setPasswordHelperText(VALIDATE_MESSAGES.PASSWORD.REQUIRED);
      setPassword(null);
      return;
    }

    if (!REGEX.PASSWORD.test(value)) {
      setPasswordHelperText(VALIDATE_MESSAGES.PASSWORD.INVALID);
      setPassword(null);
      return;
    }

    setPasswordHelperText(null);
    setPassword(value);
  };

  // 비밀번호 확인 유효성 검사 이벤트
  const handleChangePasswordConfirm = (e) => {
    const value = e.target.value;

    if (value.trim().length === 0) {
      setPasswordConfirmHelperText(VALIDATE_MESSAGES.PASSWORD_CONFIRM.REQUIRED);
      setPasswordConfirm(null);
      return;
    }

    if (value !== password) {
      setPasswordConfirmHelperText(VALIDATE_MESSAGES.PASSWORD_CONFIRM.MISMATCH);
      setPasswordConfirm(null);
      return;
    }

    setPasswordConfirmHelperText(null);
    setPasswordConfirm(value);
  };

  useEffect(() => {
    if (passwordConfirm !== password) {
      setPasswordConfirmHelperText(VALIDATE_MESSAGES.PASSWORD_CONFIRM.MISMATCH);
      return;
    }
    setPasswordConfirmHelperText(null);
  }, [password, passwordConfirm]);

  // 닉네임 유효성 검사 이벤트
  const handleChangeNickname = async (e) => {
    const value = e.target.value;

    if (value.trim().length === 0) {
      setNicknameHelperText(VALIDATE_MESSAGES.NICKNAME.REQUIRED);
      setNickname(null);
      return;
    }

    if (!REGEX.NICKNAME.test(value)) {
      setNicknameHelperText(VALIDATE_MESSAGES.NICKNAME.INVALID);
      setNickname(null);
      return;
    }

    const nickname = value;
    await validateNickname({ nickname })
      .then(() => {
        setNicknameHelperText(null);
        setNickname(nickname);
      })
      .catch(() => {
        setNicknameHelperText('*중복된 닉네임입니다.');
        setNickname(null);
      });
  };

  // 버튼 disabled
  const isSubmitDisabled =
    !!imageHelperText ||
    !!emailHelperText ||
    !!passwordHelperText ||
    !!passwordConfirmHelperText ||
    !!nicknameHelperText;

  // 회원가입 버튼 onClick
  const handleSubmitButton = async (e) => {
    e.preventDefault();

    await signUpUser({ email, password, nickname, image })
      .then(() => navigate(PATH.LOGIN))
      .catch(() => console.log('회원가입실패'));
  };

  return (
    <StyledForm>
      <StyledInputContainer>
        <ImageInput
          id={'file'}
          type={'file'}
          onChange={handleChangeProfileImage}
          image={image}
          label={'프로필 사진'}
          helperText={imageHelperText}
        />
      </StyledInputContainer>
      <StyledInputContainer>
        <Input
          id={'email'}
          type={'text'}
          label={'이메일'}
          required={true}
          onChange={handleChangeEmail}
          helperText={emailHelperText}
        />
      </StyledInputContainer>
      <StyledInputContainer>
        <Input
          id={'password'}
          type={'password'}
          label={'비밀번호'}
          required={true}
          onChange={handleChangePassword}
          helperText={passwordHelperText}
        />
      </StyledInputContainer>
      <StyledInputContainer>
        <Input
          id={'password-confirm'}
          type={'password'}
          label={'비밀번호 확인'}
          required={true}
          onChange={handleChangePasswordConfirm}
          helperText={passwordConfirmHelperText}
        />
      </StyledInputContainer>
      <StyledInputContainer>
        <Input
          id={'nickname'}
          type={'text'}
          label={'닉네임'}
          required={true}
          onChange={handleChangeNickname}
          helperText={nicknameHelperText}
        />
      </StyledInputContainer>
      <Button
        width={'100%'}
        text={'회원가입'}
        type={'submit'}
        onClick={handleSubmitButton}
        disabled={isSubmitDisabled}
        $margin={'15px 0 0'}
      />
    </StyledForm>
  );
}

export default SignUpForm;

const StyledForm = styled.form`
  width: 100%;

  margin: 10px 0;
`;

const StyledInputContainer = styled.div`
  margin-top: 5px;
`;
