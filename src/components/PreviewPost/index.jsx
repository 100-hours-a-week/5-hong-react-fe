import styled from 'styled-components';

import { Hr } from '@/styles/common.jsx';
import PropTypes from 'prop-types';

PreviewPost.propTypes = {
  onClick: PropTypes.func,
};

// TODO: 컴포넌트 분리, (무한스크롤 시) 스켈레톤 고려
function PreviewPost({ onClick }) {
  // 임시
  const likeCount = 0;
  const commentCount = 0;
  const hitCount = 0;
  const imageUrl = 'https://avatars.githubusercontent.com/u/144337839?v=4';

  return (
    <PostContainerBox onClick={onClick}>
      <PostContainer>
        <StyledTitle>
          <h2>제목 1</h2>
        </StyledTitle>
        <PostDetailContainer>
          <PostMetaContainer>
            <p>좋아요 {likeCount} </p>
            <p>댓글 {commentCount} </p>
            <p>조회수 {hitCount} </p>
          </PostMetaContainer>
          <div>2021-01-01 00:00:00</div>
        </PostDetailContainer>
      </PostContainer>

      <Hr />

      <OwnerInfoContainer>
        <StyledImage src={imageUrl} />
        <h3>더미 작성자1</h3>
      </OwnerInfoContainer>
    </PostContainerBox>
  );
}

export default PreviewPost;

const PostContainerBox = styled.div`
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
