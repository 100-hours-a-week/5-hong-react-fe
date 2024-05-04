import { useState } from 'react';
import styled from 'styled-components';

import Input from '@/components/Input/index.jsx';
import Button from '@/components/Button/index.jsx';
import REGEX from '@/constants/regex.js';

function LoginForm() {
  // TODO: hook 으로 분리

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailHelperText, setEmailHelperText] = useState('');
  const [passwordHelperText, setPasswordHelperText] = useState('');

  const isSubmitDisabled = email.length === 0 || password.length === 0;

  const onChangeEmail = (e) => {
    const value = e.target.value;

    if (value.trim().length === 0) {
      setEmailHelperText('*이메일을 입력해주세요.');
      setEmail(value);
      return;
    }

    if (!REGEX.EMAIL.test(value)) {
      setEmailHelperText(
        '*올바른 이메일 주소 형식을 입력해주세요. (예:example@example.com)',
      );
      setEmail('');
      return;
    }

    setEmailHelperText('');
    setEmail(value);
  };

  const onChangePassword = (e) => {
    const value = e.target.value;

    if (value.trim().length === 0) {
      setPasswordHelperText('*비밀번호를 입력해주세요.');
      setPassword('');
      return;
    }

    if (!REGEX.PASSWORD.test(value)) {
      setPasswordHelperText(
        '*비밀번호는 8자 이상, 20자 이하이며, 대문자, 소문자, 숫자, 특수문자를 각각 최소 1개 포함해야합니다.',
      );
      setPassword('');
      return;
    }

    setPasswordHelperText('');
    setPassword(value);
  };

  const submitLoginForm = (e) => {
    e.preventDefault();

    console.log('TanStack query 적용');
  };

  return (
    <StyledLoginForm>
      <StyledText>로그인</StyledText>

      <StyledInputContainer>
        <Input
          id={'email'}
          type={'text'}
          label={'이메일'}
          required={true}
          placeholder={'이메일을 입력해주세요.'}
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
          placeholder={'비밀번호를 입력해주세요.'}
          onChange={onChangePassword}
          helperText={passwordHelperText}
        />
      </StyledInputContainer>

      <Button
        type={'summit'}
        text={'로그인'}
        width={'100%'}
        disabled={isSubmitDisabled}
        onClick={submitLoginForm}
      />
    </StyledLoginForm>
  );
}

export default LoginForm;

const StyledLoginForm = styled.form`
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const StyledText = styled.h1`
  flex-direction: column;
  justify-content: center;

  height: auto;
`;

const StyledInputContainer = styled.div`
  align-items: center;

  min-height: 75px;
  margin-top: 10px;
`;
