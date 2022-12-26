const { makeHash, verifyHash } = require("./hash");
const { randomNumber, randomData, randomString } = require("./random");
const { lowerCase, upperCase } = require("./string");
const random = { randomNumber, randomData, randomString };
const {
  type,
  isUrl,
  isEmail,
  isBoolean,
  isArray,
  isObject,
  isNumber,
  isString,
} = require("./types");
const { validation, schema } = require("./validation");
const {
  search,
  descending,
  ascending,
  arrayToObject,
  objectToArray,
} = require("./_array");
const hashing = { makeHash, verifyHash };
const array = { search, descending, ascending, arrayToObject, objectToArray };
const string = { lowerCase, upperCase };
const types = {
  type,
  isUrl,
  isEmail,
  isBoolean,
  isArray,
  isObject,
  isNumber,
  isString,
};

module.exports = {
  array,
  string,
  types,
  validation: { validation, schema },
  hashing,
  random,
};
