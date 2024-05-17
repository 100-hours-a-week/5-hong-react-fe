import { useCallback, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import S from '@/styles/common.jsx';
import PostBox from '@/components/PostBox';
import CommentList from '@/components/CommentList';

import { getCommentList } from '@/apis/comment.js';
import { getPostDetail } from '@/apis/post.js';
import { getUserInfo } from '@/apis/user.js';

// TODO: 로딩중인 경우 변경 -> suspense
function PostPage() {
  const [loginUser, setLoginUser] = useState({});
  const [postInfo, setPostInfo] = useState({});
  const [commentList, setCommentList] = useState([]);
  const [hasNext, setHasNext] = useState(true);
  const [page, setPage] = useState(1);
  const { postsId } = useParams();
  const endElement = useRef(null);

  const fetchLoginInfo = useCallback(async () => {
    const response = await getUserInfo();
    setLoginUser({
      ...response,
    });
  }, []);

  const fetchPostDetail = useCallback(async () => {
    const response = await getPostDetail(postsId);
    console.log(response);

    setPostInfo({
      ...response,
    });
  }, [postsId]);

  const fetchCommentList = useCallback(async () => {
    console.log(`현재 요청 페이지 = ${page}`);

    const { hasNext, nextPage, data } = await getCommentList(page, postsId);
    console.log('댓글 list', data);

    setHasNext(hasNext);
    setPage(nextPage);
    console.log(`다음 요청 페이지 = ${nextPage}`);

    if (data) setCommentList((prev) => prev.concat(data));
  }, [page, postsId]);

  const onIntersection = useCallback(
    async (entries) => {
      const firstEntry = entries[0];

      if (firstEntry.isIntersecting && hasNext) {
        await fetchCommentList();
      }
    },
    [hasNext, fetchCommentList],
  );

  useEffect(() => {
    (async () => {
      await fetchPostDetail();
      await fetchLoginInfo();
    })();
  }, [fetchLoginInfo, fetchPostDetail]);

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

  return (
    <StyledArticle>
      {Object.keys(postInfo).length > 0 ? (
        <PostBox post={postInfo} loginUser={loginUser} />
      ) : (
        <p>로딩중...</p>
      )}

      <S.Hr />

      <CommentList
        comments={commentList}
        loginUser={loginUser}
        setCommentList={setCommentList}
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
