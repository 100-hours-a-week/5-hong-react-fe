import styled from 'styled-components';
import PropTypes from 'prop-types';

import S from '@/styles/common.jsx';
import { truncateCount } from '@/utils/truncate.js';

PostBodyBox.propTypes = {
  thumbnail: PropTypes.string,
  contents: PropTypes.string,
  hitCount: PropTypes.number,
  commentCount: PropTypes.number,
};

function PostBodyBox({ thumbnail, contents, hitCount, commentCount }) {
  return (
    <>
      <ThumbnailContainer>
        <ThumbnailBox>
          <StyledImage src={thumbnail} alt={'THUMBNAIL'} />
        </ThumbnailBox>
      </ThumbnailContainer>

      <ContentsContainer>{contents}</ContentsContainer>

      <MetadataContainer>
        <MetadataBox>
          <S.Highlight>{truncateCount(hitCount)}</S.Highlight>
          <S.Highlight>조회수</S.Highlight>
        </MetadataBox>
        <MetadataBox>
          <S.Highlight>{truncateCount(commentCount)}</S.Highlight>
          <S.Highlight>댓글</S.Highlight>
        </MetadataBox>
      </MetadataContainer>
    </>
  );
}

export default PostBodyBox;

const ThumbnailContainer = styled.div`
  display: flex;
  justify-content: center;

  height: auto;

  padding: 0 20px;

  text-align: center;
`;

const ThumbnailBox = styled.div`
  position: relative; /* 자식 요소의 위치를 상대적으로 조절하기 위해 필요 */

  width: 540px;
  height: 300px;

  background-color: lightgray;
  overflow: hidden; /* 넘치는 부분은 숨김 */
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* 이미지를 확대하여 부모 요소를 덮도록 설정 */
`;

const ContentsContainer = styled.div`
  font-size: 15px;
  line-height: 1.5;
  text-align: left;
`;

const MetadataContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
`;

const MetadataBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 90px;
  height: 50px;

  padding: 10px;

  border-radius: 5px;
  background-color: lightgray;

  font-size: 15px;
  line-height: 1.2;
`;
