import { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

import S from '@/styles/common.jsx';
import PostForm from '@/components/PostForm';
import VALIDATE_MESSAGES from '@/constants/validateMessages.js';
import PATH from '@/constants/path.js';

import { uploadImage } from '@/apis/image.js';
import { getPostDetail, updatePost } from '@/apis/post.js';

function EditPostPage() {
  console.debug('EditPostPage() - rendering');

  const [postData, setPostData] = useState({
    title: null,
    contents: null,
    thumbnail: null,
  });
  const thumbnail = useRef(null);
  const { postsId } = useParams();
  const navigate = useNavigate();

  const fetchPostDetail = useCallback(async () => {
    const { title, contents, thumbnail } = await getPostDetail(postsId);

    setPostData({
      title,
      contents,
      thumbnail,
    });
  }, [postsId]);

  useEffect(() => {
    (async () => {
      await fetchPostDetail();
    })();
  }, [fetchPostDetail]);

  const [isDisabled, setIsDisabled] = useState(true);

  const [helperText, setHelperText] = useState(
    VALIDATE_MESSAGES.POSTS.REQUIRED,
  );

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

  const handleSubmitButton = async (e) => {
    e.preventDefault();

    await updatePost(postsId, postData)
      .then(() => navigate(PATH.MAIN))
      .catch(() => console.log('게시글 업로드 실패'));
  };

  return (
    <StyledArticle>
      <StyledTitle>
        <S.Highlight>게시글 수정</S.Highlight>
      </StyledTitle>
      <PostForm
        post={postData}
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
