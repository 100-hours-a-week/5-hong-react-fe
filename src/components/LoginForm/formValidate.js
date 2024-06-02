import emailValidate from '@/utils/emailValidate.js';
import passwordValidate from '@/utils/passwordValidate.js';

const formValidate = ({ email, password }) => {
  const validateErrors = {};

  // 이메일 검증
  const { isValid: isEmailValid, message: emailMessage } = emailValidate(email);
  if (!isEmailValid) validateErrors.email = emailMessage;

  // 비밀번호 검증
  const { isValid: isPasswordValid, message: passwordMessage } =
    passwordValidate(password);
  if (!isPasswordValid) validateErrors.password = passwordMessage;

  return validateErrors;
};

export default formValidate;
