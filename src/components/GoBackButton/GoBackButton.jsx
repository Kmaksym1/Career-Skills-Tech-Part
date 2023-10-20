import { HiArrowLeft } from "react-icons/hi";
import { StyledLink } from "./BackLink.styled";

export const GoBackButton = ({ backLinkHref, children }) => {
    return (
      <StyledLink to={backLinkHref.current}>
        <HiArrowLeft size="20" />
        {children}
      </StyledLink>
    );
  };