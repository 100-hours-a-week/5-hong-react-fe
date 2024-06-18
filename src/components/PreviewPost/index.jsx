import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import {
  OwnerInfoContainer,
  PostContainer,
  PostContainerBox,
  PostDetailContainer,
  PostMetaContainer,
  StyledTitle,
} from '@/components/PreviewPost/PreviewPost.style.js';

import S from '@/styles/common.jsx';
import { truncateCount, truncateTitle } from '@/utils/truncate.js';
import ProfileImage from '@/components/ProfileImage';

PreviewPost.propTypes = {
  postsId: PropTypes.number,
  title: PropTypes.string,
  likeCount: PropTypes.number,
  commentCount: PropTypes.number,
  hitCount: PropTypes.number,
  createdAt: PropTypes.string,
  author: PropTypes.object,
};

function PreviewPost({
  postsId,
  title,
  likeCount,
  commentCount,
  hitCount,
  createdAt,
  author,
}) {
  const navigate = useNavigate();

  const handleClickPostPreview = () => {
    const location = `/posts/${postsId}`;
    navigate(location);
  };

  return (
    <PostContainerBox onClick={handleClickPostPreview}>
      <PostContainer>
        <StyledTitle>
          <h2>{truncateTitle(title)}</h2>
        </StyledTitle>
        <PostDetailContainer>
          <PostMetaContainer>
            <p>좋아요 {truncateCount(likeCount)} </p>
            <p>댓글 {truncateCount(commentCount)} </p>
            <p>조회수 {truncateCount(hitCount)} </p>
          </PostMetaContainer>
          <div>{createdAt}</div>
        </PostDetailContainer>
      </PostContainer>

      <S.Hr />

      <OwnerInfoContainer>
        <ProfileImage src={author.profileImage} alt={'AVATAR'} />
        <h3>{author.nickname}</h3>
      </OwnerInfoContainer>
    </PostContainerBox>
  );
}

export default PreviewPost;
