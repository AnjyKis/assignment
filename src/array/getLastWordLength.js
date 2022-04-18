const getLastWordLength = (str) => {
  const wordsWithoutSpace = str.trim();
  const arrayOfWords = wordsWithoutSpace.split(' ');
  const lastIndex = arrayOfWords.length - 1;
  const result = arrayOfWords[lastIndex].length;
  return result;
};

export default getLastWordLength;
