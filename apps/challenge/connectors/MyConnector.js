/*
 * MyConnector - Step 2, 4, 6
 */

import { connect } from "react-redux";

const mapStateToProps = state => ({
  artworks: (state.artworks || []).filter(
    ({ artworkTitle }) =>
      artworkTitle.search(new RegExp(state.search, "i")) > -1
  ),
  favorites: state.favorites || [],
  search: state.search || ""
});

const mapDispatchToProps = dispatch => ({
  updateArtworks: payload => dispatch({ type: "UPDATE_ARTWORKS", payload }), // Array<Object>
  updateSearch: payload => dispatch({ type: "UPDATE_SEARCH", payload }), // String
  favoriteArtwork: payload => dispatch({ type: "FAVORITE_ARTWORK", payload }) // ArtworkId
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
); // Component Calls Connect
