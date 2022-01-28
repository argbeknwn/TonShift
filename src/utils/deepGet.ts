const deepGet = (obj: any, keys: string[]) => {
  return keys.reduce((xs, x) => (xs && xs[x] !== null && xs[x] !== undefined ? xs[x] : null), obj);
};

export { deepGet };
