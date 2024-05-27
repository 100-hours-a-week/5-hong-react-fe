import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import Input from '@/components/Input';
import Button from '@/components/Button';
import PATH from '@/constants/path.js';

import formValidate from '@/components/PasswordForm/formValidate.js';
import useForm from '@/hooks/useForm.js';
import useToast from '@/hooks/useToast.js';
import { updatePassword } from '@/apis/user.js';

function PasswordForm() {
  console.debug('PasswordForm() - rendering');

  const createToast = useToast();
  const navigate = useNavigate();
  const { values, errors, isLoading, handleOnChange, handleOnSubmit } = useForm(
    {
      initialValues: {
        password: '',
        passwordConfirm: '',
      },
      onSubmit: () => updatePasswordRequest({ ...values }),
      validateFn: formValidate,
    },
  );

  // 버튼 이벤트
  const isSubmitDisabled = Object.keys(errors).length > 0 || isLoading;

  const updatePasswordRequest = async (updateInfo) => {
    await updatePassword(updateInfo)
      .then(() => {
        navigate(PATH.MAIN);
        createToast({ message: '비밀번호 변경 완료' });
      })
      .catch(() => createToast({ message: '비밀번호 변경 실패' }));
  };

  return (
    <StyledForm>
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
      <StyledInputContainer>
        <Input
          id={'password-confirm'}
          type={'password'}
          name={'passwordConfirm'}
          label={'비밀번호 확인'}
          required={true}
          placeholder={'비밀번호를 입력해주세요.'}
          onChange={handleOnChange}
          helperText={errors.passwordConfirm}
        />
      </StyledInputContainer>

      <Button
        type={'submit'}
        text={'수정하기'}
        onClick={handleOnSubmit}
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
