import { StoreonModule } from 'storeon';

const swap: StoreonModule<State, Events> = store => {
  store.on('@init', () => ({ input: null, output: null, exchange: 0, turnOver: false }));
  store.on('setAsset', (state, { id, value }) => {
    const multiply = () => value.value * state.exchange;
    const divide = () => value.value / state.exchange;

    if (id === 'input') {
      return {
        input: value,
        output: { ...state.output, value: state.turnOver ? divide() : multiply() },
      };
    }

    return {
      input: { ...state.input, value: state.turnOver ? multiply() : divide() },
      output: value,
    };
  });
  store.on('setExchange', (state, exchange) => ({ ...state, exchange }));
  store.on('turnOver', state => {
    return {
      input: state.output,
      output: state.input,
      turnOver: !state.turnOver,
    };
  });
};

export { swap };
