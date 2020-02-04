// import { combineReducers } from "redux";

export const initialState = {
  name: "", // App Name
  params: {}, // Express/NEXTjs URL Params/Queries
  markdown: "", // Markdown Notes
  artworks: [], // Fetch Data => Array<Object>
  search: "", // Search Input => String
  favorites: [] // Array<artId> of Products
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PAGE_DATA":
      return { ...state, ...action.payload };
    case "UPDATE_ARTWORKS":
      return { ...state, artworks: action.payload };
    case "UPDATE_SEARCH":
      return { ...state, search: action.payload };
    case "FAVORITE_ARTWORK":
      return {
        ...state,
        favorites: state.favorites.includes(action.payload)
          ? [...state.favorites.filter(artId => artId !== action.payload)]
          : [...state.favorites, action.payload]
      };
    default:
      return state;
  }
  return state;
};

export default reducer;
