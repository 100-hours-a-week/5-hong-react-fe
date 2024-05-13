import styled from 'styled-components';

import S from '@/styles/common.jsx';
import PostBox from '@/components/PostBox';
import CommentList from '@/components/CommentList';

// mock
import postDetail from '@/mocks/postDetail.js';
import commentList from '@/mocks/commentList.js';

function PostPage() {
  return (
    <StyledArticle>
      <PostBox post={postDetail} />

      <S.Hr />

      <CommentList comments={commentList} />
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
