import { useState } from 'react';
import styled from 'styled-components';

import ImageInput from '@/components/ImageInput';
import Input from '@/components/Input';
import Button from '@/components/Button';
import REGEX from '@/constants/regex.js';
import VALIDATE_MESSAGES from '@/constants/validateMessages.js';

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
    VALIDATE_MESSAGES.EMAIL.REQUIRED,
  );
  const [passwordConfirm, setPasswordConfirm] = useState(null);
  const [passwordConfirmHelperText, setPasswordConfirmHelperText] = useState(
    VALIDATE_MESSAGES.PASSWORD_CONFIRM.REQUIRED,
  );
  const [nickname, setNickname] = useState(null);
  const [nicknameHelperText, setNicknameHelperText] = useState(
    VALIDATE_MESSAGES.NICKNAME.REQUIRED,
  );

  // 이미지 업로드 event
  const onChangeProfileImage = (e) => {
    const file = e.target.files[0];
    if (!file) {
      setImage(null);
      setImageHelperText(VALIDATE_MESSAGES.PROFILE_IMAGE.REQUIRED);
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result);
      setImageHelperText(null);
    };
  };

  // 이메일 유효성 검사 이벤트
  const onChangeEmail = (e) => {
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

    setEmailHelperText(null);
    setEmail(value);
  };

  // 비밀번호 유효성 검사 이벤트
  const onChangePassword = (e) => {
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
  const onChangePasswordConfirm = (e) => {
    const value = e.target.value;

    if (value.trim().length === 0) {
      setPasswordHelperText(VALIDATE_MESSAGES.PASSWORD_CONFIRM.REQUIRED);
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

  // 닉네임 유효성 검사 이벤트
  const onChangeNickname = (e) => {
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

    setNicknameHelperText(null);
    setNickname(value);
  };

  // 버튼 disabled
  const isSubmitDisabled =
    !image || !email || !password || !passwordConfirm || !nickname;

  // 회원가입 버튼 onClick
  const onClick = (e) => {
    e.preventDefault();

    console.log('TODO: TanStack Query 적용 후 완료');
    console.log('email =', email);
    console.log('password =', password);
    console.log('password confirm = ', passwordConfirm);
    console.log('nickname =', nickname);
    console.log('image = ', image);
  };

  return (
    <StyledForm>
      <StyledInputContainer>
        <ImageInput
          id={'file'}
          type={'file'}
          onChange={onChangeProfileImage}
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
          onChange={onChangeEmail}
          helperText={emailHelperText}
        />
      </StyledInputContainer>
      <StyledInputContainer>
        <Input
          id={'password'}
          type={'password'}
          label={'비밀번호'}
          required={true}
          onChange={onChangePassword}
          helperText={passwordHelperText}
        />
      </StyledInputContainer>
      <StyledInputContainer>
        <Input
          id={'password-confirm'}
          type={'password'}
          label={'비밀번호 확인'}
          required={true}
          onChange={onChangePasswordConfirm}
          helperText={passwordConfirmHelperText}
        />
      </StyledInputContainer>
      <StyledInputContainer>
        <Input
          id={'nickname'}
          type={'text'}
          label={'닉네임'}
          required={true}
          onChange={onChangeNickname}
          helperText={nicknameHelperText}
        />
      </StyledInputContainer>
      <Button
        width={'100%'}
        text={'회원가입'}
        type={'summit'}
        onClick={onClick}
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
