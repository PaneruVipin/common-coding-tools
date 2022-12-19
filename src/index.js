const { lowerCase, upperCase } = require("./string");

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
const { validation } = require("./validation");
const {
  search,
  descending,
  ascending,
  arrayToObject,
  objectToArray,
} = require("./_array");

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
module.exports = { array, string, types, validation };
