import axios from 'axios';
import accessTokenUpdate from '@apis/accessTokenUpdate';

const access_token = JSON.parse(localStorage.getItem('access_token'));

const instance = axios.create({
  baseURL: '/api',
  withCredentials: true,
  timeout: 1000,
});

instance.interceptors.request.use(
  (config) => {
    config.headers['Content-Type'] = 'application/json; charset=utf-8';
    config.headers['Authorization'] = 'Bearer ' + access_token;
    return config;
  },
  (err) => {
    console.dir(err);
    return Promise.reject(err);
  },
);

instance.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    // errorController(err);
    const originalRequest = err.config;
    const errorState = err.response.data.message;

    if (errorState === '엑세스토큰 불일치') {
      const { data } = await accessTokenUpdate({
        url: '/token',
        method: 'get',
      });

      localStorage.setItem('access_token', JSON.stringify(data.access_token));
      const accessToken = data.access_token;

      originalRequest.headers.Authorization = 'Bearer ' + accessToken;
      return axios(originalRequest);
    }
    return Promise.reject(err);
  },
);

export default instance;
