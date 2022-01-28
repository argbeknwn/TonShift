import { StoreonModule } from 'storeon';

interface State {
  input: string | null;
  output: string | null;
  turnOver: boolean;
}

interface Events {
  switch: undefined;
  setAsset: { id: 'input' | 'output'; value: Coin };
  turnOver: undefined;
}

const swap: StoreonModule<State, Events> = store => {
  store.on('@init', () => ({ input: null, output: null, turnOver: false }));
  store.on('setAsset', (state, { id, value }) => ({ ...state, [id]: value }));
  store.on('turnOver', state => ({ ...state, turnOver: !state.turnOver }));
};

export { swap };
