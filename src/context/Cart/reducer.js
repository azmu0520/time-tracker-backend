export const initialState = {
  count: 0,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "addCart":
      return { ...state, count: state.count++ };
    case "removeCart":
      return { ...state, count: state.count-- };
    case "viewCart":
      return { ...state, count: 0 };
    default:
      return state;
  }
};
