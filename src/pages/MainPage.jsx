import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Button from '@/components/Button';
import PostList from '@/components/PostList';

// mock
import postList from '@/mocks/postList.js';

function MainPage() {
  // TODO: 게시글 무한 스크롤 구현
  // TODO: 무한 스크롤 시 스켈레톤 보여주기 (?)
  // TODO: 서버 상태 관리 추가 (Redux vs TanStack query ?)

  // 임시용
  const navigate = useNavigate();

  const handleCreatePost = () => {
    const location = '/posts/make';
    navigate(location);
  };

  return (
    <StyledPreviewArticle>
      <TitleContainer>
        <p>안녕하세요,</p>
        <p>아무 말 대잔치 게시판 입니다.</p>
      </TitleContainer>
      <FormContainer>
        <Button
          width={'138px'}
          text={'게시글 작성'}
          type={'submit'}
          onClick={handleCreatePost}
          $radius={'20px'}
        />
      </FormContainer>
      <PostList posts={postList} />
    </StyledPreviewArticle>
  );
}

export default MainPage;

const StyledPreviewArticle = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 592px;
  height: 90vh; /* 화면 전체 높이의 90%를 차지하도록 설정 */

  text-align: center;
`;

const TitleContainer = styled.div`
  margin: 35px 0 10px;

  font-size: 24px;
`;

const FormContainer = styled.div`
  width: 100%;

  text-align: right;
`;
