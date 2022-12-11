const search = (arr, keys, query) => {
  const newQuery = query.toLowerCase();
  let results = [];
  arr?.forEach((obj) => {
    keys?.forEach((key, i) => {
      let wet = 0;
      const compareStr = obj?.[key]?.toLowerCase();
      if (
        compareStr?.includes(newQuery) ||
        newQuery?.includes(compareStr) ||
        newQuery?.split(" ")?.some((ch) => compareStr?.includes(ch)) ||
        compareStr?.split(" ")?.some((ch) => newQuery?.includes(ch)) ||
        compareStr
          ?.replace(/ /g, "")
          ?.match(/.{1,4}/g)
          .filter((str) => str.length > 2)
          ?.some((ch) => newQuery?.includes(ch)) ||
        newQuery
          ?.replace(/ /g, "")
          ?.match(/.{1,4}/g)
          .filter((str) => str.length > 2)
          ?.some((ch) => compareStr?.includes(ch))
      ) {
        if (obj?.[key]?.toLowerCase()?.includes(newQuery)) {
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
            .filter((str) => str.length > 2)
            ?.some((ch) => newQuery?.includes(ch)) ||
          newQuery
            ?.replace(/ /g, "")
            ?.match(/.{1,4}/g)
            .filter((str) => str.length > 2)
            ?.some((ch) => compareStr?.includes(ch))
        ) {
          wet += 1 - i;
        }
        results.push({ obj, wet });
      }
    });
  });
  const newResults = results
    ?.sort((a, b) => b?.wet - a?.wet)
    ?.map((r) => r?.obj);
  return [...new Set(newResults)];
};

const descending = (arr, key) => {
  if (typeof arr?.[0] == "string") {
    return arr.sort((a, b) => b.localeCompare(a));
  } else if (typeof arr?.[0] == "number") {
    return arr.sort((a, b) => b - a);
  } else if (typeof arr?.[0] == "object") {
    return arr.sort((a, b) =>
      b?.[key ? key : Object.keys(arr?.[0])?.[0]]?.localeCompare(
        a?.[key ? key : Object.keys(arr?.[0])?.[0]]
      )
    );
  }
};

const ascending = (arr, key) => {
  if (typeof arr?.[0] == "string") {
    return arr.sort((a, b) => a.localeCompare(b));
  } else if (typeof arr?.[0] == "number") {
    return arr.sort((a, b) => a - b);
  } else if (typeof arr?.[0] == "object") {
    return arr.sort((a, b) =>
      a?.[key ? key : Object.keys(arr?.[0])?.[0]]?.localeCompare(
        b?.[key ? key : Object.keys(arr?.[0])?.[0]]
      )
    );
  }
};

const arrayToObject = (arr, key) => {
  let i = 0;
  const object = arr?.reduce(
    (a, b) => ({ ...a, [b?.[key] ? b?.[key] : ++i]: b }),
    {}
  );
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
