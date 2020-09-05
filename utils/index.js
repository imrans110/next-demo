export const removeEmptyKeys = (queryObject) => {
  for (const objectKey of Object.keys(queryObject)) {
    if (
      queryObject[objectKey] === null ||
      queryObject[objectKey] === "" ||
      queryObject[objectKey] === "null" ||
      queryObject[objectKey] === undefined
    ) {
      delete queryObject[objectKey];
    }
  }
  return queryObject;
};
