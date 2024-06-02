import { useCallback, useState } from 'react';

import VALIDATE_MESSAGES from '@/constants/validateMessages.js';
import useToast from '@/hooks/useToast.js';
import { uploadImage } from '@/apis/image.js';

function useUploadImage(initialValues) {
  const initialError = VALIDATE_MESSAGES.PROFILE_IMAGE.REQUIRED;

  const [image, setImage] = useState(initialValues);
  const [error, setError] = useState(initialError);
  const createToast = useToast();

  const handleOnUpload = useCallback(
    async (e) => {
      const file = e.target.files[0];
      if (!file) {
        setImage(initialValues);
        setError(initialError);
        return;
      }

      await uploadImage(file)
        .then((data) => {
          const { image } = data;
          setImage(image);
          setError(null);
        })
        .catch(() => createToast({ message: '이미지 업로드 실패' }));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [initialValues],
  );

  return { image, error, handleOnUpload };
}

export default useUploadImage;
