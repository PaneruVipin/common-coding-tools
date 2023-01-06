const randomString = (length = 5) => {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

const randomNumber = (highestNumber = 9007199254740991, lowestNumber = 0) => {
  return (
    Math.random() * (highestNumber - lowestNumber) +
    lowestNumber
  ).toFixed(0);
};

const randomData = (arr) => {
  const randomIndex = randomNumber(arr?.length - 1, 0);
  return arr?.[randomIndex];
};
exports.randomNumber = randomNumber;
exports.randomData = randomData;
exports.randomString = randomString;
module.exports = { randomNumber, randomData, randomString };
