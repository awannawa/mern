const { createStore } = require("redux");

const initialState = {
  dataBlog: [],
  name: "awan",
};

const reducer = (state = initialState, action) => {
  return state;
};

const store = createStore(reducer);

export default store;
