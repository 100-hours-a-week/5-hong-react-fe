import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';

import S from '@/styles/common.jsx';
import PATH from '@/constants/path.js';
import Modal from '@/components/Modal';
import ProfileImage from '@/components/ProfileImage';
import useAuth from '@/hooks/useAuth.js';
import useModal from '@/hooks/useModal.js';
import useToast from '@/hooks/useToast.js';
import { deletePost } from '@/apis/post.js';

PostInfoBox.propTypes = {
  postId: PropTypes.number,
  title: PropTypes.string,
  createdAt: PropTypes.string,
  author: PropTypes.object,
};

function PostInfoBox({ postId, title, createdAt, author }) {
  const createToast = useToast();
  const location = useLocation();
  const navigate = useNavigate();
  const { userInfo } = useAuth();
  const { isOpen, closeModal, openModal } = useModal();

  const handleDeletePostButton = async (e) => {
    e.preventDefault();

    await deletePost(postId)
      .then(() => {
        navigate(PATH.MAIN);
        createToast({ message: '게시글 삭제 완료' });
      })
      .catch(() => createToast({ message: '게시글 삭제 실패' }));
  };

  const handleEditPost = (e) => {
    e.preventDefault();

    const pathname = `${location.pathname}/edit`;
    navigate(pathname);
  };

  return (
    <>
      <PostTileContainer>
        <StyledTitle>{title}</StyledTitle>
      </PostTileContainer>

      <PostDetailContainer>
        <PostInfoContainer>
          <OwnerInfoContainer>
            <ProfileImage src={author.profileImage} alt={'AVATAR'} />
            <S.Highlight>{author.nickname}</S.Highlight>
          </OwnerInfoContainer>

          <div>
            <p>{createdAt}</p>
          </div>
        </PostInfoContainer>

        <ButtonContainer>
          {userInfo && author.memberId === userInfo.memberId && (
            <>
              <StyledButton onClick={handleEditPost}>수정</StyledButton>
              <StyledButton onClick={openModal}>삭제</StyledButton>
            </>
          )}
        </ButtonContainer>
      </PostDetailContainer>

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
