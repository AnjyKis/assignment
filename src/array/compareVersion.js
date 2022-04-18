const compareVersion = (version1, version2) => {
  const [major1, minor1] = version1.split('.');
  const [major2, minor2] = version2.split('.');
  const finalVersion1 = Number(major1) * 100 + Number(minor1);
  const finalVersion2 = Number(major2) * 100 + Number(minor2);
  let result;
  if (finalVersion1 === finalVersion2) {
    result = 0;
  } else if (finalVersion1 > finalVersion2) {
    result = 1;
  } else if (finalVersion1 < finalVersion2) {
    result = -1;
  } else {
    result = null;
  }
  return result;
};

export default compareVersion;
