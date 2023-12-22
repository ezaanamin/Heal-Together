import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useContext } from 'react';
import { UserContext } from '../contextState/contextState';
import CloseIcon from '@mui/icons-material/Close';
import  {defaultTheme, calmingBlueTheme, sereneGreenTheme, relaxingPurpleTheme} from "../themes/themes"
import CardFlip from './CardFlip';
import { useState } from 'react';
import { useEffect } from 'react';
import { purple } from '@mui/material/colors';
export default function ModalThemeModal() {
  const userContext = useContext(UserContext);
  const { setTheme, SetColorTheme,   isFlippedcalmingBlueTheme,
    setFlippedcalmingBlueTheme,
    isFlippedrelaxingPurpleTheme,
    setFlippedrelaxingPurpleTheme,
    isFlippedsereneGreenTheme,
    setFlippedsereneGreenTheme,
    isFlippedDefaultTheme,
    setFlippedDefaultTheme,currentTheme, SetCurrentTheme} = userContext;

    

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
    backgroundColor:
      userContext.theme === 'blue'
        ? calmingBlueTheme.palette.primary.main
        : userContext.theme === 'green'
        ? sereneGreenTheme.palette.primary.main
        : userContext.theme === 'purple'
        ? relaxingPurpleTheme.palette.primary.main
        : defaultTheme.palette.primary.main,
  };

  const handleClose = () => {
    SetColorTheme(false);
  };

  useEffect(() => {
    console.log("Inside useEffect");

    if (isFlippedcalmingBlueTheme) {
        setTheme("blue");
      
    } else if (isFlippedrelaxingPurpleTheme) {
        setTheme("purple");
    } else if (isFlippedsereneGreenTheme) {
        setTheme("green");
    } else if (isFlippedDefaultTheme) {
        setTheme("default");
    }
}, [
    isFlippedcalmingBlueTheme,
    setFlippedcalmingBlueTheme,
    isFlippedrelaxingPurpleTheme,
    setFlippedrelaxingPurpleTheme,
    isFlippedsereneGreenTheme,
    setFlippedsereneGreenTheme,
    isFlippedDefaultTheme,
    setFlippedDefaultTheme,
    setTheme,
    SetCurrentTheme
]);

  useEffect(() => {
    localStorage.setItem('theme', userContext.theme);
  }, [userContext.theme]);

  return (
    <div>
      <Modal
        open={userContext.ColorTheme}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <CloseIcon style={{ fontSize: 30 }} onClick={handleClose} />
          <CardFlip
         cardtheme="blue"
            isFlipped={isFlippedcalmingBlueTheme}
            setFlipped={setFlippedcalmingBlueTheme}
            flippedBackgroundColor="#ff5733"
            frontBackgroundColor="#008080"
            backImage="https://via.placeholder.com/200x300"
            is3D={true}
          >
            Custom Content Here
          </CardFlip>

          <CardFlip
                cardtheme="purple"

            isFlipped={isFlippedrelaxingPurpleTheme}
            setFlipped={setFlippedrelaxingPurpleTheme}
            flippedBackgroundColor="#ff5733"
            frontBackgroundColor="#008080"
            backImage="https://via.placeholder.com/200x300"
            is3D={true}
          >
            Custom Content Here
          </CardFlip>

          <CardFlip
                  cardtheme="green"

            isFlipped={isFlippedsereneGreenTheme}
            setFlipped={setFlippedsereneGreenTheme}
            flippedBackgroundColor="#ff5733"
            frontBackgroundColor="#008080"
            backImage="https://via.placeholder.com/200x300"
            is3D={true}
          >
            Custom Content Here
          </CardFlip>

          <CardFlip
                  cardtheme="default"

            isFlipped={isFlippedDefaultTheme}
            setFlipped={setFlippedDefaultTheme}
            flippedBackgroundColor="#ff5733"
            frontBackgroundColor="#008080"
            backImage="https://via.placeholder.com/200x300"
            is3D={true}
          >
            Custom Content Here
          </CardFlip>
     
        </Box>
      </Modal>
    </div>
  );
   

}
