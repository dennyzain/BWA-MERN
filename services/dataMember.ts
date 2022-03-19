import { signInForm } from '../interfaces/SignInSections';
import callAPI from './callAPI';

const ROOT_API = process.env.NEXT_PUBLIC_API;
const VERSION = 'api/v1';

export const actionSignUp = async (data:FormData) => {
  const url = `${ROOT_API}/${VERSION}/auth/signup`;
  return callAPI({ url, method: 'POST', data });
};

export const actionSignIn = async (data:signInForm) => {
  const url = `${ROOT_API}/${VERSION}/auth/signin`;
  return callAPI({ url, method: 'POST', data });
};

export const getMemberOverview = async () => {
  const url = `${ROOT_API}/${VERSION}/players/dashboard`;
  return callAPI({
    url, method: 'GET', token: true,
  });
};
export const getMemberTransactions = async () => {
  const url = `${ROOT_API}/${VERSION}/players/history`;
  return callAPI({
    url, method: 'GET', token: true,
  });
};
export const getMemberTransactionStatus = async (status:string) => {
  let params = status;
  if (status === 'all') {
    params = '';
  }
  const url = `${ROOT_API}/${VERSION}/players/history?status=${params}`;
  return callAPI({
    url, method: 'GET', token: true,
  });
};

export const getTransactionDetail = async (id:string|string[], token:string) => {
  const url = `${ROOT_API}/${VERSION}/players/history/${id}/detail`;
  return callAPI({
    url, method: 'GET', token: true, tokenServer: token,
  });
};
export const setProfile = async (data:FormData) => {
  const url = `${ROOT_API}/${VERSION}/players/profile`;
  return callAPI({
    url, method: 'PUT', token: true, data,
  });
};
