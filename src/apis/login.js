import {API} from '.';

//로그인
export const setApiLogin = async (email, password) => {
  return await API.post('/auth', {
    email,
    password,
  });
};

//로그아웃
export const setApiLogout = async () => {
  return await API.delete('/auth');
};
