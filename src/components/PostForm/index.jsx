import styled from 'styled-components';
import PropTypes from 'prop-types';

import S from '@/styles/common.jsx';
import Button from '@/components/Button';
import formValidate from '@/components/PostForm/formValidate.js';
import useForm from '@/hooks/useForm.js';
import useUploadImage from '@/hooks/useUploadImage.js';

PostForm.propTypes = {
  data: PropTypes.object,
  onSubmit: PropTypes.func,
};

function PostForm({ data, onSubmit }) {
  console.debug('PostForm() - rendering');

  const initialValues = data
    ? data
    : { title: '', contents: '', thumbnail: '' };

  const { image, handleOnUpload } = useUploadImage(null);
  const { values, errors, isLoading, handleOnChange, handleOnSubmit } = useForm(
    {
      initialValues,
      onSubmit: () => onSubmit({ ...values, thumbnail: image }),
      validateFn: formValidate,
    },
  );

  const isSubmitDisabled = Object.keys(errors).length > 0 || isLoading;

  return (
    <StyledForm>
      <StyledSubTitle>제목*</StyledSubTitle>

      <S.Hr />

      <StyledInput
        id={'title'}
        type={'text'}
        name={'title'}
        defaultValue={data ? data.title : null}
        placeholder={'제목을 입력해주세요. (최대 26글자)'}
        onChange={handleOnChange}
      />

      <S.Hr />

      <StyledSubTitle>내용*</StyledSubTitle>

      <S.Hr />

      <StyledTextarea
        name={'contents'}
        placeholder={'내용을 입력해주세요!'}
        defaultValue={data ? data.contents : null}
        onInput={handleOnChange}
      />

      <S.Hr />

      <HelperText>{errors.message}</HelperText>
      <StyledSubTitle>이미지</StyledSubTitle>
      <StyledFileInput
        type={'file'}
        id={'file'}
        accept={'image/*'}
        src={image}
        onChange={handleOnUpload}
      />

      <ButtonContainer>
        <Button
          width={'350px'}
          text={'완료'}
          type={'submit'}
          onClick={handleOnSubmit}
          disabled={isSubmitDisabled}
        />
      </ButtonContainer>
    </StyledForm>
  );
}

export default PostForm;

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
