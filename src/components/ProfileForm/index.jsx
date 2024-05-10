import { useEffect, useState } from 'react';
import styled from 'styled-components';

import S from '@/styles/common.jsx';
import Input from '@/components/Input';
import Button from '@/components/Button';
import ImageInput from '@/components/ImageInput';

function ProfileForm() {
  // TODO: State 추가하면서 전부 수정
  const email = 'kinjihong9598@gmail.com';
  const helperText = '*FIXME';
  const dummyImage = 'https://avatars.githubusercontent.com/u/144337839?v=4';

  const [image, setImage] = useState(null);

  // TODO: state 적용시 삭제
  useEffect(() => {
    setImage(dummyImage);
  }, []);

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

  return (
    <StyledForm>
      <StyledInputContainer>
        <ImageInput
          id={'file'}
          type={'file'}
          onChange={onChange}
          image={image}
          label={'프로필 사진*'}
          width={'95px'}
          height={'95px'}
          showChangeButton={true}
          $brightness={'50%'}
        />
      </StyledInputContainer>

      <div>
        <StyledSubTitle>
          <S.Highlight>이메일</S.Highlight>
        </StyledSubTitle>
        <StyledSubTitle>{email}</StyledSubTitle>
      </div>

      <div>
        <Input
          id={'nickname'}
          type={'text'}
          label={'닉네임'}
          required={true}
          helperText={helperText}
        />
      </div>

      <div>
        <Button width={'100%'} text={'수정 완료'} type={'summit'} />
        <StyledButton>회원 탈퇴</StyledButton>
      </div>

      <div>
        <Button
          width={'100px'}
          text={'수정 완료'}
          type={'summit'}
          $radius={'20px'}
        />
      </div>
    </StyledForm>
  );
}

export default ProfileForm;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  width: 100%;
  height: auto;

  margin: 10px 0;
`;

const StyledInputContainer = styled.div`
  text-align: left;
`;

const StyledSubTitle = styled.p`
  display: block;

  font-size: 16px;
  text-align: left;
  margin-bottom: 6px;
`;

const StyledButton = styled.button`
  margin: 7px 0 0;

  border: none;
  background-color: var(--white-1);
`;
