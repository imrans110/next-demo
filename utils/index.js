export const removeEmptyKeys = (queryObject) => {
  let copiedObject = { ...queryObject };

  for (const objectKey of Object.keys(copiedObject)) {
    if (
      copiedObject[objectKey] === null ||
      copiedObject[objectKey] === "" ||
      copiedObject[objectKey] === "null" ||
      copiedObject[objectKey] === undefined
    ) {
      delete copiedObject[objectKey];
    }
  }
  return copiedObject;
};
