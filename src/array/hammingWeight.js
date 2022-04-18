export default (num) => {
  const binaryView = num.toString(2);
  const result = binaryView.split('').filter((e) => e === '1').length;
  return result;
};
