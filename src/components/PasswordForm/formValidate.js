import passwordValidate from '@/utils/passwordValidate.js';
import VALIDATE_MESSAGES from '@/constants/validateMessages.js';

function formValidate({ password, passwordConfirm }) {
  const validateErrors = {};

  // 비밀번호 검증
  const { isValid, message } = passwordValidate(password);
  if (!isValid) validateErrors.password = message;

  // 비밀번호 확인 검증
  if (!passwordConfirm)
    validateErrors.passwordConfirm =
      VALIDATE_MESSAGES.PASSWORD_CONFIRM.REQUIRED;
  else if (passwordConfirm !== password)
    validateErrors.passwordConfirm =
      VALIDATE_MESSAGES.PASSWORD_CONFIRM.MISMATCH;

  return validateErrors;
}

export default formValidate;
