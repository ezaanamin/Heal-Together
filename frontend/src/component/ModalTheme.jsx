import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {useEffect } from 'react';
import { useContext } from 'react';
import { UserContext } from '../Context/context';
import CloseIcon from '@mui/icons-material/Close';
import styled from 'styled-components';
import  {defaultTheme, calmingBlueTheme, sereneGreenTheme, relaxingPurpleTheme} from "../themes/themes"
export default function ModalThemeModal() {


  
  
    const {ColorTheme,SetColorTheme,theme, setTheme}=useContext(UserContext)

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
      theme === 'blue' ? calmingBlueTheme.palette.primary.main :
                theme === 'green' ? sereneGreenTheme.palette.primary.main :
                theme === 'purple' ? relaxingPurpleTheme.palette.primary.main :
                theme === 'light' ? defaultTheme.palette.primary.main
                :
                defaultTheme.palette.primary.main,
      
      
    };
    
    


useEffect(()=>{

},[theme])

    
  const handleClose = () => {
    SetColorTheme(false);
  };




const Button = styled.button`
  display: inline-block;
  padding: 10px;
  margin: 10px;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: #fff;
  border: none;
  border-radius: 50%; 
height:50px;
width:50px;
&:active {
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.5);
};
font-weight: bold;

`;

const LightButton=styled(Button)`

background-color:${defaultTheme.overrides.MuiButton.root.backgroundColor};

`
const LightButtonActive=styled(LightButton)`

box-shadow: 0 9px ${defaultTheme.palette.ButtonActive.backgroundColor};
`

const BlueButton = styled(Button)`
background-color:${calmingBlueTheme.overrides.MuiButton.root.backgroundColor};

`;

const BlueButtonActive=styled(BlueButton)`
  box-shadow: 0 9px ${calmingBlueTheme.palette.ButtonActive.backgroundColor};

`


const GreenButton = styled(Button)`
 background-color:${sereneGreenTheme.overrides.MuiButton.root.backgroundColor};

`;

const GreenButtonActive = styled(GreenButton)`
  box-shadow: 0 9px ${sereneGreenTheme.palette.ButtonActive.backgroundColor};
`;
const PurpleButton = styled(Button)`
background-color:${relaxingPurpleTheme.overrides.MuiButton.root.backgroundColor};

`;


const PurpleButtonActive=styled(PurpleButton)`

box-shadow: 0 9px ${relaxingPurpleTheme.palette.ButtonActive.backgroundColor};

`




const Text = styled.span`
  display: inline-block;
  vertical-align: middle;
  margin-left: 10px;
  font-size: 18px;
  color: #333;
  font-weight: bold;

`;

const GreenColor = styled(Text)`
color: ${sereneGreenTheme.palette.text.primary};
`;

const BlueColor = styled(Text)`
color: ${calmingBlueTheme.palette.text.primary};
`;

const LightColor = styled(Text)`
color: ${defaultTheme.palette.text.primary};
`;

const PurpleColor = styled(Text)`
color: ${relaxingPurpleTheme.palette.text.primary};
`;


const MainText =
  theme === 'light' ? LightColor :
  theme === 'blue' ? BlueColor :
  theme === 'green' ? GreenColor :
  theme === 'purple' ? PurpleColor :LightColor 

  const LightBackGround = styled.h1`
color: ${defaultTheme.palette.text.primary};

`;

const BlueBackGround = styled.h1`
color: ${calmingBlueTheme.palette.text.primary};

`;

const GreenBackGround = styled.h1`
 color: ${sereneGreenTheme.palette.text.primary};

`;
const PurpleBackGround = styled.h1`
  color:${relaxingPurpleTheme.palette.text.primary};
`;

  const Main =
  theme === 'light' ? LightBackGround :
  theme === 'blue' ? BlueBackGround :
  theme === 'green' ? GreenBackGround :
  theme === 'purple' ? PurpleBackGround :LightBackGround 

  useEffect(()=>{

    localStorage.setItem('theme',theme );

  },[theme])



  return (
    <div>
      <Modal
        open={ColorTheme}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      
      >
    
        <Box sx={{ ...style, width: 400 }}>
        <CloseIcon style={{fontSize:30}} onClick={handleClose}/>
<Main>Choose Your Calm Oasis</Main>

<hr/>
<MainText style={{width:400,marginTop:15}}  >Welcome to Heal Together - A Social Media Platform for Building Supportive Communities. We believe in providing a soothing and personalized experience for our users.</MainText>


{
  theme==='light'?<LightButtonActive/>:<LightButton onClick={()=>setTheme("light")}/>
}
<MainText>Light Theme: Experience the soothing ambience of our light theme, offering a sense of clarity and simplicity.</MainText>


{
  theme==='blue'?<BlueButtonActive/>:
  <BlueButton onClick={()=>setTheme("blue")}/>
}

      <MainText>Tranquil Tides: Dive into the calming blues, where serenity meets the horizon.</MainText>

      <br />

{
  theme==='green'?<GreenButtonActive/>:<GreenButton onClick={()=>setTheme("green")}/>
}
     
      <MainText>Harmony Haven: Embrace the serene greens, where nature's harmony awaits.</MainText>

      <br />
      {
        theme==='purple'?<PurpleButtonActive/>:<PurpleButton onClick={()=>setTheme("purple")}/>
      }


      <MainText>Peaceful Palette: Unwind with relaxing purples, painting a tranquil atmosphere.</MainText>
    

</Box>

  
      </Modal>
    </div>
  );
}
