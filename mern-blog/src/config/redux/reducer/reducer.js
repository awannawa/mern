import { combineReducers } from "redux";
import globalReducer from "./globalReducer";
import homeReducer from "./homeReducer";
import createBlogReducer from "./createBlog";

const reducer = combineReducers({
  homeReducer,
  globalReducer,
  createBlogReducer,
});

export default reducer;
