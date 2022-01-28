import { createStoreon } from 'storeon';
import { persistState } from '@storeon/localstorage';
import { swap } from './reducers/swap';
import { storeonLogger } from 'storeon/devtools';
import { DEV } from '../constants/enviroment';

const store = createStoreon([
  swap,
  persistState(['input', 'output', 'turnOver']),
  DEV && storeonLogger,
]);

export { store };
