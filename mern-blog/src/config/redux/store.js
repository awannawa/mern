const { createStore, combineReducers } = require("redux");

const initialStateHome = {
  dataBlogs: [],
};

const homeReducer = (state = initialStateHome, action) => {
  if (action.type === "UPDATE_DATA_BLOG") {
    return {
      ...state,
      dataBlogs: action.payload,
    };
  }
  return state;
};

const initialState = {
  dataBlogs: [],
  name: "awan",
};
const globalReducer = (state = initialState, action) => {
  if (action.type === "UPDATE_NAME") {
    return {
      ...state,
      name: "nawa",
    };
  }
  return state;
};

const reducer = combineReducers({ homeReducer, globalReducer });

const store = createStore(reducer);

export default store;
