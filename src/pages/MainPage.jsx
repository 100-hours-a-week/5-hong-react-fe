import { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Button from '@/components/Button';
import PostList from '@/components/PostList';

import { getPostList } from '@/apis/post.js';

// TODO: 게시글 무한 스크롤 구현
// TODO: 무한 스크롤 시 스켈레톤 보여주기 (?)
// TODO: 서버 상태 관리 추가 (Redux vs TanStack query ?)
function MainPage() {
  const [postList, setPostList] = useState([]);
  const [hasNext, setHasNext] = useState(true);
  const [page, setPage] = useState(1);
  const endElement = useRef(null);

  const navigate = useNavigate();

  const fetchPostList = useCallback(async () => {
    console.log(`현재 요청 페이지 = ${page}`);

    const { hasNext, nextPage, data } = await getPostList(page);
    console.log(data);

    setHasNext(hasNext);
    setPage(nextPage);
    console.log(`다음 요청 페이지 = ${nextPage}`);

    setPostList((prev) => prev.concat(data));
  }, [page]);

  const onIntersection = useCallback(
    async (entries) => {
      const firstEntry = entries[0];

      if (firstEntry.isIntersecting && hasNext) {
        await fetchPostList();
      }
    },
    [hasNext, fetchPostList],
  );

  useEffect(() => {
    const observer = new IntersectionObserver(onIntersection);

    const currentElement = endElement.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [onIntersection]);

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
      {hasNext && <div ref={endElement}>로딩중...</div>}
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
