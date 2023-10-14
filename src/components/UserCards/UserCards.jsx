import {
  Avatar,
  AvatarWrapper,
  CardWrapper,
  FollowBox,
  //   FollowButton,
  MidleLine,
  Tweets,
  Ul,
} from './UserCards.styled.js';
// import avatar_1x from '../../assets/img/avatar@1x.png';
import { useEffect } from 'react';

import { useState } from 'react';
import { ButtonAddRemove } from 'components/FollowButton/FollowButton.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersCards } from 'redux/follow/operations.js';
import { selectUsers } from 'redux/follow/selector.js';
import { FollowCard } from 'components/FollowCard/FollowCard.jsx';

const UserCards = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchUsersCards(page));
    // const fetchData = async () => {
    //   try {
    //     const result = await fetchUsersCards(page);
    //     const newData = [...data, ...result];
    //     setData(newData);
    //     console.log('newData', newData);
    //   } catch (error) {
    //     // Обробка помилок, якщо необхідно
    //     console.error('Error fetching user cards:', error);
    //   }
    // };
    // fetchData();
  }, [page]);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const data = useSelector(selectUsers);

  return (
    <>
      <Ul>
        {data.map(item => (
          <CardWrapper key={item.id} item={item}>
<FollowCard/>

          </CardWrapper>
        ))}
      </Ul>
      <button type="button" onClick={handleLoadMore}>
        Load More
      </button>
    </>
  );
};
export default UserCards;
