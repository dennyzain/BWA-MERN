import { CheckoutData } from '../interfaces/CheckoutSections';
import callAPI from './callAPI';

const ROOT_API = process.env.NEXT_PUBLIC_API;
const VERSION = 'api/v1';
export const IMG = process.env.NEXT_PUBLIC_IMG;

export const getFeaturedGames = async () => {
  const url = `${ROOT_API}/${VERSION}/players/landingpage`;
  const res = await callAPI({ url, method: 'GET' });
  return res.data.data;
};

export const getDetailVoucher = async (id:string|string[]|undefined) => {
  const url = `${ROOT_API}/${VERSION}/players/${id}/detail`;
  const res = await callAPI({ url, method: 'GET' });
  return res.data.data;
};

export const getGameCategory = async () => {
  const url = `${ROOT_API}/${VERSION}/players/category`;
  const res = await callAPI({ url, method: 'GET' });
  return res.data.data;
};
export const setCheckout = async (data:CheckoutData) => {
  const url = `${ROOT_API}/${VERSION}/players/checkout`;
  return callAPI({
    url, method: 'POST', data, token: true,
  });
};
