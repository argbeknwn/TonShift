import { StoreonModule } from 'storeon';

const pools: StoreonModule<State, Events> = store => {
  store.on('@init', () => ({ fav: [] }));
  store.on('addFav', (state, value) => ({ ...state, fav: [...state.fav, value] }));
  store.on('removeFav', (state, id) => ({
    ...state,
    fav: state.fav.filter(coin => coin.id === id),
  }));
};

export { pools };
