import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { BsArrowLeft } from 'react-icons/bs';

export const AdditionalInfo = styled.h3`
  text-align: center;
  font-weight: 500;
  font-size: 32px;
  line-height: 1.5;
  text-transform: uppercase;
  margin-bottom: 28px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 40px;
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

  svg: {
    fill: #212121;
  }

  &.active {
    background-color: rgb(81, 124, 232);
    color: #ffffff;
    border: transparent;
    fill: #ffffff;
  }
  :hover:not(.active) {
    background-color: rgb(81, 124, 232);
    color: #ffffff;
    border: transparent;
    fill: #ffffff;
  }
`;

export const Icon = styled(BsArrowLeft)`
  margin-right: 12px;
`;
