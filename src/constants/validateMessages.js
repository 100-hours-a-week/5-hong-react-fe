const VALIDATE_MESSAGES = {
  PROFILE_IMAGE: {
    REQUIRED: '*프로필 사진을 추가해주세요.',
  },
  EMAIL: {
    REQUIRED: '*이메일을 작성해주세요.',
    INVALID:
      '*올바른 이메일 주소 형식을 입력해주세요. (예:example@example.com)',
  },
  PASSWORD: {
    REQUIRED: '*비밀번호를 입력해주세요.',
    INVALID:
      '*비밀번호는 8자 이상, 20자 이하이며, 대문자, 소문자, 숫자, 특수문자를 각각 최소 1개 포함해야합니다.',
  },
  PASSWORD_CONFIRM: {
    REQUIRED: '*비밀번호를 한번 더 입력해주세요.',
    MISMATCH: '*비밀번호가 일치하지 않습니다',
  },
  NICKNAME: {
    REQUIRED: '*닉네임을 입력해주세요.',
    INVALID: '*닉네임은 띄어쓰기 없이 최대 10자까지 작성 가능합니다.',
  },
  POSTS: {
    REQUIRED: '*제목과 내용을 모두 입력해주세요.',
    TITLE_REQUIRED: '*제목을 입력해주세요.',
    CONTENTS_REQUIRED: '*내용을 입력해주세요.',
  },
};

export default VALIDATE_MESSAGES;
