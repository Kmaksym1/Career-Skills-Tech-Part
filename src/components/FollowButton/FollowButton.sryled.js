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
    background-color: #8376da;;
    transform: translateY(-1px);
    transition: all 500ms cubic-bezier(.23, 1, 0.32, 1);
  }
`;


// <!-- HTML !-->
// <button class="button-27" role="button">Button 27</button>

// /* CSS */
// .button-27 {
//   appearance: none;
//   background-color: #000000;
//   border: 2px solid #1A1A1A;
//   border-radius: 15px;
//   box-sizing: border-box;
//   color: #FFFFFF;
//   cursor: pointer;
//   display: inline-block;
//   font-family: Roobert,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
//   font-size: 16px;
//   font-weight: 600;
//   line-height: normal;
//   margin: 0;
//   min-height: 60px;
//   min-width: 0;
//   outline: none;
//   padding: 16px 24px;
//   text-align: center;
//   text-decoration: none;
//   transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
//   user-select: none;
//   -webkit-user-select: none;
//   touch-action: manipulation;
//   width: 100%;
//   will-change: transform;
// }

// .button-27:disabled {
//   pointer-events: none;
// }

// .button-27:hover {
//   box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
//   transform: translateY(-2px);
// }

// .button-27:active {
//   box-shadow: none;
//   transform: translateY(0);
// }