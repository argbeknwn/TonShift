import { StoreonModule } from 'storeon';

interface State {
  input: any | null;
  output: any | null;
  exchange: number;
  turnOver: boolean;
}

interface Events {
  switch: undefined;
  setAsset: { id: 'input' | 'output'; value: Coin };
  setExchange: number;
  turnOver: undefined;
}

const swap: StoreonModule<State, Events> = store => {
  store.on('@init', () => ({ input: null, output: null, exchange: 0, turnOver: false }));
  store.on('setAsset', (state, { id, value }) => {
    const multiply = () => value.value * state.exchange;
    const divide = () => value.value / state.exchange;

    if (id === 'input') {
      console.log({ input: multiply() });

      return {
        ...state,
        input: value,
        output: { ...state.output, value: state.turnOver ? divide() : multiply() },
      };
    }

    return {
      ...state,
      input: { ...state.input, value: state.turnOver ? multiply() : divide() },
      output: value,
    };
  });
  store.on('setExchange', (state, exchange) => ({ ...state, exchange }));
  store.on('turnOver', state => {
    return { ...state, turnOver: !state.turnOver };
  });
};

export { swap };
