import { createStoreon } from 'storeon';
import { persistState } from '@storeon/localstorage';
import { swap } from './reducers/swap';
import { pools } from './reducers/pools';
import { storeonLogger } from 'storeon/devtools';
import { DEV } from '../constants/enviroment';

const store = createStoreon([
  swap,
  pools,
  persistState(['input', 'output', 'exchange', 'turnOver', 'fav', 'pools']),
  DEV && storeonLogger,
]);

export { store };
