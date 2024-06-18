import emailValidate from '@/utils/emailValidate.js';
import passwordValidate from '@/utils/passwordValidate.js';
import nicknameValidate from '@/utils/nicknameValidate.js';
import VALIDATE_MESSAGES from '@/constants/validateMessages.js';
import { postCheckEmail } from '@/apis/member/postCheckEmail.js';
import { postCheckNickname } from '@/apis/member/postCheckNickname.js';

const formValidate = async ({ email, password, passwordConfirm, nickname }) => {
  const validateErrors = {};

  // 이메일 검증
  const { isValid: isEmailValid, message: emailMessage } = emailValidate(email);
  if (!isEmailValid) validateErrors.email = emailMessage;
  else
    await postCheckEmail({ email }).catch(
      () => (validateErrors.email = VALIDATE_MESSAGES.EMAIL.DUPLICATE),
    );

  // 비밀번호 검증
  const { isValid: isPasswordValid, message: passwordMessage } =
    passwordValidate(password);
  if (!isPasswordValid) validateErrors.password = passwordMessage;

  // 비밀번호 확인 검증
  if (!passwordConfirm)
    validateErrors.passwordConfirm =
      VALIDATE_MESSAGES.PASSWORD_CONFIRM.REQUIRED;
  else if (passwordConfirm !== password)
    validateErrors.passwordConfirm =
      VALIDATE_MESSAGES.PASSWORD_CONFIRM.MISMATCH;

  // 닉네임 검증
  const { isValid: isNicknameValid, message: nicknameMessage } =
    nicknameValidate(nickname);
  if (!isNicknameValid) validateErrors.nickname = nicknameMessage;
  else
    await postCheckNickname({ nickname }).catch(
      () => (validateErrors.nickname = VALIDATE_MESSAGES.NICKNAME.DUPLICATE),
    );

  return validateErrors;
};

export default formValidate;
