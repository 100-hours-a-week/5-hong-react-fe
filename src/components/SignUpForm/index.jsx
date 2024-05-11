import { useState } from 'react';
import styled from 'styled-components';

import ImageInput from '@/components/ImageInput';
import Input from '@/components/Input';
import Button from '@/components/Button';
import REGEX from '@/constants/regex.js';

// TODO: 로그인 이랑 겹치는 부분 전부 hooks 이동
function SignUpForm() {
  console.debug('SignUpForm() - rendering');

  // 이미지 업로드 state
  const [image, setImage] = useState(null);
  const [imageHelperText, setImageHelperText] =
    useState('*프로필 사진을 추가해주세요.');

  const onChangeProfileImage = (e) => {
    const file = e.target.files[0];
    if (!file) {
      setImage(null);
      setImageHelperText('*프로필 사진을 추가해주세요.');
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result);
      setImageHelperText(null);
    };
  };

  // 이메일 validation
  const [email, setEmail] = useState(null);
  const [emailHelperText, setEmailHelperText] =
    useState('*이메일을 작성해주세요.');

  const onChangeEmail = (e) => {
    const value = e.target.value;

    if (value.trim().length === 0) {
      setEmailHelperText('*이메일을 작성해주세요.');
      setEmail(null);
      return;
    }

    if (!REGEX.EMAIL.test(value)) {
      setEmailHelperText(
        '*올바른 이메일 주소 형식을 입력해주세요. (예:example@example.com)',
      );
      setEmail(null);
      return;
    }

    setEmailHelperText(null);
    setEmail(value);
  };

  // 비밀번호 validation
  const [password, setPassword] = useState(null);
  const [passwordHelperText, setPasswordHelperText] =
    useState('*비밀번호를 입력해주세요.');

  const onChangePassword = (e) => {
    const value = e.target.value;

    if (value.trim().length === 0) {
      setPasswordHelperText('*비밀번호를 입력해주세요.');
      setPassword(null);
      return;
    }

    if (!REGEX.PASSWORD.test(value)) {
      setPasswordHelperText(
        '*비밀번호는 8자 이상, 20자 이하이며, 대문자, 소문자, 숫자, 특수문자를 각각 최소 1개 포함해야합니다.',
      );
      setPassword(null);
      return;
    }

    setPasswordHelperText(null);
    setPassword(value);
  };

  // 비밀번호 확인 validation
  const [passwordConfirm, setPasswordConfirm] = useState(null);
  const [passwordConfirmHelperText, setPasswordConfirmHelperText] = useState(
    '*비밀번호를 한번 더 입력해주세요.',
  );

  const onChangePasswordConfirm = (e) => {
    const value = e.target.value;

    if (value.trim().length === 0) {
      setPasswordHelperText('*비밀번호를 한번 더 입력해주세요.');
      setPasswordConfirm(null);
      return;
    }

    if (value !== password) {
      setPasswordConfirmHelperText('*비밀번호가 일치하지 않습니다');
      setPasswordConfirm(null);
      return;
    }

    setPasswordConfirmHelperText(null);
    setPasswordConfirm(value);
  };

  // 닉네임 validation
  const [nickname, setNickname] = useState(null);
  const [nicknameHelperText, setNicknameHelperText] =
    useState('*닉네임을 입력해주세요.');

  const onChangeNickname = (e) => {
    const value = e.target.value;

    if (value.trim().length === 0) {
      setNicknameHelperText('*닉네임을 입력해주세요.');
      setNickname(null);
      return;
    }

    if (!REGEX.NICKNAME.test(value)) {
      setNicknameHelperText(
        '*닉네임은 띄어쓰기 없이 최대 10자까지 작성 가능합니다.',
      );
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
