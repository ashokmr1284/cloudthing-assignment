import { actionTypes } from "../const";

const searchReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.SEARCH:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default searchReducer;
