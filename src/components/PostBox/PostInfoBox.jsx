import { useCallback, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import S from '@/styles/common.jsx';
import Modal from '@/components/Modal';

PostInfoBox.propTypes = {
  title: PropTypes.string,
  createdAt: PropTypes.string,
  author: PropTypes.object,
  loginUser: PropTypes.object,
};

// TODO: 컴포넌트 분리, (프로필 이미지 나눠야할 듯 -> 현재 중복 4번 이상)
function PostInfoBox({ title, createdAt, author, loginUser }) {
  const location = useLocation();
  const navigate = useNavigate();

  // Modal state
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = useCallback(() => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden'; // 스크롤 이벤트 방지
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsOpen(false);
    document.body.style.overflow = 'auto'; // 스크롤 이벤트 방지
  }, []);

  const handleDeleteButton = (e) => {
    e.preventDefault();

    console.log('누름');
  };

  const handleEditPost = (e) => {
    e.preventDefault();

    const pathname = location.pathname;
    console.log(pathname);
    navigate(`${pathname}/edit`);
  };

  return (
    <>
      <PostTileContainer>
        <StyledTitle>{title}</StyledTitle>
      </PostTileContainer>

      <PostDetailContainer>
        <PostInfoContainer>
          <OwnerInfoContainer>
            <StyledImage src={author.profileImage} alt={'PROFILE_IMAGE'} />
            <S.Highlight>{author.nickname}</S.Highlight>
          </OwnerInfoContainer>

          <div>
            <p>{createdAt}</p>
          </div>
        </PostInfoContainer>

        <ButtonContainer>
          {author.memberId === loginUser.memberId && (
            <>
              <StyledButton onClick={handleEditPost}>수정</StyledButton>
              <StyledButton onClick={handleOpenModal}>삭제</StyledButton>
            </>
          )}
        </ButtonContainer>
      </PostDetailContainer>

      {/*TODO: 추후 전역 hooks 로 관리 (리팩토링)*/}
      {isOpen && (
        <Modal
          title={'게시글을 삭제하시겠습니까?'}
          contents={'삭제한 내용은 복구 할 수 없습니다.'}
          handleClose={handleCloseModal}
          handleConfirm={handleDeleteButton}
        />
      )}
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
