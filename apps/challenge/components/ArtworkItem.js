/*
 * You can EDIT this FILE
 */

import React from "react";
import styled from "styled-components";

export default props => {
  const {
    artworkTitle,
    artworkUrl,
    profileUrl,
    subject,
    artist,
    dimensions,
    category,
    product
  } = props;
  return (
    <ArtworkItem>
      <ImageWrapper>
        <img src={props.imageUrl} />
        <Favicon className="fa fa-heart" />
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
};
