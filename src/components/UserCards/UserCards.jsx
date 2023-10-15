import {
  CardWrapper,
  Ul,
} from './UserCards.styled.js';
// import avatar_1x from '../../assets/img/avatar@1x.png';
import { useEffect } from 'react';

import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersCards } from 'redux/follow/operations.js';
import { selectUsers } from 'redux/follow/selector.js';
import { FollowCard } from 'components/FollowCard/FollowCard.jsx';
import DropDownMenu from 'components/DropDownMenu/dropDownMenu.jsx';



export const UserCards = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  // const [data, setData] = useState(useSelector(selectUsers));

  let data = useSelector(selectUsers);

  
  const filteredData = (option) => {
    console.log('option', option)
    console.log('data',data)
    // if (!option) {
    //   return
    // }
    return data.filter((user) => user.isFollow === option)
    
  }
  useEffect(() => {
    // if (data.length === page*3) {
    //   return
    // }
    
    dispatch(fetchUsersCards(page));
    
  }, [page, dispatch]);


  const handleLoadMore = () => {
    // data.slice()
    setPage(page + 1);
  };

  return (
    <>
      
      <Ul>
        {data.map(item => (
          <CardWrapper key={item.id}>
            <FollowCard item={item} />
          </CardWrapper>
        ))}
      </Ul>
      <DropDownMenu filter={ filteredData} />
      <button type="button" onClick={handleLoadMore}>
        Load More
      </button>
    </>
  );
};
