export default (collection, size) => {
  const newCollection = [];
  for (let i = 0; i < collection.length; i += size) {
    newCollection.push(collection.slice(i, i + size));
  }
  return newCollection;
};
