import styled from 'styled-components';

import S from '@/styles/common.jsx';
import PostForm from '@/components/PostForm';

function EditPostPage() {
  return (
    <StyledArticle>
      <StyledTitle>
        <S.Highlight>게시글 수정</S.Highlight>
      </StyledTitle>
      <PostForm />
    </StyledArticle>
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
