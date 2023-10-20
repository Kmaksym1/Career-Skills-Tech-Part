import {
  ButtonLoadMore,
  CardWrapper,
  Ul,
} from './UserCards.styled.js';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersCards } from 'redux/follow/operations.js';
import { selectIsLoading, selectUsers } from 'redux/follow/selector.js';
import { FollowCard } from 'components/FollowCard/FollowCard.jsx';
import DropDownMenu from 'components/DropDownMenu/dropDownMenu.jsx';
import { Loader } from 'components/Loader/Loader.jsx';


export const UserCards = () => {
  const Loading = useSelector(selectIsLoading)
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [fil, setfil] = useState('showall');
  const data = useSelector(selectUsers);
  let pagination = page * 3;
  let cutedData = data.slice(0, pagination)
  
  const filteredData = (option) => {
      setfil(option)
  }
  const newData = cutedData.filter((user) => {
    if (fil === "showall") {
      return user
      }
    return user.isFollow === fil
  })
  
  useEffect(() => {    
    dispatch(fetchUsersCards());
  }, [page, dispatch]);


  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <div style={ {
      display: "flex",
      flexWrap: "wrap",
    }}>
      {Loading && <Loader />}
      <DropDownMenu filter={ filteredData} />
      <Ul>
      
        {newData.map(item => (
          <CardWrapper key={item.id}>
            <FollowCard item={item} />
          </CardWrapper>
        ))}
      </Ul>
      
      <ButtonLoadMore type="button" onClick={handleLoadMore}>
        Load More
      </ButtonLoadMore>
    </div>
  );
};
