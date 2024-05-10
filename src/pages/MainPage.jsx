import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import PreviewPost from '@/components/PreviewPost';
import Button from '@/components/Button';

function MainPage() {
  // TODO: 게시글 무한 스크롤 구현
  // TODO: 무한 스크롤 시 스켈레톤 보여주기 (?)
  // TODO: 서버 상태 관리 추가 (Redux vs TanStack query ?)

  // 임시용
  const navigate = useNavigate();

  const handlePostClick = (postId) => {
    const location = `/posts/${postId}`;
    console.log(location);
    navigate(location);
  };

  const handleCreatePost = () => {
    const location = '/posts/make';
    console.log('게시글 생성 누름');
    navigate(location);
  };

  const repeatCount = 10;

  const repeatedComponents = Array.from({ length: repeatCount }, (_, index) => (
    <PreviewPost key={index} onClick={() => handlePostClick(index + 1)} />
  ));

  return (
    <StyledPreviewArticle>
      <TitleContainer>
        <p>안녕하세요,</p>
        <p>아무 말 대잔치 게시판 입니다.</p>
      </TitleContainer>
      {/* TODO: 게시글 생성 버튼 */}
      <FormContainer>
        <Button
          width={'138px'}
          text={'게시글 작성'}
          type={'summit'}
          onClick={handleCreatePost}
          $radius={'20px'}
        />
      </FormContainer>
      <Container>{repeatedComponents}</Container>
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 13px;

  width: 600px;

  margin: 10px auto;
`;

const TitleContainer = styled.div`
  margin: 35px 0 10px;

  font-size: 24px;
`;

const FormContainer = styled.div`
  width: 100%;

  text-align: right;
`;
