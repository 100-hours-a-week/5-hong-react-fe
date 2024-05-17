import { useCallback, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import CommentForm from '@/components/CommentForm';
import CommentBox from '@/components/CommentBox';

CommentList.propTypes = {
  comments: PropTypes.array,
  loginUser: PropTypes.object,
  setCommentList: PropTypes.func,
};

// FIXME: 현재 CommentBox 내에서 수정 버튼 누르면 전체가 재랜더링되는 문제
function CommentList({ comments, loginUser, setCommentList }) {
  console.debug('CommentList() - rendering');

  const [isEditing, setIsEditing] = useState(false);
  const [currentComment, setCurrentComment] = useState({
    commentId: null,
    contents: null,
  });

  const handleEditComment = useCallback((commentId, contents) => {
    setIsEditing(true);
    setCurrentComment({
      commentId,
      contents,
    });
  }, []);

  return (
    <CommentContainer>
      <CommentForm
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        currentComment={currentComment}
        setCurrentComment={setCurrentComment}
        comments={comments}
        setCommentList={setCommentList}
      />

      <ul>
        {comments.map((comment) => (
          <CommentBox
            key={comment.commentsId}
            id={comment.commentsId}
            contents={comment.contents}
            createdAt={comment.createdAt}
            author={comment.owner}
            loginUser={loginUser}
            onEditClick={() =>
              handleEditComment(comment.commentsId, comment.contents)
            }
          />
        ))}
      </ul>
    </CommentContainer>
  );
}

export default CommentList;

const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 10px;

  width: 600px;
`;
