const { ButtonAddRemove } = require("components/FollowButton/FollowButton")
const { AvatarWrapper, Avatar, MidleLine, FollowBox, Tweets } = require("components/UserCards/UserCards.styled")

export const FollowCard = ({avatar, id, user, tweets, followers, isFollow}) => {
    
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
    <Tweets>{followers} Followers</Tweets>
    
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