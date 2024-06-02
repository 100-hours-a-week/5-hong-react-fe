import VALIDATE_MESSAGES from '@/constants/validateMessages.js';

function formValidate({ title, contents }) {
  const validateErrors = {};

  if (!title && !contents)
    validateErrors.message = VALIDATE_MESSAGES.POSTS.REQUIRED;
  else if (!title)
    validateErrors.message = VALIDATE_MESSAGES.POSTS.TITLE_REQUIRED;
  else if (!contents)
    validateErrors.message = VALIDATE_MESSAGES.POSTS.CONTENTS_REQUIRED;

  return validateErrors;
}

export default formValidate;
