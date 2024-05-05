import { useState } from 'react';
import styled from 'styled-components';

import ImageInput from '@/components/ImageInput';
import Input from '@/components/Input';
import Button from '@/components/Button';

function SignUpForm() {
  const [image, setImage] = useState(null);

  // TODO: 로그인 이랑 겹치는 부분 전부 hooks 이동 후 구현
  const helperText = 'FIXME';

  // 이미지 업로드 onChange
  const onChange = (e) => {
    const file = e.target.files[0];
    if (!file) {
      setImage(null);
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result);
    };
  };

  // 회원가입 버튼 onClick
  const onClick = (e) => {
    e.preventDefault();

    console.log('TODO: TanStack Query 적용 후 완료');
  };

  return (
    <StyledForm>
      <StyledInputContainer>
        <ImageInput
          id={'file'}
          type={'file'}
          onChange={onChange}
          image={image}
          label={'프로필 사진'}
          helperText={helperText}
        />
      </StyledInputContainer>
      <StyledInputContainer>
        <Input
          id={'email'}
          type={'text'}
          label={'이메일'}
          required={true}
          helperText={helperText}
        />
      </StyledInputContainer>
      <StyledInputContainer>
        <Input
          id={'password'}
          type={'password'}
          label={'비밀번호'}
          required={true}
          helperText={helperText}
        />
      </StyledInputContainer>
      <StyledInputContainer>
        <Input
          id={'password-confirm'}
          type={'password'}
          label={'비밀번호 확인'}
          required={true}
          helperText={helperText}
        />
      </StyledInputContainer>
      <StyledInputContainer>
        <Input
          id={'nickname'}
          type={'text'}
          label={'닉네임'}
          required={true}
          helperText={helperText}
        />
      </StyledInputContainer>
      <Button
        width={'100%'}
        text={'회원가입'}
        type={'summit'}
        onClick={onClick}
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
