const { createStore } = require("redux");

const initialState = {
  dataBlogs: [],
  name: "awan",
};

const reducer = (state = initialState, action) => {
  if (action.type === "UPDATE_DATA_BLOG") {
    return {
      ...state,
      dataBlogs: action.payload,
    };
  }
  if (action.type === "UPDATE_NAME") {
    return {
      ...state,
      name: "nawa",
    };
  }
  return state;
};

const store = createStore(reducer);

export default store;
