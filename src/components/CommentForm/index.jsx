import styled from 'styled-components';

import S from '@/styles/common.jsx';
import Button from '@/components/Button/index.jsx';

function CommentForm() {
  // TODO: Common Button 수정되면 변경
  return (
    <StyledForm>
      <StyledTextarea />

      <S.Hr />

      <SummitButtonContainer>
        <Button
          width={'90px'}
          text={'댓글작성'}
          type={'summit'}
          $margin={'0 15px 0 0'}
          $radius={'8px'}
        />
      </SummitButtonContainer>
    </StyledForm>
  );
}

export default CommentForm;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 169px;

  border-radius: 8px;
  background-color: white;
`;

const StyledTextarea = styled.textarea`
  width: 490px;
  margin-top: 25px;

  height: 95px;

  border: none;
  outline: none;
`;

const SummitButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  width: 100%;

  padding: 10px 0;
`;
