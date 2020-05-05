import { actionTypes } from "../const";

export const searchResults = () => async (dispatch) => {
  const res = await gaurdianAPI.get("/search");

  dispatch({ type: actionTypes.SEARCH, payload: res.data.response.results });
};
