import styled from 'styled-components';
import bgImg1x from '../../assets/img/imgBg@1x.png';
import bgImg2x from '../../assets/img/imgBg@2x.png';
import logo1x from '../../assets/img/logo@1x.png';
import logo2x from '../../assets/img/logo@2x.png';

export const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

export const CardWrapper = styled.li`
  position: relative;
  z-index: 10;
  padding-top: 175px;
  padding-bottom: 36px;
  width: 375px;
  height: 460px;

  border-radius: 20px;

  box-shadow: -2.5777px 6.87386px 20.62157px 0px rgba(0, 0, 0, 0.23);
  background-image: url(${logo1x}), url(${bgImg1x}),
    linear-gradient(115deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);

  background-position: left 20px top 20px, left 36px top 28px, right top;
  background-size: 76px 22px, 308px 168px, cover;
  flex-shrink: 0;
  background-repeat: no-repeat;
  @media (max-width: 375px) {
    width: 355px;
  }
  @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
    background-image: url(${logo2x}), url(${bgImg2x}),
      linear-gradient(115deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);

    background-position: left 20px top 20px, left 36px top 28px, right top;
    background-size: 76px 22px, 308px 168px, cover;
    flex-shrink: 0;
    background-repeat: no-repeat;
  }
`;

export const UserName = styled.h2`
  margin-top: 26px;
`;

export const ButtonLoadMore = styled.button`
  margin-top: 40px;
  width: 196px;
  height: 60px;
  padding: 14px 28px;
  justify-content: center;
  align-items: center;
  align-self:  center;
  border-radius: 10px;
  background-color: ${props => props.color || "#ebd8ff"};
  box-shadow: 0px 3.43693px 3.43693px 0px rgba(0, 0, 0, 0.25);
  color: var(--landing-button-text-color, #373737);
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
  &:hover{
    background-color: #8376da;;
    transform: translateY(-1px);
    transition: all 500ms cubic-bezier(.23, 1, 0.32, 1);
  }
  @media (max-width: 375px) {
    width: 140px;
  height: 30px;
  padding: 0px 10px;
  font-size: 18px;
  font-weight: 400;
  margin-left: 117.5px;
  }
  
`;
