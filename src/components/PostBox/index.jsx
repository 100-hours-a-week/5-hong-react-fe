import PropTypes from 'prop-types';

import {
  PostBodyBoxContainer,
  PostInfoBoxContainer,
} from '@/components/PostBox/PostBox.style.js';

import S from '@/styles/common.jsx';
import PostInfoBox from '@/components/PostBox/PostInfoBox';
import PostBodyBox from '@/components/PostBox/PostBodyBox';

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
