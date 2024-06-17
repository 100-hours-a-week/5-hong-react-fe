import nicknameValidate from '@/utils/nicknameValidate.js';
import VALIDATE_MESSAGES from '@/constants/validateMessages.js';
import { postCheckNickname } from '@/apis/member/postCheckNickname.js';

const formValidate = async ({ nickname }) => {
  const validateErrors = {};

  const { isValid, message } = nicknameValidate(nickname);
  if (!isValid) validateErrors.nickname = message;
  // await validateNickname({ nickname }).catch(
  //   () => (validateErrors.nickname = VALIDATE_MESSAGES.NICKNAME.DUPLICATE),
  // );
  else
    await postCheckNickname({ nickname }).catch(
      () => (validateErrors.nickname = VALIDATE_MESSAGES.NICKNAME.DUPLICATE),
    );

  return validateErrors;
};

export default formValidate;
