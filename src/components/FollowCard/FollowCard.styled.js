import styled from "styled-components";
import BorderImg from '../../assets/svg/BorderImg.jsx';

export const AvatarWrapper = styled.div`
  overflow: hidden;
 margin-left: auto;
 margin-right: auto;
 position: relative;
  border: 8px solid rgba(235, 216, 255, 1);
  border-radius: 50%;
  width: 90px;
  height: 90px;
  fill: #ebd8ff;
  box-shadow: 0px 4.39163px 3.29372px 0px #fbf8ff inset,
    0px -2.19582px 4.39163px 0px #ae7be3 inset;
  filter: drop-shadow(
    0px 4.391631126403809px 4.391631126403809px rgba(0, 0, 0, 0.06)
  );
  z-index: 5000;
  margin-bottom: 26px;
`;
export const BorderAvatar = styled(BorderImg)`
  position: absolute;
`;
export const Avatar = styled.img`

  position: relative;
  z-index: 5000;
  
`;

export const MidleLine = styled.div`
z-index: 1;
position: absolute;
top: 214px;   
  width: 380px;
  height: 8px;
  flex-shrink: 0;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 2.5777px 0px #fbf8ff inset,
    0px 3.43693px 3.43693px 0px rgba(0, 0, 0, 0.06),
    0px -1.71846px 3.43693px 0px #ae7be3 inset;
`;

export const FollowBox = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
gap: 10px;
`

export const Tweets = styled.p`
  color: #ebd8ff;
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
`;
