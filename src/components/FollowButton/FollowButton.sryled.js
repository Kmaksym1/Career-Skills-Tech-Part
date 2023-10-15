import styled from "styled-components";

export const FollowButton = styled.button`
  
  width: 196px;
  padding: 14px 28px;
  justify-content: center;
  align-items: center;
  border-radius: 10.311px;
  
  background-color: ${props => props.color || "#ebd8ff"};
  
  box-shadow: 0px 3.43693px 3.43693px 0px rgba(0, 0, 0, 0.25);
  color: var(--landing-button-text-color, #373737);
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
  &:hover{
    background-color: yellow;
    
  }
`;