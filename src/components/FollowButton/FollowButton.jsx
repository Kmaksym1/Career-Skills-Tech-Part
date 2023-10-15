
import { useDispatch } from 'react-redux';
import { addToFollow } from 'redux/follow/operations';
import { FollowButton } from './FollowButton.sryled';

export const ButtonAddRemove = ({ id, isFollow, followers }) => {


const dispatch = useDispatch();
  const handleFollow = async () => {
      dispatch(addToFollow({ id, isFollow, followers }));
    };

  return (
    <>
      {!isFollow ? (
        <>
          <FollowButton
            type="button"
            onClick={
              () => handleFollow()
              // .then(() => notifyAdd())
            }
          >
            FOLLOW
          </FollowButton>
        </>
      ) : (
        <>
            <FollowButton
              type="button"
              onClick={() => handleFollow()}
              color="#5CD3A8">
            FOLLOWING
          </FollowButton>
        </>
      )}
    </>
  );
};
