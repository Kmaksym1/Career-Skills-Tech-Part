import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  display: flex;
  gap: 10px;
  width: 140px;
  height: 30px;
  padding: 14px 10px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: ${props => props.color || '#ebd8ff'};
  box-shadow: 0px 3.43693px 3.43693px 0px rgba(0, 0, 0, 0.25);
  color: var(--landing-button-text-color, #373737);
  font-family: Montserrat;




  
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;

  &:hover {
    background-color: #8376da;
    transform: translateY(-1px);
    transition: all 500ms cubic-bezier(0.23, 1, 0.32, 1);
  }
  @media (max-width: 1280px) {
margin-left: 10px;
  
  }
  @media (min-width: 1280px) {
    font-size: 18px;
  font-weight: 600;
  width: 196px;
  height: 60px;
  padding: 14px 28px;
  }


`;


