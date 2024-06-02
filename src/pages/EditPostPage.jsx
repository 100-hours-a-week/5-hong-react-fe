import { useCallback } from 'react';

import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';

import S from '@/styles/common.jsx';
import PostForm from '@/components/PostForm';
import useToast from '@/hooks/useToast.js';
import useFetch from '@/hooks/useFetch.js';
import withLoading from '@/hoc/withLoading.jsx';
import { getPostDetail, updatePost } from '@/apis/post.js';

const PostFormWithLoading = withLoading(PostForm);

function EditPostPage() {
  console.debug('EditPostPage() - rendering');

  const createToast = useToast();
  const { postId } = useParams();
  const navigate = useNavigate();
  const { data, isLoading } = useFetch({
    initialValue: { title: null, contents: null, thumbnail: null },
    fetchFn: useCallback(async () => await getPostDetail(postId), [postId]),
  });

  const handleOnSubmit = async (postInfo) => {
    await updatePost(postId, postInfo)
      .then(() => {
        navigate(-1);
        createToast({ message: '게시글 수정 완료' });
      })
      .catch(() => createToast({ message: '게시글 수정 실패' }));
  };

  return (
    <StyledArticle>
      <StyledTitle>
        <S.Highlight>게시글 수정</S.Highlight>
      </StyledTitle>
      <PostFormWithLoading
        isLoading={isLoading}
        data={data}
        onSubmit={handleOnSubmit}
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
