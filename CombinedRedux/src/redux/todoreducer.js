const initialValue = [];

const todoreducer = (state = initialValue, action) => {
  switch (action.type) {
    case "Add_Todo":
      return [...state, action.payload];

    default:
      return state;
  }
};

export default todoreducer;
