import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import S from '@/styles/common.jsx';
import { truncateCount, truncateTitle } from '@/utils/truncate.js';

PreviewPost.propTypes = {
  postsId: PropTypes.number,
  title: PropTypes.string,
  likesCount: PropTypes.number,
  commentsCount: PropTypes.number,
  hitsCount: PropTypes.number,
  createdAt: PropTypes.string,
  author: PropTypes.object,
};

// TODO: 컴포넌트 분리, (무한스크롤 시) 스켈레톤 고려
function PreviewPost({
  postsId,
  title,
  likesCount,
  commentsCount,
  hitsCount,
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
            <p>좋아요 {truncateCount(likesCount)} </p>
            <p>댓글 {truncateCount(commentsCount)} </p>
            <p>조회수 {truncateCount(hitsCount)} </p>
          </PostMetaContainer>
          <div>{createdAt}</div>
        </PostDetailContainer>
      </PostContainer>

      <S.Hr />

      <OwnerInfoContainer>
        <StyledImage src={author.profileImage} />
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

const StyledImage = styled.img`
  width: 36px;
  height: 36px;

  border: 1px solid gray;
  border-radius: 50%;
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
