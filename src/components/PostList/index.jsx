import styled from 'styled-components';

import PreviewPost from '@/components/PreviewPost';
import PropTypes from 'prop-types';

PostList.propTypes = {
  posts: PropTypes.array,
};

function PostList({ posts }) {
  console.debug('PostList() - rendering');

  // noinspection JSValidateTypes
  return (
    <Container>
      {posts.map((post) => (
        <PreviewPost
          key={post.postsId}
          postsId={post.postsId}
          title={post.title}
          likesCount={post.likesCount}
          commentsCount={post.commentsCount}
          hitsCount={post.hitsCount}
          createdAt={post.createdAt}
          author={post.owner}
        />
      ))}
    </Container>
  );
}

export default PostList;

const Container = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 13px;

  width: 600px;

  margin: 10px auto;
`;
