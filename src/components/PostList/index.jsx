import PropTypes from 'prop-types';

import { Container } from '@/components/PostList/PostList.style.js';

import PreviewPost from '@/components/PreviewPost';

PostList.propTypes = {
  data: PropTypes.array,
};

function PostList({ data }) {
  console.debug('PostList() - rendering');

  // noinspection JSValidateTypes
  return (
    <Container>
      {data.map((post) => (
        <PreviewPost
          key={post.postId}
          postsId={post.postId}
          title={post.title}
          likeCount={post.likeCount}
          commentCount={post.commentCount}
          hitCount={post.hitCount}
          createdAt={post.createdAt}
          author={post.owner}
        />
      ))}
    </Container>
  );
}

export default PostList;
