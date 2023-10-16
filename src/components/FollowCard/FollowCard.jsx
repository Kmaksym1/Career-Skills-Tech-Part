import { ButtonAddRemove } from "components/FollowButton/FollowButton";
import { Avatar, AvatarWrapper, FollowBox, MidleLine, Tweets } from "./FollowCard.styled";




export const FollowCard = ({item}) => {
    const { avatar, id, user, tweets, followers, isFollow } = item;
    let formattedFollowers = followers.toLocaleString('en-US');
    return (
        <>
         <AvatarWrapper>
    <Avatar
      src={avatar}
      alt={user}
      id={id}
      width={'80px'}
      height={'80px'}
    />
  </AvatarWrapper>
  <MidleLine></MidleLine>
  <FollowBox>
    
    <Tweets>{tweets} tweets</Tweets>
    <Tweets>{formattedFollowers} Followers</Tweets>
    
    <ButtonAddRemove
      id={id}
      isFollow={isFollow}
      followers={followers}
    >
    </ButtonAddRemove>
  </FollowBox>
        </>
    ) 
}