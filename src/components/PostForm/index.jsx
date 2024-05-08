import styled from 'styled-components';

import S from '@/styles/common.jsx';
import Button from '@/components/Button';

// TODO: button, input(text, textarea) 수정후 리팩토링
function MakePostForm() {
  return (
    <StyledForm>
      <StyledSubTitle>제목*</StyledSubTitle>

      <S.Hr />

      <StyledInput
        id={'title'}
        type={'text'}
        placeholder={'제목을 입력해주세요. (최대 26글자)'}
      />

      <S.Hr />

      <StyledSubTitle>내용*</StyledSubTitle>

      <S.Hr />

      <StyledTextarea placeholder={'내용을 입력해주세요!'}></StyledTextarea>

      <S.Hr />

      <HelperText>*FIXME</HelperText>
      <StyledSubTitle>이미지</StyledSubTitle>
      <StyledFileInput type={'file'} id={'file'} accept={'image/*'} />

      <ButtonContainer>
        <Button width={'350px'} text={'완료'} type={'summit'} />
      </ButtonContainer>
    </StyledForm>
  );
}

export default MakePostForm;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledSubTitle = styled.p`
  margin: 15px 15px 15px 30px;

  font-size: 15px;
`;

const StyledInput = styled.input`
  width: 540px;

  padding: 10px;
  margin: 20px;

  border: none;
  background-color: transparent;
`;

const StyledTextarea = styled.textarea`
  width: 540px;
  height: 300px;

  padding: 10px;
  margin: 20px;

  border: none;
  background-color: transparent;
`;

const HelperText = styled.p`
  margin-top: 10px;
  margin-left: 28px;

  color: red;
  font-size: 12px;
`;

const StyledFileInput = styled.input`
  margin: 0 0 30px 30px;
`;

const ButtonContainer = styled.div`
  align-items: center;

  width: 100%;
`;
