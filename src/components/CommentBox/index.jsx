import styled from 'styled-components';
import PropTypes from 'prop-types';

import S from '@/styles/common.jsx';
import Modal from '@/components/Modal';
import ProfileImage from '@/components/ProfileImage';
import useModal from '@/hooks/useModal.js';
import useAuth from '@/hooks/useAuth.js';
import useToast from '@/hooks/useToast.js';
import { deleteComment } from '@/apis/comment/deleteComment.js';

CommentBox.propTypes = {
  id: PropTypes.number,
  contents: PropTypes.string,
  createdAt: PropTypes.string,
  author: PropTypes.object,
  onEditClick: PropTypes.func,
  onDeleteClick: PropTypes.func,
};

function CommentBox({
  id,
  contents,
  createdAt,
  author,
  onEditClick,
  onDeleteClick,
}) {
  console.debug('CommentBox() - rendering');

  const createToast = useToast();
  const { userInfo } = useAuth();
  const { isOpen, openModal, closeModal } = useModal();

  const handleDeleteButton = async (e) => {
    e.preventDefault();

    await deleteComment(id)
      .then(() => {
        onDeleteClick(id);
        closeModal();
        createToast({ message: '댓글 삭제 완료' });
      })
      .catch(() => createToast({ message: '댓글 삭제에 실패' }));
  };

  return (
    <>
      <CommentInfoContainer>
        <OwnerInfoContainer>
          <ProfileImage src={author.profileImage} alt={'OWNER_PROFILE'} />
          <p>
            <S.Highlight>{author.nickname}</S.Highlight>
          </p>
          <p>{createdAt}</p>

          <ButtonContainer>
            {userInfo && author.memberId === userInfo.memberId && (
              <>
                <StyledButton onClick={onEditClick}>수정</StyledButton>
                <StyledButton onClick={openModal}>삭제</StyledButton>
              </>
            )}
          </ButtonContainer>
        </OwnerInfoContainer>

        <CommentContents>
          <p>{contents}</p>
        </CommentContents>
      </CommentInfoContainer>

      {isOpen && (
        <Modal
          title={'댓글을 삭제하시겠습니까?'}
          contents={'삭제한 내용은 복구 할 수 없습니다.'}
          onClose={closeModal}
          onConfirm={handleDeleteButton}
        />
      )}
    </>
  );
}

export default CommentBox;

const CommentInfoContainer = styled.li`
  display: flex;
  flex-direction: column;

  padding: 0 20px 20px;

  font-size: 15px;
  text-align: left;
`;

const OwnerInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100px;
  min-height: 26px;
  margin-top: 30px;
  margin-left: auto;
`;

const StyledButton = styled.button`
  width: 48px;
  height: 26px;

  border: 1px solid #aca0eb;
  border-radius: 5px;
  background-color: #f4f5f7;

  color: #000;
  font-size: 13px;
  text-align: center;

  cursor: pointer;
`;

const CommentContents = styled.div`
  padding-left: 59px;
`;
