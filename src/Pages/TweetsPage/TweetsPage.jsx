import { Container } from 'components/GlobalStyled/container.styled';
import { BackLink } from 'components/UserCards/BackLink.styled';
import { UserCards } from 'components/UserCards/UserCards';
import { useRef } from 'react';

import { useLocation } from 'react-router-dom';

export const TweetsPage = () => {
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  return (
    <section>
      <Container>
        <BackLink backLinkHref={backLinkHref}> Go Back</BackLink>
        <UserCards></UserCards>
      </Container>
    </section>
  );
};
