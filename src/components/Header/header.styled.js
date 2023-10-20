import { styled } from "styled-components";
import { NavLink } from 'react-router-dom';
export const StyledLink = styled(NavLink)`
    padding-left: 1px;
    padding-right: 1px;
    text-decoration: none;
    color: #ab71fd;;
    font-size: 20px;
  &.active {
    color: White;
  }
  &:hover {
    color: #e6a1e4;}
    @media (min-width: 1280px) {
        font-size: 40px;
  
  }
`;
export const StyledNav = styled.div`
background-color: #7f16e4;
/* animation: color 9s infinite linear; */
display: flex;
height: 50px;
align-items: center;
justify-content: center;
gap: 40px;
padding-top: 16px;
padding-bottom: 16px;
box-shadow: rgba(0, 0, 0, 0.1) 2px 4px 12px;
border-bottom: 1px;
border-color: black;
@media (min-width: 1280px) {
    height: 80px;
  
  }
`;