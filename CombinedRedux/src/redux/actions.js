export const add = (num) => {
  return {
    type: "ADD",
    payload: num
  };
};

export const dec = (num) => {
  return {
    type: "Dec",
    payload: num
  };
};

export const addtodo = (payload) => {
  return {
    type: "Add_Todo",
    payload
  };
};
