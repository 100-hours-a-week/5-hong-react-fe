import { useState } from 'react';
import styled from 'styled-components';

import Input from '@/components/Input';
import Button from '@/components/Button';
import REGEX from '@/constants/regex.js';
import VALIDATE_MESSAGES from '@/constants/validateMessages.js';

function LoginForm() {
  console.debug('LoginForm() - rendering');

  // TODO: hook 으로 분리
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [emailHelperText, setEmailHelperText] = useState(
    VALIDATE_MESSAGES.EMAIL.REQUIRED,
  );
  const [passwordHelperText, setPasswordHelperText] = useState(
    VALIDATE_MESSAGES.PASSWORD.REQUIRED,
  );

  const isSubmitDisabled = !email || !password;

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

  const submitLoginForm = (e) => {
    e.preventDefault();

    console.log('TanStack query 적용');
    console.log('email =', email);
    console.log('password =', password);
  };

  return (
    <StyledLoginForm>
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
        $margin={'15px 0 0'}
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

const StyledInputContainer = styled.div`
  margin-top: 8px;
`;
