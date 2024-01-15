import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useContext } from 'react';
import { UserContext } from '../contextState/contextState';
import  {TranquilTealTheme, calmingBlueTheme, sereneGreenTheme, relaxingPurpleTheme} from "../themes/themes"
import CardFlip from './CardFlip';
import { useEffect } from 'react';
import { ThemeModalHeading,getStyle } from '../styles/styles';
import { ButtonModalTheme,CenteredContainerButton } from '../styles/styles';
export default function ModalThemeModal() {
  const userContext = useContext(UserContext);
  const { setTheme, SetColorTheme,   isFlippedcalmingBlueTheme,
    setFlippedcalmingBlueTheme,
    isFlippedrelaxingPurpleTheme,
    setFlippedrelaxingPurpleTheme,
    isFlippedsereneGreenTheme,
    setFlippedsereneGreenTheme,
    isFlippedTranquilTealTheme,
    setFlippedTranquilTealTheme, SetCurrentTheme} = userContext;

    
    const style = getStyle(userContext.theme);
 

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
    } else if (isFlippedTranquilTealTheme) {
        setTheme("default");
    }
}, [
    isFlippedcalmingBlueTheme,
    setFlippedcalmingBlueTheme,
    isFlippedrelaxingPurpleTheme,
    setFlippedrelaxingPurpleTheme,
    isFlippedsereneGreenTheme,
    setFlippedsereneGreenTheme,
    isFlippedTranquilTealTheme,
    setFlippedTranquilTealTheme,
    setTheme,
    SetCurrentTheme
]);

  useEffect(() => {
    localStorage.setItem('theme', userContext.theme);
  }, [userContext.theme]);

  useEffect(() => {

    if (userContext.theme === "blue") {
      setFlippedcalmingBlueTheme(true);
    } else if (userContext.theme === "purple") {
      setFlippedrelaxingPurpleTheme(true);
    } else if (userContext.theme === "green") {
      setFlippedsereneGreenTheme(true);
    } else if (userContext.theme === "default") {
      setFlippedTranquilTealTheme(true);
    }
  
  }, []); 
  
  
  return (
    <div>
      <Modal
        open={userContext.ColorTheme}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 700 }}>
         <ThemeModalHeading> Harmony Palette: Choose Your Healing Theme</ThemeModalHeading>
          <div style={{ display: 'flex', gap: '16px' }}>
  <CardFlip
    cardtheme="blue"
    isFlipped={isFlippedcalmingBlueTheme}
    setFlipped={setFlippedcalmingBlueTheme}
    flippedBackgroundColor="#ff5733"
    frontBackgroundColor={calmingBlueTheme.palette.primary.main}
    backImage="http://localhost:4000/upload/calmingBlueTheme.jpg"
    is3D={true}
  >
    Calming Blue Theme
  </CardFlip>

  <CardFlip
    cardtheme="purple"
    isFlipped={isFlippedrelaxingPurpleTheme}
    setFlipped={setFlippedrelaxingPurpleTheme}
    flippedBackgroundColor="#ff5733"
    frontBackgroundColor={relaxingPurpleTheme.palette.primary.main}
    backImage="http://localhost:4000/upload/relaxingPurpleTheme.jpg"
    is3D={true}
  >
    Relaxing Purple Theme
  </CardFlip>

  <CardFlip
    cardtheme="green"
    isFlipped={isFlippedsereneGreenTheme}
    setFlipped={setFlippedsereneGreenTheme}
    flippedBackgroundColor="#ff5733"
    frontBackgroundColor={sereneGreenTheme.palette.primary.main}
    backImage="http://localhost:4000/upload/sereneGreenTheme.jpg"
    is3D={true}
  >
    Serene Green Theme
  </CardFlip>
  
  <CardFlip
    cardtheme="default"
    isFlipped={isFlippedTranquilTealTheme}
    setFlipped={setFlippedTranquilTealTheme}
    flippedBackgroundColor="#ff5733"
    frontBackgroundColor={TranquilTealTheme.palette.primary.main}
    backImage="http://localhost:4000/upload/LightTheme.jpg"
    is3D={true}
  >
  Tranquil Teal Theme
  </CardFlip>


</div>
<CenteredContainerButton>
  <ButtonModalTheme onClick={()=>handleClose()} theme={userContext.theme}>Apply Healing Palette</ButtonModalTheme>
</CenteredContainerButton>
        </Box>
      </Modal>
    </div>
  );
   

}
