
import { Container } from 'components/GlobalStyled/container.styled';
import { BackLink } from 'components/UserCards/BackLink.styled';
import { UserCards } from 'components/UserCards/UserCards';
import { useRef } from 'react';
// import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
// import { clearUser } from 'redux/follow/slice';

export const TweetsPage = () => {
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');
  //   const dispatch = useDispatch();

  return (
    <section>
      <Container>
       
       
              <button
          type="button"
          onClick={() => {
            // clearUser();
          }}
        >
          <BackLink backLinkHref={backLinkHref}> Go Back</BackLink>
        </button>
        
              <UserCards></UserCards>
              {/* <DropDownMenu/> */}
      </Container>
    </section>
  );
};
