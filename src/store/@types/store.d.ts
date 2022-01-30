interface State {
  input: any | null;
  output: any | null;
  exchange: number;
  turnOver: boolean;
  pools: [Coin, Coin][] | [];
  pool: [Coin, Coin] | null;
  fav: Coin[] | [];
}

interface Events {
  switch: undefined;
  setAsset: { id: 'input' | 'output'; value: Coin };
  setExchange: number;
  turnOver: undefined;
  addPool: undefined;
  selectPool?: number;
  removePool: number;
  addFav: Coin;
  removeFav: string;
}
