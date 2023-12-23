import React, { useContext, useEffect, useState } from 'react';
import { cardStyle, cardWrapperStyle, cardFaceStyle } from '../styles/styles';
import { UserContext } from '../contextState/contextState';

function CardFlip(props) {
  const { isFlipped, setFlipped } = props;
  const userContext = useContext(UserContext);
  const {setTheme, setFlippedrelaxingPurpleTheme,
    setFlippedsereneGreenTheme,
    setFlippedTranquilTealTheme,setFlippedcalmingBlueTheme} = userContext;
 

  useEffect(()=>{
  console.log(userContext.theme)

  },[userContext.theme])
  const handleCardFlip = () => {

    console.log(props.cardtheme,userContext.theme,'ezaan ')
    if (props.cardtheme === "blue") {
      setFlippedsereneGreenTheme(false);
      setFlippedrelaxingPurpleTheme(false);
      setFlippedTranquilTealTheme(false);
    } else if (props.cardtheme === "purple") {
      setFlippedcalmingBlueTheme(false);
      setFlippedsereneGreenTheme(false);
      setFlippedTranquilTealTheme(false);
    } else if (props.cardtheme === "green") {
      setFlippedcalmingBlueTheme(false);
      setFlippedrelaxingPurpleTheme(false);
      setFlippedTranquilTealTheme(false);
    } else if (props.cardtheme === "default") {
      setFlippedcalmingBlueTheme(false);
      setFlippedrelaxingPurpleTheme(false);
      setFlippedsereneGreenTheme(false);
    }
    if (props.cardtheme !==userContext.theme ) {
    
      setTheme(props.cardtheme )
      setFlipped(!isFlipped);
    }
  };

  const wrapperStyle = cardWrapperStyle(isFlipped);
  const faceStyle = cardFaceStyle({
    isFlipped,
    flippedBackgroundColor: props.flippedBackgroundColor,
    frontBackgroundColor: props.frontBackgroundColor,
    backImage: props.backImage,
    is3D: true,
  });

  return (
    <div style={cardStyle} onClick={handleCardFlip}>
      <div style={wrapperStyle}>
        <div style={faceStyle}>{props.children}</div>
      </div>
    </div>
  );
}

export default CardFlip;
