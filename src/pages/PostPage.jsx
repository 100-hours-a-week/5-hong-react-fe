import styled from 'styled-components';

import S from '@/styles/common.jsx';
import PostBox from '@/components/PostBox';
import CommentBox from '@/components/CommentBox';
import CommentForm from '@/components/CommentForm';

function PostPage() {
  return (
    <StyledArticle>
      <PostBox />

      <S.Hr />

      <CommentContainer>
        <CommentForm />
        <div>
          {/* 더미용 3개 */}
          <CommentBox />
          <CommentBox />
          <CommentBox />
        </div>
      </CommentContainer>
    </StyledArticle>
  );
}

export default PostPage;

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  width: 600px;

  text-align: center;
`;

const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 10px;

  width: 600px;
`;
