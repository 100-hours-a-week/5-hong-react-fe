import REGEX from '@/constants/regex.js';
import VALIDATE_MESSAGES from '@/constants/validateMessages.js';

const nicknameValidate = (value) => {
  if (value.trim().length === 0)
    return {
      isValid: false,
      message: VALIDATE_MESSAGES.NICKNAME.REQUIRED,
    };

  if (!REGEX.NICKNAME.test(value))
    return {
      isValid: false,
      message: VALIDATE_MESSAGES.NICKNAME.INVALID,
    };

  return {
    isValid: true,
    message: '',
  };
};

export default nicknameValidate;
