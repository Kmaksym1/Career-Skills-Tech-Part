import { styled } from "styled-components";
import { NavLink } from 'react-router-dom';
export const StyledLink = styled(NavLink)`
    padding-left: 15px;
    padding-right: 15px;
    text-decoration: none;
    color: #ab71fd;;
    font-size: 40px;
  &.active {
    color: White;
  }
  &:hover {
    color: #e6a1e4;}
`;
export const StyledNav = styled.div`
background-color: #7f16e4;
/* animation: color 9s infinite linear; */
display: flex;
height: 80px;
align-items: center;
justify-content: center;
gap: 40px;
padding-top: 16px;
padding-bottom: 16px;
box-shadow: rgba(0, 0, 0, 0.1) 2px 4px 12px;
/* border: 1px; */
border-bottom: 1px;
border-color: black;
`;