import { StyledLink, StyledNav } from "./header.styled"

export const Header = () => {
    return (
        <StyledNav>
        <StyledLink aria-current="page" to="/">
          HOME
        </StyledLink>
        <StyledLink to="/tweets">TWEETS</StyledLink>
      </StyledNav>
    )
}