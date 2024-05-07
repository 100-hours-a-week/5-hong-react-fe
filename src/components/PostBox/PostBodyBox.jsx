import styled from 'styled-components';

import { Highlight } from '@/styles/common.jsx';

function PostBodyBox() {
  // 임시용
  const imageUrl = 'https://avatars.githubusercontent.com/u/144337839?v=4';
  const contents =
    '무엇을 이야기 할까요 무엇을 이야기 할까요 무엇을 이야기 할까요 무엇을 이야기 할까요 무엇을 이야기 할까요';

  return (
    <>
      <ThumbnailContainer>
        <ThumbnailBox>
          <StyledImage src={imageUrl} alt={'THUMBNAIL'} />
        </ThumbnailBox>
      </ThumbnailContainer>

      <ContentsContainer>{contents}</ContentsContainer>

      <MetadataContainer>
        <MetadataBox>
          <Highlight>123</Highlight>
          <Highlight>조회수</Highlight>
        </MetadataBox>
        <MetadataBox>
          <Highlight>123</Highlight>
          <Highlight>댓글</Highlight>
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
  position: absolute; /* 이미지를 부모 요소 내에서 절대적으로 위치시킴 */
  top: 50%; /* 부모 요소의 세로 중앙 위치 */
  left: 50%; /* 부모 요소의 가로 중앙 위치 */

  width: 100%; /* 부모 요소에 가득 차도록 너비 설정 */

  transform: translate(-50%, -50%); /* 이미지를 중앙 정렬하기 위한 변환 */
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