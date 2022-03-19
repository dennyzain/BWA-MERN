import axios, { AxiosRequestConfig } from 'axios';
import Cookies from 'js-cookie';

interface ConfigAxios extends AxiosRequestConfig {
  token?: boolean;
  tokenServer?:string;
}

async function callAPI({
  url, method, data, token, tokenServer,
}: ConfigAxios) {
  let headers = {};
  if (tokenServer) {
    headers = { Authorization: `Bearer ${tokenServer}` };
  } else if (token) {
    const tokenCookies = Cookies.get('tkn')!;
    const tkn = atob(tokenCookies);
    headers = { Authorization: `Bearer ${tkn}` };
  }
  const response = await axios({
    url,
    method,
    data,
    headers,
  }).catch((err) => err.response);
  if (response.status >= 300) {
    const res = {
      error: true,
      message: response.data.message,
      data: null,
    };
    return res;
  }
  const res = {
    error: false,
    message: 'success',
    data: response.data,
  };
  return res;
}

export default callAPI;
