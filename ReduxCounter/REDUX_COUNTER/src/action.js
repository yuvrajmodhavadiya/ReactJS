export const add = (num) => {
  return {
    type: "ADD",
    payload: num
  };
};

export const dec = (num) => {
  return {
    type: "DEC", // Corrected typo
    payload: num
  };
};
