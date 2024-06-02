import REGEX from '@/constants/regex.js';
import VALIDATE_MESSAGES from '@/constants/validateMessages.js';

const emailValidate = (value) => {
  if (value.trim().length === 0)
    return {
      isValid: false,
      message: VALIDATE_MESSAGES.EMAIL.REQUIRED,
    };

  if (!REGEX.EMAIL.test(value))
    return {
      isValid: false,
      message: VALIDATE_MESSAGES.EMAIL.INVALID,
    };

  return {
    isValid: true,
    message: '',
  };
};

export default emailValidate;
