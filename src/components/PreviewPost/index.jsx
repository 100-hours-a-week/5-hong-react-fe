import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

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

const PostContainerBox = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  width: 592px;

  padding-bottom: 10px;
  padding-top: 17px;

  border-radius: 16px;
  background-color: #fff;
  box-shadow: 3px 4px 4px 0 #cccccc40;

  cursor: pointer;
`;

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 544px;

  padding: 5px 0 20px;
`;

const StyledTitle = styled.div`
  font-weight: bold;
  text-align: left;
  padding-bottom: 15px;
`;

const OwnerInfoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 24px;

  width: 544px;
  height: 52px;

  text-align: left;
  padding-top: 8px;

  h3 {
    font-size: 15px;
    font-weight: bold;
  }
`;

const PostDetailContainer = styled.div`
  display: flex;
  justify-content: space-between;

  font-size: 14px;
`;

const PostMetaContainer = styled.div`
  display: flex;
  gap: 3px;
`;
