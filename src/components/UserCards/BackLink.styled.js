import { HiArrowLeft } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  display: flex;
  gap: 10px;
  width: 196px;
  height: 60px;
  padding: 14px 28px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: ${props => props.color || '#ebd8ff'};
  box-shadow: 0px 3.43693px 3.43693px 0px rgba(0, 0, 0, 0.25);
  color: var(--landing-button-text-color, #373737);
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
  &:hover {
    background-color: #8376da;
    transform: translateY(-1px);
    transition: all 500ms cubic-bezier(0.23, 1, 0.32, 1);
  }
`;

export const BackLink = ({ backLinkHref, children }) => {
  return (
    <StyledLink to={backLinkHref.current}>
      <HiArrowLeft size="30" />
      {children}
    </StyledLink>
  );
};
