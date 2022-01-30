import { StoreonModule } from 'storeon';

const pools: StoreonModule<State, Events> = store => {
  store.on('@init', () => ({ fav: [], pools: [], pool: null }));

  store.on('addPool', state => ({
    pools: [...state.pools, [state.input, state.output]],
  }));
  store.on('selectPool', (state, pos) => {
    return {
      pool: pos !== undefined ? state.pools[pos] : null,
    };
  });
  store.on('removePool', (state, pos) => ({
    pools: state.pools.filter((_, id) => pos === id),
  }));

  store.on('addFav', (state, value) => ({ ...state, fav: [...state.fav, value] }));
  store.on('removeFav', (state, id) => ({
    fav: state.fav.filter(coin => coin.id === id),
  }));
};

export { pools };
