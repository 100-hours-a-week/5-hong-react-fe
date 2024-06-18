import PropTypes from 'prop-types';
import { useLocation, useNavigate } from 'react-router-dom';

import {
  ButtonContainer,
  OwnerInfoContainer,
  PostDetailContainer,
  PostInfoContainer,
  PostTileContainer,
  StyledButton,
  StyledTitle,
} from '@/components/PostBox/PostInfoBox/PostInfoBox.style.js';

import S from '@/styles/common.jsx';
import PATH from '@/constants/path.js';
import Modal from '@/components/Modal/index.jsx';
import ProfileImage from '@/components/ProfileImage/index.jsx';
import useAuth from '@/hooks/useAuth.js';
import useModal from '@/hooks/useModal.js';
import useToast from '@/hooks/useToast.js';
import { deletePost } from '@/apis/post/deletePost.js';

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
