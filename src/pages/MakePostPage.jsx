import styled from 'styled-components';

import S from '@/styles/common.jsx';
import PostForm from '@/components/PostForm';

function MakePostPage() {
  return (
    <StyledArticle>
      <StyledTitle>
        <S.Highlight>게시글 작성</S.Highlight>
      </StyledTitle>
      <PostForm />
    </StyledArticle>
  );
}

export default MakePostPage;

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
