import PropTypes from 'prop-types';
import styled from 'styled-components';

import S from '@/styles/common.jsx';
import PostInfoBox from '@/components/PostBox/PostInfoBox.jsx';
import PostBodyBox from '@/components/PostBox/PostBodyBox.jsx';

PostBox.propTypes = {
  post: PropTypes.object,
  loginUser: PropTypes.object,
};

function PostBox({ post, loginUser }) {
  console.debug('PostBox() - rendering');

  return (
    <>
      <PostInfoBoxContainer>
        <PostInfoBox
          postsId={post.postsId}
          title={post.title}
          createdAt={post.createdAt}
          author={post.owner}
          loginUser={loginUser}
        />
      </PostInfoBoxContainer>

      <S.Hr />

      <PostBodyBoxContainer>
        <PostBodyBox
          thumbnail={post.thumbnail}
          contents={post.contents}
          hitsCount={post.hitsCount}
          commentsCount={post.commentsCount}
        />
      </PostBodyBoxContainer>
    </>
  );
}

export default PostBox;

const PostInfoBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 10px;

  width: 560px; /* TODO: 100% 로 변경 */
  height: auto;
  padding-top: 20px;
`;

const PostBodyBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
