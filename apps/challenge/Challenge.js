/*
 * You can EDIT this FILE
 */

import React, { useEffect } from "react";

import MyConnector from "./connectors/MyConnector";
import ArtworkList from "./components/ArtworkList";

export default MyConnector(({ updateArtworks }) => {
  // This is where I would start on Step 1
  // Either look at using `useEffect` or convert to `Component`
  useEffect(() => {
    (async () => {
      const response = await fetch("/api/data");
      const { success, payload } = await response.json();
      updateArtworks(payload);
    })();
    // No Cleanup
    return;
  }, []);

  return <ArtworkList />;
});
