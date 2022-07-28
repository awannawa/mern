const initialState = {
  dataBlog: [],
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

export default globalReducer;
