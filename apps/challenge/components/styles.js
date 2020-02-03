/*
 * You can EDIT this FILE
 */

import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { normalize } from "polished";

export const GlobalStyle = createGlobalStyle`
  ${normalize()};
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
  }
  * {
    box-sizing: border-box;
  }
`;

// StyleBase
export const StyleBase = styled.div`
  color: ${props => props.theme.colors.default};
  font-family: ${props => props.theme.fontFamilySans};

  @media (min-width: ${props => props.theme.breakpoints[1]}px) {
    padding: 0;
  }
`;

// App ( OUTER Wrapper )
export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
`;

// HEADER Component
export const Header = styled.header`
  border-bottom: 1px solid ${props => props.theme.colors.borderLight};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
`;

export const Logo = styled.img`
  width: 200px;
  height: 29.844px;
`;

export const Links = styled.nav`
  a {
    color: ${props => props.theme.colors.default};
    transition: color ease-in 0.2s;
    text-transform: none;
    text-decoration: none;
    outline: none;
    + a {
      margin-left: 30px;
      &:before {
        content: "|";
        margin-right: 30px;
      }
    }
    &:focused,
    &:visited {
      color: ${props => props.theme.colors.default};
    }
    &:hover {
      color: ${props => props.theme.colors.blue};
    }
  }
`;

// SEARCH Component
export const Search = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${props => props.theme.colors.borderDark};
  [data-type="hideSearch"] & {
    visibility: hidden;
  }
`;

export const SVG = styled.svg`
  height: 7px;
  width: 14px;
  margin: 15px 10px;
`;

export const Input = styled.input`
  border: none;
  outline: none;
  padding: 10px;
  display: flex;
  flex-grow: 1;
  border-left: 1px solid ${props => props.theme.colors.borderDark};
  color: #666;
  &::placeholder {
    color: #ccc;
  }
`;

export const Mag = styled.img`
  margin-right: 10px;
  height: 15px;
  width: 16.4219px;
`;

// SectionWrapper
export const Section = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 15px;
  margin: 0;
`;

// ArtworkList
export const ArtworkList = styled.div`
  h1 {
    font-size: ${props => props.theme.fontSizes[6]}px;
    font-family: ${props => props.theme.fontFamilySerif};
    font-weight: normal;
    margin-top: 0;
  }
  p {
    font-style: italic;
  }
`;

export const ListItems = styled.div``;

// ARTWORKITEM Component
export const ArtworkItem = styled.div`
  background: #fff;
  border: ${props => props.theme.space[2]}px;
  padding: ${props => props.theme.space[3]}px;
  img {
    width: 100%;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
`;

export const Favicon = styled.span`
  position: absolute;
  top: 10px;
  right: 20px;
  background: white;
  border-radius: 50%;
  width: 37px;
  height: 37px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props =>
    props.liked ? props.theme.colors.red : props.theme.colors.secondary};
  transition: 0.3s ease-in color;
  cursor: pointer;
  &.fa {
    display: flex;
  }
  &:hover {
    color: ${props =>
      props.liked ? props.theme.colors.secondary : props.theme.colors.red};
  }
`;

export const Info = styled.div`
  margin-top: ${props => props.theme.space[2]}px;
`;

export const Title = styled.div`
  font-family: ${props => props.theme.fontFamilySerif};
  font-size: ${props => props.theme.fontSizes[3]}px;
  font-weight: bold;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  margin-bottom: ${props => props.theme.space[1]}px;
  a {
    text-decoration: none;
    display: inline-block;
    color: ${props => props.theme.colors.default};
    transition: 0.5s ease color;
    cursor: pointer;
    &:hover {
      color: ${props => props.theme.colors.blue};
    }
  }
`;

export const SubText = styled.div`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: ${props => props.theme.colors.lightGray};
  margin-bottom: ${props => props.theme.space[3]}px;
`;

export const ArtworkWrapper = styled.div`
  position: relative;
  img {
    opacity: 1;
    transition: opacity linear 0.3s;
    ${props => props.hover && "opacity: 0.8"};
    backface-visibility: hidden;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  ${props => props.right && "align-items: flex-end;"};
`;

// Instructions Component
export const Instructions = styled.div`
  h1 {
    font-family: ${props => props.theme.fontFamilySerif};
    font-weight: normal;
    margin: 0 0 30px;
  }
  h3 {
    font-family: ${props => props.theme.fontFamilySerif};
    font-weight: normal;
    margin: 20px 0 10px;
  }
  img {
    max-width: 800px;
  }
  code {
    padding: 5px 5px;
    display: inline-block;
    background: ${props => props.theme.colors.backgroundGrayLight};
    border: 1px solid ${props => props.theme.colors.borderDark};
    border-radius: 3px;
  }
  p {
    color: ${props => props.theme.colors.default};
  }
  a {
    color: ${props => props.theme.colors.blue};
    transition: color ease-in 0.2s;
    text-transform: none;
    text-decoration: none;
    outline: none;
    + a {
      margin-left: 30px;
    }
    &:focused,
    &:visited {
      color: ${props => props.theme.colors.secondary};
    }
    &:hover {
      color: ${props => props.theme.colors.blue};
    }
  }
`;
