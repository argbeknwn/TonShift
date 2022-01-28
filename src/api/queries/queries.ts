import { COINGECKO } from '../instance';

interface SimplePriceProps {
  id: string;
  vs_currencies: string;
}

const ping = async (): Promise<unknown | null> => {
  const res = await COINGECKO.get('/ping');
  return res.data;
};

const simple_supported = async (): Promise<unknown | null> => {
  const res = await COINGECKO.get('/supported_vs_currencies');
  return res.data;
};

const simple_price = async ({ id, vs_currencies }: SimplePriceProps): Promise<unknown | null> => {
  const res = await COINGECKO.get(`/simple/price?ids=${id}&vs_currencies=${vs_currencies}`);
  return res.data;
};

const coins_list = async (): Promise<unknown | null> => {
  const res = await COINGECKO.get('/coins/list');
  return res.data;
};

const coins_markets = async (): Promise<Coin[] | null> => {
  const res = await COINGECKO.get('/coins/markets?vs_currency=usd&per_page=250');
  return res.data;
};

export { ping, simple_supported, simple_price, coins_list, coins_markets };