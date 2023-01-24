import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.header`
  background-color: rgb(112, 128, 144);
  box-shadow: 0px 9px 8px 0px rgba(34, 60, 80, 0.2);
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
`;

export const StyledAppBar = styled.nav`
  display: flex;
  align-items: center;
  max-width: 1280px;
  padding-left: 34px;
  padding-right: 34px;
  margin: 0 auto;
  margin-bottom: 28px;
  height: 80px;
  font-weight: 700;
  font-size: 20px;
  line-height: 1.17;
`;

export const NavItem = styled(NavLink)`
  position: relative;
  transition: all 0.4s ease;
  display: inline-block;
  font-family: inherit;
  padding: 12px;
  text-decoration: none;
  color: #212121;

  ::after {
    content: '';
    position: absolute;
    height: 2px;
    background-color: #8b001a;
    width: 0;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    transition: 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) all;
  }

  &.active {
    color: #8b001a;
  }
  :hover:not(.active) {
    color: #8b001a;

    ::after {
      width: 100%;
    }
  }
`;
