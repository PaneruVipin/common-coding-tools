const { isObject, isArray } = require("./types");

const arrayToString = (data = []) => {
  const strList = data.map((d) => {
    if (typeof d == "string" || typeof d == "number") {
      return d;
    } else if (isObject(d)) {
      return objectToString(d);
    } else if (isArray(d)) {
      return arrayToString(d);
    } else {
      return d;
    }
  });
  return strList?.join(" ");
};

const objectToString = (data = {}) => {
  const keys = Object.keys(data);
  const strList = keys.map((key) => {
    if (typeof data?.[key] == "string" || typeof data?.[key] == "number") {
      return data?.[key];
    } else if (isObject(data?.[key])) {
      return objectToString(data?.[key]);
    } else if (isArray(data?.[key])) {
      return arrayToString(data?.[key]);
    } else {
      return data?.[key];
    }
  });
  return strList?.join(" ");
};

const search = (arr = [], query, keys = [], ignoreKeys = []) => {
  const newKeys = Object.keys(arr?.[0] || {});
  const allKeys = [...new Set([...keys, ...newKeys])];
  const filteredKeys = allKeys?.filter((key) => !ignoreKeys?.includes(key));
  let results = [];
  if (!query) {
    return arr;
  } else {
    const newQuery = query.toLowerCase();
    arr?.forEach((obj) => {
      filteredKeys?.forEach((key, i) => {
        let wet = 0;
        if (
          typeof obj?.[key] == "string" ||
          typeof obj?.[key] == "number" ||
          typeof obj?.[key] == "object" ||
          typeof obj?.[key] == "boolean"
        ) {
          let compareStr;
          if (typeof obj?.[key] == "string") {
            compareStr = obj?.[key]?.toLowerCase();
          }
          if (isObject(obj?.[key])) {
            const newStr = objectToString(obj?.[key]);
            compareStr = newStr?.toLowerCase();
          }
          if (isArray(obj?.[key])) {
            const newStr = arrayToString(obj?.[key]);
            compareStr = newStr?.toLowerCase();
          }
          if (typeof obj?.[key] == "boolean" || typeof obj?.[key] == "number") {
            compareStr = JSON.stringify(obj?.[key]);
          }
          if (
            compareStr?.includes(newQuery) ||
            newQuery?.includes(compareStr) ||
            newQuery?.split(" ")?.some((ch) => compareStr?.includes(ch)) ||
            newQuery
              ?.replace(/ /g, "")
              ?.match(
                new RegExp(
                  `.{1,${(newQuery?.length + (newQuery?.length % 2)) / 2}}`,
                  "g"
                )
              )
              .filter((str) => str.length >= 2)
              ?.some((ch) => compareStr?.includes(ch))
          ) {
            if (compareStr?.startsWith(newQuery)) {
              wet += 20 - i;
            }
            if (compareStr?.includes(newQuery)) {
              wet += 10 - i;
            }
            if (
              newQuery?.includes(compareStr) ||
              newQuery?.split(" ")?.some((ch) => compareStr?.includes(ch)) ||
              compareStr?.split(" ")?.some((ch) => newQuery?.includes(ch))
            ) {
              wet += 5 - i;
            }
            if (
              compareStr
                ?.replace(/ /g, "")
                ?.match(/.{1,4}/g)
                .filter((str) => str.length >= 2)
                ?.some((ch) => newQuery?.includes(ch)) ||
              newQuery
                ?.replace(/ /g, "")
                ?.match(/.{1,4}/g)
                .filter((str) => str.length >= 2)
                ?.some((ch) => compareStr?.includes(ch))
            ) {
              wet += 1 - i;
            }
            results.push({ obj, wet });
          }
        }
      });
    });
  }
  const newResults = results
    ?.sort((a, b) => b?.wet - a?.wet)
    ?.map((r) => r?.obj);
  return [...new Set(newResults)];
};

const descending = (arr = [{}], key) => {
  const keys = (key || Object.keys(arr[0])?.[0]).split(".");
  if (typeof arr?.[0] == "string") {
    return arr.sort((a, b) => b.localeCompare(a));
  } else if (typeof arr?.[0] == "number") {
    return arr.sort((a, b) => b - a);
  } else if (isObject(arr?.[0])) {
    if (keys?.length > 1) {
      return arr.sort((a, b) => {
        let dataA;
        let dataB;
        keys?.forEach((key) => {
          dataA = dataA ? dataA?.[key] : a?.[key];
          dataB = dataB ? dataB?.[key] : b?.[key];
        });
        return dataB?.localeCompare(dataA);
      });
    } else {
      return arr.sort((a, b) =>
        objectToString(b).localeCompare(objectToString(a))
      );
    }
  } else if (isArray(arr?.[0])) {
    return arr.sort((a, b) => arrayToString(b).localeCompare(arrayToString(a)));
  }
};

const ascending = (arr, key) => {
  const keys = (key || Object.keys(arr[0])?.[0]).split(".");
  if (typeof arr?.[0] == "string") {
    return arr.sort((a, b) => a.localeCompare(b));
  } else if (typeof arr?.[0] == "number") {
    return arr.sort((a, b) => a - b);
  } else if (isObject(arr?.[0])) {
    if (keys?.length > 1) {
      return arr.sort((a, b) => {
        let dataA;
        let dataB;
        keys?.forEach((key) => {
          dataA = dataA ? dataA?.[key] : a?.[key];
          dataB = dataB ? dataB?.[key] : b?.[key];
        });
        return dataA?.localeCompare(dataB);
      });
    } else {
      return arr.sort((a, b) =>
        objectToString(a).localeCompare(objectToString(b))
      );
    }
  } else if (isArray(arr?.[0])) {
    return arr.sort((a, b) => arrayToString(a).localeCompare(arrayToString(b)));
  }
};

const arrayToObject = (arr = [], key) => {
  const keys = key.split(".");
  let i = 0;
  const object = arr?.reduce((a, b) => {
    let id;
    keys?.forEach((key, i) => {
      id = id ? id?.[key] : b?.[key];
    });
    return { ...a, [id || ++i]: b };
  }, {});
  return object;
};

const objectToArray = (obj) => {
  const array = Object.keys(obj)?.map((key) => obj?.[key]);
  return array;
};

module.exports = {
  search,
  descending,
  ascending,
  arrayToObject,
  objectToArray,
};
