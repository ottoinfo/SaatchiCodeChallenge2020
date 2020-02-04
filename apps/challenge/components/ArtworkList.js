/*
 * You can EDIT this FILE
 */

import React, { useEffect } from "react";

import MyConnector from "../connectors/MyConnector";
import { ArtworkList, ListItems } from "./styles";
import ArtworkItem from "./ArtworkItem";

// Step 3 - could start here
export default MyConnector(({ artworks, search }) => (
  <ArtworkList>
    <h1>
      Original Art for Sale{" "}
      <span style={{ fontSize: "14px" }}>
        ( {artworks.length || "0"} artworks)
      </span>
    </h1>

    <ListItems>
      {artworks.map((data, key) => (
        <ArtworkItem data={data} key={key} />
      ))}
      {!artworks.length ? <p>No Artworks Found</p> : null}
    </ListItems>
  </ArtworkList>
));
