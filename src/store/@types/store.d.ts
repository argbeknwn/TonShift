interface State {
  input: any | null;
  output: any | null;
  exchange: number;
  turnOver: boolean;
  fav: Coin[] | [];
}

interface Events {
  switch: undefined;
  setAsset: { id: 'input' | 'output'; value: Coin };
  setExchange: number;
  turnOver: undefined;
  addFav: Coin;
  removeFav: string;
}
