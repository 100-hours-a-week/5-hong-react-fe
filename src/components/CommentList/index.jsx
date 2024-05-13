import { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import CommentForm from '@/components/CommentForm';
import CommentBox from '@/components/CommentBox';

// mock
import loginUser from '@/mocks/loginUser.js';

CommentsList.propTypes = {
  comments: PropTypes.array,
};

// FIXME: 현재 CommentBox 내에서 수정 버튼 누르면 전체가 재랜더링되는 문제
function CommentsList({ comments }) {
  console.debug('CommentList() - rendering');

  const [isEditing, setIsEditing] = useState(false);
  const [currentComment, setCurrentComment] = useState({
    commentId: null,
    contents: null,
  });

  const handleEditComment = (commentId, contents) => {
    setIsEditing(true);
    setCurrentComment({
      commentId,
      contents,
    });
    console.log(`Edited comment: ID=${commentId}, contents=${contents}`);
  };

  return (
    <CommentContainer>
      <CommentForm
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        currentComment={currentComment}
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

export default CommentsList;

const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 10px;

  width: 600px;
`;
