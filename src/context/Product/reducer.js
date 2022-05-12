export const initialState = {
  allProduct: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "getAllProduct":
      return { ...state, allProduct: action?.payload?.data };
    default:
      return state;
  }
};
