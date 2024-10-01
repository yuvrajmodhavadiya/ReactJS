const initialState = 0; // Initial state

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return state + action.payload;
    case "DEC":
      return state - action.payload;
    default:
      return state;
  }
};

export default reducer;
