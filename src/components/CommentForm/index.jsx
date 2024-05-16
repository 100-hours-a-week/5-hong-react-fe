import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import S from '@/styles/common.jsx';
import Button from '@/components/Button';
import { createComment, updateComment } from '@/apis/comment.js';

CommentForm.propTypes = {
  isEditing: PropTypes.bool,
  setIsEditing: PropTypes.func, // TODO: 커스텀 훅 구현 후 props 에서 삭제
  currentComment: PropTypes.object,
  setCurrentComment: PropTypes.func,
  comments: PropTypes.array,
  setCommentList: PropTypes.func,
};

// TODO: Common Button 수정되면 변경
function CommentForm({
  isEditing,
  setIsEditing,
  currentComment,
  setCurrentComment,
  comments,
  setCommentList,
}) {
  console.debug('CommentForm() - rendering');

  const [contents, setContents] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);
  const { postsId } = useParams();

  const handleTextChange = (e) => {
    setContents(e.target.value);
  };

  const handleAddSubmitButton = async (e) => {
    e.preventDefault();

    await createComment(postsId, { contents })
      .then((response) => {
        setCommentList([response, ...comments]);
        setContents('');
      })
      .catch(() => console.log('댓글 생성 실패'));
  };

  const handleEditSubmitButton = async (e) => {
    e.preventDefault();

    await updateComment(currentComment.commentId, { contents })
      .then(() => {
        setCurrentComment(() => ({
          ...currentComment,
          contents,
        }));
        setContents('');
        setIsEditing(false);
      })
      .catch(() => console.log('댓글 수정 실패'));
  };

  useEffect(() => {
    if (isEditing) {
      setContents(currentComment.contents);
    }
  }, [isEditing, currentComment]);

  // 댓글 수정중 기존의 댓글을 모두 지우면, 댓글 작성으로 변경
  useEffect(() => {
    if (contents.trim().length === 0) {
      setIsDisabled(true);
      setIsEditing(false);
      return;
    }

    setIsDisabled(false);
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
