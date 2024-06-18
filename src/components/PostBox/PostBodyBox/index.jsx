import PropTypes from 'prop-types';

import {
  ContentsContainer,
  MetadataBox,
  MetadataContainer,
  StyledImage,
  ThumbnailBox,
  ThumbnailContainer,
} from '@/components/PostBox/PostBodyBox/PostBodyBox.style.js';

import S from '@/styles/common.jsx';
import { truncateCount } from '@/utils/truncate.js';

const PostBodyBox = ({ thumbnail, contents, hitCount, commentCount }) => {
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
};

PostBodyBox.propTypes = {
  thumbnail: PropTypes.string,
  contents: PropTypes.string,
  hitCount: PropTypes.number,
  commentCount: PropTypes.number,
};

export default PostBodyBox;
