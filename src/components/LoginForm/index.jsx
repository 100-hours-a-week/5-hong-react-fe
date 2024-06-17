import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import Input from '@/components/Input';
import Button from '@/components/Button';
import PATH from '@/constants/path.js';

import formValidate from '@/components/LoginForm/formValidate.js';
import useForm from '@/hooks/useForm.js';
import useAuth from '@/hooks/useAuth.js';
import useToast from '@/hooks/useToast.js';
import { postLogin } from '@/apis/member/postLogin.js';

function LoginForm() {
  console.debug('LoginForm() - rendering');

  const createToast = useToast();
  const navigate = useNavigate();
  const { reload } = useAuth();
  const { isLoading, values, errors, handleOnChange, handleOnSubmit } = useForm(
    {
      initialValues: { email: '', password: '' },
      onSubmit: () => loginRequest({ ...values }),
      validateFn: (formValue) => formValidate(formValue),
    },
  );

  const loginRequest = async (loginInfo) => {
    await postLogin(loginInfo)
      .then(() => {
        navigate(PATH.MAIN);
        createToast({ message: '로그인 성공' });
        reload();
      })
      .catch(() => {
        createToast({ message: '이메일 혹은 비밀번호 오류' });
      });
  };

  const isSubmitDisabled = Object.keys(errors).length > 0 || isLoading;

  return (
    <StyledLoginForm>
      <StyledInputContainer>
        <Input
          id={'email'}
          type={'text'}
          name={'email'}
          label={'이메일'}
          required={true}
          placeholder={'이메일을 입력해주세요.'}
          onChange={handleOnChange}
          helperText={errors.email}
        />
      </StyledInputContainer>
      <StyledInputContainer>
        <Input
          id={'password'}
          type={'password'}
          name={'password'}
          label={'비밀번호'}
          required={true}
          placeholder={'비밀번호를 입력해주세요.'}
          onChange={handleOnChange}
          helperText={errors.password}
        />
      </StyledInputContainer>

      <Button
        type={'submit'}
        text={'로그인'}
        width={'100%'}
        disabled={isSubmitDisabled}
        onClick={handleOnSubmit}
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
