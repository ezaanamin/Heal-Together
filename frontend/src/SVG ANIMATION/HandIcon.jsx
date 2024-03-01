import React, { useState } from 'react';
import BlueHand from './BlueHand';
import GreenHand from './GreenHand';
import PurpleHand from './PurpleHand';
import MainHand from './Main';
import BlueHandAnimation from './BlueHandAnimation';
import GreenHandAnimation from './GreenHandAnimation';
import PurpleHandAnimation from './PurpleHandAnimation';
import MainHandAnimation from './MainHandAnimation';

const themeComponents = {
  blue: { icon: BlueHand, animation: BlueHandAnimation },
  green: { icon: GreenHand, animation: GreenHandAnimation },
  purple: { icon: PurpleHand, animation: PurpleHandAnimation },
  default: { icon: MainHand, animation: MainHandAnimation },
};

function HandIcon({ theme,liked }) {
  const [hi, setHi] = useState(false);

  const handleClick = () => {
    setHi(!liked);
  };

  const { icon: Icon, animation: Animation } = themeComponents[theme] || themeComponents.default;

  return (
    <>
      <div onClick={handleClick}>
        {liked ? <Animation /> : <Icon />}
      </div>
    </>
  );
}

export default HandIcon;
