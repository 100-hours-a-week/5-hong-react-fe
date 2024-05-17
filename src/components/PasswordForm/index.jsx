import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Input from '@/components/Input';
import Button from '@/components/Button';
import VALIDATE_MESSAGES from '@/constants/validateMessages.js';
import REGEX from '@/constants/regex.js';
import PATH from '@/constants/path.js';

import { updatePassword } from '@/apis/user.js';

function PasswordForm() {
  const [password, setPassword] = useState(null);
  const [passwordHelperText, setPasswordHelperText] = useState(
    VALIDATE_MESSAGES.PASSWORD.REQUIRED,
  );
  const [passwordConfirm, setPasswordConfirm] = useState(null);
  const [passwordConfirmHelperText, setPasswordConfirmHelperText] = useState(
    VALIDATE_MESSAGES.PASSWORD_CONFIRM.REQUIRED,
  );
  const navigate = useNavigate();

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
    if (password && password === passwordConfirm) {
      setPasswordConfirmHelperText(null);
      return;
    }
    setPasswordConfirmHelperText(VALIDATE_MESSAGES.PASSWORD_CONFIRM.MISMATCH);
  }, [password, passwordConfirm]);

  // 버튼 이벤트
  const isSubmitDisabled = !!passwordHelperText || !!passwordConfirmHelperText;

  const handleSubmitButton = async (e) => {
    e.preventDefault();

    console.log('누름');
    console.log('password =', password);
    console.log('password confirm =', passwordConfirm);

    await updatePassword({ password })
      .then(() => navigate(PATH.MAIN))
      .catch(() => console.log('비밀번호 업데이트 실패'));
  };

  return (
    <StyledForm>
      <StyledInputContainer>
        <Input
          id={'password'}
          type={'password'}
          label={'비밀번호'}
          required={true}
          placeholder={'비밀번호를 입력해주세요.'}
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
          placeholder={'비밀번호를 입력해주세요.'}
          onChange={handleChangePasswordConfirm}
          helperText={passwordConfirmHelperText}
        />
      </StyledInputContainer>

      <Button
        type={'submit'}
        text={'수정하기'}
        onClick={handleSubmitButton}
        disabled={isSubmitDisabled}
        width={'100%'}
        $margin={'15px 0 0'}
      />
    </StyledForm>
  );
}

export default PasswordForm;

const StyledForm = styled.form`
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const StyledInputContainer = styled.div`
  margin-top: 8px;
`;
