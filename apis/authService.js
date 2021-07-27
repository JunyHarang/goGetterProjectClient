import axios from 'axios';
import pwEncrypt from '@utils/pwEncrypt';

const signup = (email, name, nick_name, password, phone_number) => {
  const pwHash = pwEncrypt(password);
  return axios.post(
    '/api/signup',
    {
      email,
      name,
      nick_name,
      password: pwHash,
      phone_number,
    },
    {
      withCredentials: true,
    },
  );
};

const signin = (email, password) => {
  return axios
    .post(
      '/api/signin',
      {
        email,
        password,
      },
      {
        withCredentials: true,
      },
    )
    .then((res) => {
      if (res.data.data) {
        localStorage.setItem('access_token', JSON.stringify(res.data.data.access_token));
        localStorage.setItem('refresh_token', JSON.stringify(res.data.data.refresh_token));
        localStorage.setItem('user_id', JSON.stringify(res.data.data.user_id));
        localStorage.setItem('user_grade', JSON.stringify(res.data.data.user_grade));
      }
      return res.data;
    });
};

const logout = () => {
  localStorage.removeItem('access_token');
  localStorage.removeItem('refresh_token');
  localStorage.removeItem('user_id');
  localStorage.removeItem('user_grade');
};

export default { signup, signin, logout };
