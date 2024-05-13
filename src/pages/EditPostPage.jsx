import { useEffect, useState } from 'react';
import styled from 'styled-components';

import S from '@/styles/common.jsx';
import PostForm from '@/components/PostForm';
import VALIDATE_MESSAGES from '@/constants/validateMessages.js';

import postDetail from '@/mocks/postDetail.js'; // mock

function EditPostPage() {
  console.debug('EditPostPage() - rendering');

  const [postData, setPostData] = useState({
    title: postDetail.title,
    contents: postDetail.contents,
  });

  const [isDisabled, setIsDisabled] = useState(true);

  const [helperText, setHelperText] = useState(
    VALIDATE_MESSAGES.POSTS.REQUIRED,
  );

  const handleChangeValue = (e) => {
    const { name, value } = e.target;
    setPostData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  // 유효성 검사
  useEffect(() => {
    if (!postData.title && !postData.contents) {
      setHelperText(VALIDATE_MESSAGES.POSTS.REQUIRED);
      setIsDisabled(true);
      return;
    }

    if (!postData.title) {
      setHelperText(VALIDATE_MESSAGES.POSTS.TITLE_REQUIRED);
      setIsDisabled(true);
      return;
    }

    if (!postData.contents) {
      setHelperText(VALIDATE_MESSAGES.POSTS.CONTENTS_REQUIRED);
      setIsDisabled(true);
      return;
    }

    setIsDisabled(false);
    setHelperText(null);
  }, [postData]);

  const handleSubmitButton = (e) => {
    e.preventDefault();

    console.log(`title=${postData.title}, contents=${postData.contents}`);
  };

  return (
    <StyledArticle>
      <StyledTitle>
        <S.Highlight>게시글 수정</S.Highlight>
      </StyledTitle>
      <PostForm
        post={postDetail}
        onChange={handleChangeValue}
        onSubmitButton={handleSubmitButton}
        helperText={helperText}
        isDisabled={isDisabled}
      />
    </StyledArticle>
  );
}

export default EditPostPage;

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 600px;

  text-align: center;
`;

const StyledTitle = styled.h2`
  margin: 25px;
`;
