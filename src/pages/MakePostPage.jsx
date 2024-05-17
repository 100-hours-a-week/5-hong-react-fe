import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import S from '@/styles/common.jsx';
import PostForm from '@/components/PostForm';
import VALIDATE_MESSAGES from '@/constants/validateMessages.js';
import PATH from '@/constants/path.js';

import { uploadImage } from '@/apis/image.js';
import { createPost } from '@/apis/post.js';

function MakePostPage() {
  console.debug('MakePostPage() - rendering');

  const thumbnail = useRef(null);
  const navigate = useNavigate();

  const [postData, setPostData] = useState({
    title: null,
    contents: null,
    thumbnail: null,
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

  const handleUploadThumbnail = async (e) => {
    const image = e.target.files[0];
    if (!image) {
      return;
    }

    await uploadImage(image)
      .then((data) => {
        const { image } = data;
        setPostData(() => ({
          ...postData,
          thumbnail: image,
        }));
      })
      .catch(() => {
        thumbnail.current.value = null;
      });
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

  const handleSubmitButton = async (e) => {
    e.preventDefault();

    await createPost(postData)
      .then(() => navigate(PATH.MAIN))
      .catch(() => console.log('게시글 업로드 실패'));
  };

  return (
    <StyledArticle>
      <StyledTitle>
        <S.Highlight>게시글 작성</S.Highlight>
      </StyledTitle>
      <PostForm
        onChange={handleChangeValue}
        onUploadThumbnail={handleUploadThumbnail}
        onSubmitButton={handleSubmitButton}
        thumbnail={thumbnail}
        helperText={helperText}
        isDisabled={isDisabled}
      />
    </StyledArticle>
  );
}

export default MakePostPage;

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
