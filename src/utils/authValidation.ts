export const checkEmailValidation = (value: string) => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
  return emailRegex.test(value) || '이메일 형식에 맞지 않습니다.';
};

export const checkPasswordValidation = (
  value: string,
  mode: 'default' | 'detail' = 'default'
) => {
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@!])[a-zA-Z\d@!]{8,16}$/;

  const messages = {
    default: '비밀번호 형식에 맞지 않습니다.',
    detail: '영문, 숫자, 특수문자(@, !)를 포함하여 8~16자로 입력해주세요.',
  };

  return passwordRegex.test(value) || messages[mode];
};
