import styled from 'styled-components';

export const Poster = styled.img`
  margin-bottom: 12px;
  height: 574px;
  width: 100%;
  scale: 1;
  background-color: rgb(210, 210, 210);
  transition: scale 350ms linear, box-shadow 350ms linear;

  :hover {
    scale: 1.02;
    box-shadow: 0 0 7px 2px #a8a6a5;
  }
`;

export const Title = styled.h2``;
