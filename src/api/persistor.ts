import { QueryClient } from 'react-query';
import { dehydrate, hydrate } from 'react-query/hydration';
import { get, set, del } from 'idb-keyval';
import { VITE_APP_NAME } from '../constants/enviroment';

const persistWithIndexedDB = async (
  queryClient: QueryClient,
  {
    IndexedDBKey: indexedDBKey = `${VITE_APP_NAME}_QUERY_CACHE`,
    throttleTime = 1000,
    maxAge = 1000 * 60 * 60 * 24 * 7,
    buster = '',
  }: Options = {}
) => {
  if (typeof window !== 'undefined') {
    const saveCache = throttle(() => {
      const storageCache: IndexedDBCache = {
        buster,
        timestamp: Date.now(),
        cacheState: dehydrate(queryClient),
      };

      set(indexedDBKey, JSON.stringify(storageCache));
    }, throttleTime);

    queryClient.getQueryCache().subscribe(saveCache);

    const cacheStorage = await get(indexedDBKey);

    if (!cacheStorage) return;

    const cache: IndexedDBCache = JSON.parse(cacheStorage);

    if (cache.timestamp) {
      const expired = Date.now() - cache.timestamp > maxAge;
      const busted = cache.buster !== buster;
      if (expired || busted) {
        del(indexedDBKey);
      } else {
        hydrate(queryClient, cache.cacheState);
      }
    } else {
      del(indexedDBKey);
    }
  }
};

const throttle = (func: (...args: any[]) => any, wait = 100) => {
  let timer: null | ReturnType<typeof setTimeout> = null;

  return (...args: any[]) => {
    if (timer === null) {
      timer = setTimeout(() => {
        func(...args);
        timer = null;
      }, wait);
    }
  };
};

export { persistWithIndexedDB };
