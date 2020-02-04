/*
 * You can EDIT this FILE
 */

import styled from "styled-components";

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

// Step 4 (Styling): look at Staring Here
export const ListItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  > * {
    width: 25%;
  }
`;
