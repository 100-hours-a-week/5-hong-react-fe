import { useCallback } from 'react';

import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import Button from '@/components/Button';
import PostList from '@/components/PostList';
import useInfiniteScroll from '@/hooks/useInfiniteScroll.js';
import PATH from '@/constants/path.js';
import { getPostList } from '@/apis/post/getPostList.js';

function MainPage() {
  console.debug('MainPage() - rendering');

  const navigate = useNavigate();

  const { dataList, hasNext, endElement } = useInfiniteScroll({
    fetchFn: useCallback(async (cursor) => await getPostList(cursor), []),
    message: '마지막 게시글입니다.',
  });

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
          onClick={() => navigate(PATH.MAKE_POSTS)}
          $radius={'20px'}
        />
      </FormContainer>
      <PostList data={dataList} />
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
