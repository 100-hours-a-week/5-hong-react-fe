import { useCallback, useState } from 'react';
import PropTypes from 'prop-types';

import { CommentContainer } from '@/components/CommentList/CommentList.style.js';

import CommentBox from '@/components/CommentBox';
import CommentForm from '@/components/CommentForm';

CommentList.propTypes = {
  comments: PropTypes.array,
  setCommentList: PropTypes.func,
  setPostInfo: PropTypes.func,
};

function CommentList({ comments, setCommentList, setPostInfo }) {
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

  const handleUpdateComment = useCallback(
    (updatedComment) => {
      setCommentList((prevComments) =>
        prevComments.map((comment) =>
          comment.commentId === updatedComment.commentId
            ? { ...comment, contents: updatedComment.contents }
            : comment,
        ),
      );
    },
    [setCommentList],
  );

  const handleDeleteComment = useCallback(
    (commentId) => {
      setCommentList((prevComments) =>
        prevComments.filter((comment) => comment.commentId !== commentId),
      );
      setPostInfo((prevInfo) => ({
        ...prevInfo,
        commentCount: prevInfo.commentCount - 1,
      }));
    },
    [setCommentList, setPostInfo],
  );

  const handleAddComment = useCallback(
    (newComment) => {
      setCommentList((prevComments) => [newComment, ...prevComments]);
      setPostInfo((prevInfo) => ({
        ...prevInfo,
        commentCount: prevInfo.commentCount + 1,
      }));
    },
    [setCommentList, setPostInfo],
  );

  return (
    <CommentContainer>
      <CommentForm
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        currentComment={currentComment}
        setCurrentComment={setCurrentComment}
        comments={comments}
        setCommentList={setCommentList}
        onUpdateComment={handleUpdateComment}
        onAddComment={handleAddComment}
      />

      <ul>
        {comments.map((comment) => (
          <CommentBox
            key={comment.commentId}
            id={comment.commentId}
            contents={comment.contents}
            createdAt={comment.createdAt}
            author={comment.owner}
            onEditClick={() =>
              handleEditComment(comment.commentId, comment.contents)
            }
            onDeleteClick={handleDeleteComment}
          />
        ))}
      </ul>
    </CommentContainer>
  );
}

export default CommentList;
