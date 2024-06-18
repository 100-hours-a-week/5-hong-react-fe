import { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import S from '@/styles/common.jsx';
import Button from '@/components/Button';
import useAuth from '@/hooks/useAuth.js';
import useToast from '@/hooks/useToast.js';
import { postCreateComment } from '@/apis/comment/postCreateComment.js';
import { putUpdateComment } from '@/apis/comment/putUpdateComment.js';

CommentForm.propTypes = {
  isEditing: PropTypes.bool,
  setIsEditing: PropTypes.func,
  currentComment: PropTypes.object,
  setCurrentComment: PropTypes.func,
  setPostInfo: PropTypes.func,
  onUpdateComment: PropTypes.func,
  onAddComment: PropTypes.func,
};

function CommentForm({
  isEditing,
  setIsEditing,
  currentComment,
  setCurrentComment,
  onUpdateComment,
  onAddComment,
}) {
  console.debug('CommentForm() - rendering');

  const createToast = useToast();
  const { userInfo } = useAuth();
  const { postId } = useParams();
  const [contents, setContents] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);

  const handleTextChange = (e) => {
    setContents(e.target.value);
  };

  const handleAddSubmitButton = async (e) => {
    e.preventDefault();

    await postCreateComment({ postId, contents })
      .then((res) => {
        const { commentId } = res;
        const newComment = {
          commentId,
          contents,
          createdAt: new Date().toISOString(),
          owner: { ...userInfo },
        };
        onAddComment(newComment);
        setContents('');
      })
      .catch(() => createToast({ message: '댓글 생성에 실패' }));
  };

  const handleEditSubmitButton = async (e) => {
    e.preventDefault();

    await putUpdateComment(currentComment.commentId, { contents })
      .then(() => {
        const updatedComment = {
          ...currentComment,
          contents,
        };
        onUpdateComment(updatedComment); // 수정된 댓글을 업데이트
        setCurrentComment({ commentId: null, contents: null });
        setContents('');
        setIsEditing(false);
      })
      .catch(() => createToast({ message: '댓글 수정에 실패' }));
  };

  useEffect(() => {
    if (isEditing) {
      setContents(currentComment.contents);
    }
  }, [isEditing, currentComment]);

  useEffect(() => {
    if (contents.trim().length === 0) {
      setIsDisabled(true);
      setIsEditing(false);
      return;
    }

    setIsDisabled(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contents]);

  return (
    <StyledForm>
      <StyledTextarea onChange={handleTextChange} value={contents} />

      <S.Hr />

      <SubmitButtonContainer>
        <Button
          width={'90px'}
          text={isEditing ? '댓글수정' : '댓글작성'}
          type={'submit'}
          disabled={isDisabled}
          onClick={isEditing ? handleEditSubmitButton : handleAddSubmitButton}
          $margin={'0 15px 0 0'}
          $radius={'8px'}
        />
      </SubmitButtonContainer>
    </StyledForm>
  );
}

export default CommentForm;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 169px;

  border-radius: 8px;
  background-color: white;
`;

const StyledTextarea = styled.textarea`
  width: 490px;
  margin-top: 25px;

  height: 95px;

  border: none;
  outline: none;
`;

const SubmitButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  width: 100%;

  padding: 10px 0;
`;
