// import { combineReducers } from "redux";

export const initialState = {
  name: "", // App Name
  params: {}, // Express/NEXTjs URL Params/Queries
  markdown: "", // Markdown Notes
  items: null, // Fetch Data
  search: null, // Search Input
  favorites: null, // ID's of Products
  isLoading: null,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PAGE_DATA":
      return { ...state, ...action.payload };
    default:
      return state;
  }
  return state;
};

export default reducer;
