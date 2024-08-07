import {API} from '.';

//회원가입
export const setApiNewAccount = async (
  email,
  password,
  nickname,
  phoneNumber,
) => {
  const res = await API.post('/accounts', {
    email,
    password,
    nickname,
    phoneNumber,
  });
  console.log(res);
  return res;
};

//회원 정보 수정
export const setApiAccountPatch = async (nickname, introduce) => {
  await API.patch('/accounts', {
    nickname,
    introduce,
  });
};

//프로필 이미지 변경
export const setApiAccountProfile = async profileImagePath => {
  const res = await API.patch(
    '/accounts/profile',
    {
      profileImagePath,
    },
    {headers: {'Content-Type': 'multipart/form-data'}},
  );
  console.log(res.data);
};

//내 정보
export const getApiAccountInfo = async () => {
  const res = await API.get('/accounts/info');
  // console.log(res.data.result);
  return res.data.result;
};
