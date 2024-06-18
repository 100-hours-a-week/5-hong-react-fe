import { useCallback } from 'react';

import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import S from '@/styles/common.jsx';
import PostBox from '@/components/PostBox';
import CommentList from '@/components/CommentList';
import useInfiniteScroll from '@/hooks/useInfiniteScroll.js';
import useFetch from '@/hooks/useFetch.js';
import withLoading from '@/hoc/withLoading.jsx';
import { getPostDetail } from '@/apis/post/getPostDetail.js';
import { getCommentList } from '@/apis/comment/getCommentList.js';

const PostBoxWithLoading = withLoading(PostBox);

function PostPage() {
  const { postId } = useParams();
  const { dataList, setDataList, hasNext, endElement } = useInfiniteScroll({
    fetchFn: useCallback(
      async (cursor) => await getCommentList(cursor, postId),
      [postId],
    ),
    message: '마지막 댓글입니다.',
  });
  const { data, setData, isLoading } = useFetch({
    initialValue: {},
    fetchFn: useCallback(async () => await getPostDetail(postId), [postId]),
  });

  return (
    <StyledArticle>
      <PostBoxWithLoading isLoading={isLoading} data={data} />

      <S.Hr />

      <CommentList
        comments={dataList}
        setCommentList={setDataList}
        setPostInfo={setData}
      />
      {hasNext && <div ref={endElement}>로딩중...</div>}
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
