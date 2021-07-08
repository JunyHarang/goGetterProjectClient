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
      if (res.data.data.access_token) {
        localStorage.setItem('user', JSON.stringify(res.data.data));
      }

      return res.data;
    });
};

const logout = () => {
  localStorage.removeItem('user');
};

export default { signup, signin, logout };
