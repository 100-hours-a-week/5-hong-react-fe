import styled from 'styled-components';

export const ThumbnailContainer = styled.div`
  display: flex;
  justify-content: center;

  height: auto;

  padding: 0 20px;

  text-align: center;
`;

export const ThumbnailBox = styled.div`
  position: relative; /* 자식 요소의 위치를 상대적으로 조절하기 위해 필요 */

  width: 540px;
  height: 300px;

  background-color: lightgray;
  overflow: hidden; /* 넘치는 부분은 숨김 */
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* 이미지를 확대하여 부모 요소를 덮도록 설정 */
`;

export const ContentsContainer = styled.div`
  font-size: 15px;
  line-height: 1.5;
  text-align: left;
`;

export const MetadataContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
`;

export const MetadataBox = styled.div`
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
