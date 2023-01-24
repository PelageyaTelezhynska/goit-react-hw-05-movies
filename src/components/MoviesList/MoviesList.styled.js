import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Title = styled.h1`
display: flex,
justify-content: center;
  text-align: center;
  text-transform: uppercase;
  font-size: 24px;
  color: #212121;
  margin-bottom: 20px;
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-auto-rows: {calc((100% - 90px) / 4)};
  grid-gap: 30px;
  margin-bottom: 40px;
`;

export const NavItem = styled(NavLink)`
  position: relative;
  transition: all 0.4s ease;
  display: inline-block;
  font-family: inherit;
  padding: 12px;
  text-decoration: none;
  color: #212121;

  &.active {
    color: #8b001a;
  }
  :hover:not(.active) {
    color: #8b001a;
  }
`;
