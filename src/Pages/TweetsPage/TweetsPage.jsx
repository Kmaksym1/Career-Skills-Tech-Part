import { Container } from 'components/GlobalStyled/container.styled';
import { GoBackButton } from 'components/GoBackButton/GoBackButton';
import { UserCards } from 'components/UserCards/UserCards';
import { ButtonLoadMore } from 'components/UserCards/UserCards.styled';
import { useRef } from 'react';

import { useLocation } from 'react-router-dom';

export const TweetsPage = () => {
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');
  const handleLoadMoreClick = () => {
    // You can perform additional actions here if needed
    // ...

    // Call the handleLoadMore function in the UserCards component
    userCardsRef.current.handleLoadMore();
  };
  const userCardsRef = useRef();
  return (
    <section>
      <Container>
        <GoBackButton backLinkHref={backLinkHref}> Go Back</GoBackButton>
              <UserCards ref={userCardsRef}/>
              <ButtonLoadMore type="button"
                 onClick={handleLoadMoreClick}
              >
        Load More
      </ButtonLoadMore>
      </Container>
    </section>
  );
};
