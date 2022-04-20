export default (coll) => {
  if (coll.length < 2) {
    return false;
  }
  let start = coll[0] - 1;
  for (let i = 0; i < coll.length; i += 1) {
    start += 1;
    if (start !== coll[i]) {
      return false;
    }
  }
  return true;
};
