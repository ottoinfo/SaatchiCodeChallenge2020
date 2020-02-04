/*
 * You can EDIT this FILE
 */

import React from "react";
import styled from "styled-components";

import MyConnector from "../connectors/MyConnector";

import {
  ArtworkItem,
  Column,
  Favicon,
  ImageWrapper,
  Info,
  Row,
  SubText,
  Title
} from "./styles/artworkItem";

export default MyConnector(({ data, favorites, favoriteArtwork }) => {
  if (!data) {
    return <p>Please set ArtworkItems into a attribute of `data`</p>;
  }
  const {
    artId, // Maybe use this VARIABLE to track FAVORITES
    artworkTitle,
    artworkUrl,
    imageUrl,
    profileUrl,
    subject,
    artist,
    dimensions,
    category,
    product
  } = data;
  // Step 6 (Bonus) isFavorited will turn heart RED if TRUE
  const isFavorited = favorites.includes(artId); // false
  return (
    <ArtworkItem>
      <ImageWrapper>
        <img src={imageUrl} />
        <Favicon
          isFavorited={isFavorited}
          className="fa fa-heart"
          onClick={() => favoriteArtwork(artId)}
        />
      </ImageWrapper>
      <Info>
        <Title>
          <a href={artworkUrl}>{artworkTitle}</a>
        </Title>

        <SubText>
          {category}, {dimensions.width}W x {dimensions.height}H x{" "}
          {dimensions.depth}cm
        </SubText>

        <Row>
          <Column>
            <Title>
              <a href={artist.profileUrl}>
                {artist.firstName} {artist.lastName}
              </a>
            </Title>
            <SubText>{artist.country}</SubText>
          </Column>

          <Column right>
            {product.originalStatus === "avail" && (
              <Title>${(product.originalPrice / 100).toLocaleString()}</Title>
            )}
            <div>
              {product.printsAvailable && (
                <span>Prints from ${product.printsPrice.toLocaleString()}</span>
              )}
            </div>
          </Column>
        </Row>
      </Info>
    </ArtworkItem>
  );
});
