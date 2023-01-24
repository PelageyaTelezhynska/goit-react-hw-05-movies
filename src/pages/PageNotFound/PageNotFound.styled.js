import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const Img = styled.img`
  width: 800px;
  border-radius: 8px;
  margin-right: 32px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Styled404 = styled.p`
  font-weight: 700;
  font-size: 88px;
  margin-bottom: 16px;
`;

export const StyledText = styled.p`
  text-align: center;
  font-size: 28px;
  line-height: 1.34;
  margin-bottom: 28px;
`;

export const NavItem = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  text-decoration: none;
  font-family: inherit;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.17;
  text-transform: uppercase;
  color: #212121;

  border: none;
  border-radius: 5px;
  width: 160px;
  height: 44px;
  background-color: rgb(112, 128, 144);
  box-shadow: 0px 9px 8px 0px rgba(34, 60, 80, 0.2);
  transition-property: background-color, color, border, fill;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  cursor: pointer;

  &.active {
    background-color: rgb(81, 124, 232);
    color: #ffffff;
    border: transparent;
  }
  :hover:not(.active) {
    background-color: rgb(81, 124, 232);
    color: #ffffff;
    border: transparent;
  }
`;
