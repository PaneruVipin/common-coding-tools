const makeHash = (str, seedValue) => {
  const seed = seedValue || str?.length || str;
  let h1 = 0xdeadbeef ^ seed,
    h2 = 0x41c6ce57 ^ seed;
  for (let i = 0, ch; i < str.length; i++) {
    ch = str.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }

  h1 =
    Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^
    Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 =
    Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^
    Math.imul(h1 ^ (h1 >>> 13), 3266489909);

  return 4294967296 * (2097151 & h2) + (h1 >>> 0);
};

const verifyHash = (value, compare, seedValue) => {
  // const data={}
  const seed = seedValue || value?.length || value;
  if (makeHash(value, seed) === compare) {
    return true;
  } else {
    return false;
  }
};
exports.verifyHash = verifyHash;
exports.makeHash = makeHash;
module.exports = { verifyHash, makeHash };
