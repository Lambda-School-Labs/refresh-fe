import React from 'react';
import styled from 'styled-components';
import {deviceType} from '../profileViews/ResponsiveMedia';
//import ActivityBadge from '../../images/badges/activity_badge.svg'


const BadgeContainer = styled.div`
width: 100%;
margin-bottom: auto;
display: flex;
flex-flow: row nowrap;
justify-content: space-between;
align-items: center;

@media ${deviceType.smallMobile}{
  max-width: 100%;
  
}
@media ${deviceType.mediumMobile}{
  max-width: 100%;
  
}
@media ${deviceType.largeMobile} {
  max-width: 100%;
  
}

` 
const BadgeText = styled.text`
position: absolute;
padding-left: 3%;
width: 20%;
height: 15px;
left: 18.5%;
top: 37.2%;

font-family: Catamaran;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 93.19%;
/* identical to box height, or 15px */

display: flex;
align-items: center;
letter-spacing: 0.07em;

/* main / menu text */

color: #B8B7E1;
`
const ViewAllText = styled.text `
position: absolute;
width: 10%;
height: 2%;
padding-left: 2%;
left: 71.7%;
top: 237px;

font-family: Catamaran;
font-style: normal;
font-weight: 500;
font-size: 10px;
line-height: 93.19%;
/* or 9px */

display: flex;
align-items: center;
letter-spacing: 0.04em;

/* main / menu text */

color: #B8B7E1;
`

const WaterBadge = styled.div`
left: 19%;
top: 258px;
position: absolute;
width: 55px;
height: 31.75px;
background-color: #1575FF;
margin: 15.88px 0;


:before,
:after {
  content: "";
  position: absolute;
  width: 0;
  border-left: 27.5px solid transparent;
  border-right: 27.5px solid transparent;
}

 :before {
  bottom: 100%;
  border-bottom: 15.88px solid #1575FF;
}

:after {
  top: 100%;
  width: 0;
  border-top: 15.88px solid #1575FF;
}
`
const FoodBadge = styled.div`
position: absolute;
left: 34.8%;
top: 258px;
width: 55px;
height: 31.75px;
background-color: #27AE60;
margin: 15.88px 0;

:before,
:after {
  content: "";
  position: absolute;
  width: 0;
  border-left: 27.5px solid transparent;
  border-right: 27.5px solid transparent;
}

 :before {
  bottom: 100%;
  border-bottom: 15.88px solid #27AE60;
}

:after {
  top: 100%;
  width: 0;
  border-top: 15.88px solid #27AE60;
}
`

const ActivitySVG = styled.div`
position: absolute;
left: 51.9%;
top: 258px;
width: 55px;
height: 31.75px;
background-color: #FC5454;
margin: 15.88px 0;

:before,
:after {
  content: "";
  position: absolute;
  width: 0;
  border-left: 27.5px solid transparent;
  border-right: 27.5px solid transparent;
}

 :before {
  bottom: 100%;
  border-bottom: 15.88px solid #FC5454;
}

:after {
  top: 100%;
  width: 0;
  border-top: 15.88px solid #FC5454;
}

`
const PetsBadge = styled.div`
position: absolute;
left: 68%;
top: 258px;
width: 55px;
height: 31.75px;
background-color: #9B51E0;
margin: 15.88px 0;


:before,
:after {
  content: "";
  position: absolute;
  width: 0;
  border-left: 27.5px solid transparent;
  border-right: 27.5px solid transparent;
}

 :before {
  bottom: 100%;
  border-bottom: 15.88px solid #9B51E0;
}

:after {
  top: 100%;
  width: 0;
  border-top: 15.88px solid #9B51E0;
}

`
const PartialBadge = styled.div`
position: absolute;
left: 84%;
top: 258px;
width: 55px;
height: 31.75px;
background-color: #FC54EB;
margin: 15.88px 0;


:before,
:after {
  content: "";
  position: absolute;
  width: 0;
  border-left: 27.5px solid transparent;
  border-right: 27.5px solid transparent;
}

 :before {
  bottom: 100%;
  border-bottom: 15.88px solid #FC54EB;
}

:after {
  top: 100%;
  width: 0;
  border-top: 15.88px solid #FC54EB;
}

`


const ProfileBadges = () => {
  return (
    <>
  
    <BadgeText>BADGES</BadgeText>
      <ViewAllText>view all</ViewAllText>
      <BadgeContainer>
      <WaterBadge/>
      <FoodBadge/>
      <ActivitySVG/>
      <PetsBadge/>
      </BadgeContainer>
      <PartialBadge/>
      
    </>
  )
};

export default ProfileBadges;