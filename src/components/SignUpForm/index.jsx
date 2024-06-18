import { useNavigate } from 'react-router-dom';

import {
  StyledForm,
  StyledInputContainer,
} from '@/components/SignUpForm/SignUpForm.style.js';

import PATH from '@/constants/path.js';
import Input from '@/components/Input';
import Button from '@/components/Button';
import ImageInput from '@/components/ImageInput';
import formValidate from '@/components/SignUpForm/formValidate.js';
import useForm from '@/hooks/useForm.js';
import useToast from '@/hooks/useToast.js';
import useUploadImage from '@/hooks/useUploadImage.js';
import { postSignup } from '@/apis/member/postSignup.js';

const SignUpForm = () => {
  console.debug('SignUpForm() - rendering');

  const createToast = useToast();
  const navigate = useNavigate();
  const { image, error, handleOnUpload } = useUploadImage(null);
  const { values, errors, isLoading, handleOnChange, handleOnSubmit } = useForm(
    {
      initialValues: {
        email: '',
        password: '',
        passwordConfirm: '',
        nickname: '',
      },
      onSubmit: () => signupRequest({ ...values, profileImage: image }),
      validateFn: (formValue) => formValidate(formValue),
    },
  );

  const signupRequest = async (loginInfo) => {
    await postSignup(loginInfo)
      .then(() => navigate(PATH.LOGIN))
      .catch(() => createToast({ message: '회원가입에 실패' }));
  };

  // 버튼 disabled
  const isSubmitDisabled =
    Object.keys(errors).length > 0 || isLoading || !!error;

  return (
    <StyledForm>
      <StyledInputContainer>
        <ImageInput
          id={'file'}
          type={'file'}
          onChange={handleOnUpload}
          image={image}
          label={'프로필 사진'}
          helperText={error}
        />
      </StyledInputContainer>
      <StyledInputContainer>
        <Input
          id={'email'}
          type={'text'}
          name={'email'}
          label={'이메일'}
          required={true}
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
          onChange={handleOnChange}
          helperText={errors.passwordConfirm}
        />
      </StyledInputContainer>
      <StyledInputContainer>
        <Input
          id={'nickname'}
          type={'text'}
          name={'nickname'}
          label={'닉네임'}
          required={true}
          onChange={handleOnChange}
          helperText={errors.nickname}
        />
      </StyledInputContainer>
      <Button
        width={'100%'}
        text={'회원가입'}
        type={'submit'}
        onClick={handleOnSubmit}
        disabled={isSubmitDisabled}
        $margin={'15px 0 0'}
      />
    </StyledForm>
  );
};

export default SignUpForm;
