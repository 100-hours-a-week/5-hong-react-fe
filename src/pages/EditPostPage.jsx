import styled from 'styled-components';

import PostForm from '@/components/PostForm';

function EditPostPage() {
  return (
    <>
      <StyledArticle>
        <StyledTitle>게시글 수정</StyledTitle>
        <PostForm />
      </StyledArticle>
    </>
  );
}

export default EditPostPage;

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 600px;

  text-align: center;
`;

const StyledTitle = styled.h2`
  margin: 25px;
`;
