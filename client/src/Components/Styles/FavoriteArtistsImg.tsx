import styled from "styled-components";

const FavoriteArtistsImg = styled.img`
  border-radius: 50%;
  width: 128px;
  height: 128px;
  transition: opacity 0.5s ease-in-out;
  &:hover {
    opacity: 0.4;
  }
`;

export default FavoriteArtistsImg;