const initialValue = {
  counter: 0
};

const counterreducer = (state = initialValue, action) => {
  switch (action.type) {
    case "ADD":
      return { counter: state.counter + action.payload };

    case "Dec":
      return { counter: state.counter - action.payload };

    default:
      return state;
  }
};

export default counterreducer;
