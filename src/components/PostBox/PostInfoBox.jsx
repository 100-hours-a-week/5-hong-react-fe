import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import S from '@/styles/common.jsx';
import Modal from '@/components/Modal';
import PATH from '@/constants/path.js';
import useModal from '@/hooks/useModal.js';

import { deletePost } from '@/apis/post.js';

PostInfoBox.propTypes = {
  postsId: PropTypes.number,
  title: PropTypes.string,
  createdAt: PropTypes.string,
  author: PropTypes.object,
  loginUser: PropTypes.object,
};

// TODO: 컴포넌트 분리, (프로필 이미지 나눠야할 듯 -> 현재 중복 4번 이상)
function PostInfoBox({ postsId, title, createdAt, author, loginUser }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { isOpen, closeModal, openModal } = useModal();

  const handleDeletePostButton = async (e) => {
    e.preventDefault();

    await deletePost(postsId)
      .then(() => navigate(PATH.MAIN))
      .catch(() => console.log('게시글 삭제 실패'));
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
              <StyledButton onClick={openModal}>삭제</StyledButton>
            </>
          )}
        </ButtonContainer>
      </PostDetailContainer>

      {/*TODO: 추후 전역 hooks 로 관리 (리팩토링)*/}
      {isOpen && (
        <Modal
          title={'게시글을 삭제하시겠습니까?'}
          contents={'삭제한 내용은 복구 할 수 없습니다.'}
          onClose={closeModal}
          onConfirm={handleDeletePostButton}
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
