import styled from 'styled-components';

import { Highlight } from '@/styles/common.jsx';

function CommentBox() {
  // 임시
  const contents = '댓글 내용';

  const imageUrl = 'https://avatars.githubusercontent.com/u/144337839?v=4';

  // TODO: Common Button 수정되면 변경
  return (
    <CommentInfoContainer>
      <OwnerInfoContainer>
        <StyledImage src={imageUrl} alt={'OWNER_PROFILE'} />
        <p>
          <Highlight>더미 작성자</Highlight>
        </p>
        <p>2021-01-01 00:00:00</p>

        <ButtonContainer>
          <StyledButton>수정</StyledButton>
          <StyledButton>삭제</StyledButton>
        </ButtonContainer>
      </OwnerInfoContainer>

      <CommentContents>
        <p>{contents}</p>
      </CommentContents>
    </CommentInfoContainer>
  );
}

export default CommentBox;

const CommentInfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0 20px 20px;

  font-size: 15px;
  text-align: left;
`;

const OwnerInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

const StyledImage = styled.img`
  width: 36px;
  height: 36px;

  border: 1px solid gray;
  border-radius: 50%;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100px;
  margin-top: 30px;
  margin-left: auto;
`;

const StyledButton = styled.button`
  width: 48px;
  height: 26px;

  border: 1px solid #aca0eb;
  border-radius: 5px;
  background-color: #f4f5f7;

  color: #000;
  font-size: 13px;
  text-align: center;

  cursor: pointer;
`;

const CommentContents = styled.div`
  padding-left: 59px;
`;
