const assetsMock = new Array(80).fill(0).map((_, index) => {
  return { id: index, name: `name - ${index}`, icon: `name - ${index}` };
});

export { assetsMock };
