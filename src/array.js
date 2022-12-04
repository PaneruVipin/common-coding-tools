const search = (arr, keys, query) => {
  let results = [];
  arr?.forEach((obj) => {
    keys?.forEach((key, i) => {
      let wet = 0;
      if (
        obj?.[key]?.includes(query) ||
        obj[key]?.split(" ")?.some((ch) => query?.includes(ch)) ||
        obj?.[key]
          .replace(/ /g, "")
          ?.match(/.{1,4}/g)
          .filter((str) => str.length > 2)
          ?.some((ch) => query?.includes(ch))
      ) {
        if (obj?.[key]?.includes(query)) {
          wet += 10 - i;
        }
        if (obj?.[key]?.split(" ")?.some((ch) => query?.includes(ch))) {
          wet += 5 - i;
        }
        if (
          obj?.[key]
            .replace(/ /g, "")
            ?.match(/.{1,4}/g)
            .filter((str) => str.length > 2)
            ?.some((ch) => query?.includes(ch))
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

module.exports = {
  search,
  descending,
  ascending,
};
