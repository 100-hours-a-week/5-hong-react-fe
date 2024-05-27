import PropTypes from 'prop-types';
import styled from 'styled-components';

import S from '@/styles/common.jsx';
import PostInfoBox from '@/components/PostBox/PostInfoBox.jsx';
import PostBodyBox from '@/components/PostBox/PostBodyBox.jsx';

PostBox.propTypes = {
  data: PropTypes.object,
};

function PostBox({ data }) {
  console.debug('PostBox() - rendering');

  return (
    <>
      <PostInfoBoxContainer>
        <PostInfoBox
          postId={data.postId}
          title={data.title}
          createdAt={data.createdAt}
          author={data.owner}
        />
      </PostInfoBoxContainer>

      <S.Hr />

      <PostBodyBoxContainer>
        <PostBodyBox
          thumbnail={data.thumbnail}
          contents={data.contents}
          hitCount={data.hitCount}
          commentCount={data.commentCount}
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
