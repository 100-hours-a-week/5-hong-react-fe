import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import S from '@/styles/common.jsx';
import PATH from '@/constants/path.js';
import PostForm from '@/components/PostForm';
import useToast from '@/hooks/useToast.js';
import { createPost } from '@/apis/post.js';

function MakePostPage() {
  console.debug('MakePostPage() - rendering');

  const createToast = useToast();
  const navigate = useNavigate();

  const handleOnSubmit = async (postInfo) => {
    await createPost(postInfo)
      .then(() => {
        createToast({ message: '게시글 작성 완료' });
        navigate(PATH.MAIN);
      })
      .catch(() => createToast({ message: '새 게시글 생성 실패' }));
  };

  return (
    <StyledArticle>
      <StyledTitle>
        <S.Highlight>게시글 작성</S.Highlight>
      </StyledTitle>
      <PostForm onSubmit={handleOnSubmit} />
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
