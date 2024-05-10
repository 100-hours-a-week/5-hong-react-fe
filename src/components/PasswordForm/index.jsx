import styled from 'styled-components';

import Input from '@/components/Input';
import Button from '@/components/Button';

function PasswordForm() {
  const helperText = '*FIXME';

  return (
    <StyledForm>
      <StyledInputContainer>
        <Input
          id={'password'}
          type={'password'}
          label={'비밀번호'}
          required={true}
          placeholder={'이메일을 입력해주세요.'}
          helperText={helperText}
        />
      </StyledInputContainer>
      <StyledInputContainer>
        <Input
          id={'password-confirm'}
          type={'password'}
          label={'비밀번호 확인'}
          required={true}
          placeholder={'비밀번호를 입력해주세요.'}
          helperText={helperText}
        />
      </StyledInputContainer>

      <Button
        type={'summit'}
        text={'수정하기'}
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
