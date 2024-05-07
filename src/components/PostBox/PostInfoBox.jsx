import styled from 'styled-components';

import S from '@/styles/common.jsx';

// TODO: 컴포넌트 분리, (프로필 이미지 나눠야할 듯 -> 현재 중복 4번 이상)
function PostInfoBox() {
  // 임시
  const imageUrl = 'https://avatars.githubusercontent.com/u/144337839?v=4';
  const ownerNickname = '더미 사용자';

  return (
    <>
      <PostTileContainer>
        <StyledTitle>제목1</StyledTitle>
      </PostTileContainer>

      <PostDetailContainer>
        <PostInfoContainer>
          <OwnerInfoContainer>
            <StyledImage src={imageUrl} alt={'PROFILE_IMAGE'} />
            <S.Highlight>{ownerNickname}</S.Highlight>
          </OwnerInfoContainer>

          <div>
            <p>2021-01-01 00:00:00</p>
          </div>
        </PostInfoContainer>

        <ButtonContainer>
          <StyledButton>수정</StyledButton>
          <StyledButton>삭제</StyledButton>
        </ButtonContainer>
      </PostDetailContainer>
    </>
  );
}

export default PostInfoBox;

const PostTileContainer = styled.div`
  width: 100%;

  text-align: left;
`;

const StyledTitle = styled.h2`
  font-weight: bold;
`;

const PostDetailContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PostInfoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;

  font-size: 15px;
`;

const OwnerInfoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
`;

const StyledImage = styled.img`
  width: 36px;
  height: 36px;

  border: 1px solid gray;
  border-radius: 50%;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const StyledButton = styled.button`
  width: 48px;
  height: 26px;

  border: 1px solid #aca0eb;
  border-radius: 5px;
  background-color: #f4f5f7;

  color: black;
  font-size: 13px;
  text-align: center;

  cursor: pointer;
`;
