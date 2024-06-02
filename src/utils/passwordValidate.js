import REGEX from '@/constants/regex.js';
import VALIDATE_MESSAGES from '@/constants/validateMessages.js';

const passwordValidate = (value) => {
  if (value.trim().length === 0)
    return {
      isValid: false,
      message: VALIDATE_MESSAGES.PASSWORD.REQUIRED,
    };

  if (!REGEX.PASSWORD.test(value))
    return {
      isValid: false,
      message: VALIDATE_MESSAGES.PASSWORD.INVALID,
    };

  return {
    isValid: true,
    message: '',
  };
};

export default passwordValidate;
