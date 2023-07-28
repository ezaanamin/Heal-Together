import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {useEffect } from 'react';
import { useContext } from 'react';
import { UserContext } from '../Context/context';
import CloseIcon from '@mui/icons-material/Close';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';







export default function ModalThemeModal() {
  const nav=useNavigate()


  
  
    const {currentTheme,SetCurrentTheme,ColorTheme,SetColorTheme,theme, setTheme}=useContext(UserContext)

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
      backgroundColor: theme === 'light' ? '#CCCCCC' :
      theme === 'blue' ? '#5c8fbf' :
      theme === 'green' ? '#7dbf6b' :
      theme === 'purple' ? '#f2e8f5' : '#CCCCCC',
      
      
    };
    
    


useEffect(()=>{

},[theme])

    
  const handleClose = () => {
    SetColorTheme(false);
  };



const PurpleBackGround = styled.h1`
  color:  #333333;
`;

const LightMainContainer = styled.div`
background-color: #CCCCCC;
`;

const BlueMainContainer = styled.div`
background-color: #5c8fbf;
`;

const GreenMainContainer = styled.div`
background-color: #7dbf6b;
`;

const PurpleMainContainer = styled`
background-color: #f2e8f5;
`;

const IconHeading = styled.p`
margin-left: 10px;
`;




const ParModal=styled.p`
width: 400px;
margin-top:15px;

`
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
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.5); /* Updated box-shadow for active state */
};
font-weight: bold;

`;

const LightButton=styled(Button)`

background-color:  #CCCCCC;

`
const LightButtonActive=styled(LightButton)`

box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Add your desired box shadow values here */

`

const BlueButton = styled(Button)`
  background-color: #008CBA;
`;

const BlueButtonActive=styled(BlueButton)`
box-shadow: 0 9px #005f7f; 

`


const GreenButton = styled(Button)`
  background-color: #4CAF50;
`;

const GreenButtonActive=styled(GreenButton)`
box-shadow: 0 9px #387d3a; /* Updated box-shadow for green button */

`
const PurpleButton = styled(Button)`
  background-color: #800080;
`;


const PurpleButtonActive=styled(PurpleButton)`

box-shadow: 0 9px #5c005c; /* Updated box-shadow for purple button */

`




const Text = styled.span`
  display: inline-block;
  vertical-align: middle;
  margin-left: 10px;
  font-size: 18px;
  color: #333;
  font-weight: bold;

`;

const GreenColor=styled(Text)`

color:#FFFFFF

`
const BlueColor=styled(Text)`
color:#FFFFFF


`
const LightColor=styled(Text)`

color:#333333

`
const PurpleColor=styled(Text)`
color:#333333



`

const MainText =
  theme === 'light' ? LightColor :
  theme === 'blue' ? BlueColor :
  theme === 'green' ? GreenColor :
  theme === 'purple' ? PurpleColor :LightColor 

  const LightBackGround = styled.h1`
  color: #333333;
`;

const BlueBackGround = styled.h1`
  color: #FFFFFF;
`;

const GreenBackGround = styled.h1`
  color: #FFFFFF;
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
  theme=='light'?<LightButtonActive/>:<LightButton onClick={()=>setTheme("light")}/>
}
<MainText>Light Theme: Experience the soothing ambience of our light theme, offering a sense of clarity and simplicity.</MainText>


{
  theme=='blue'?<BlueButtonActive/>:
  <BlueButton onClick={()=>setTheme("blue")}/>
}

      <MainText>Tranquil Tides: Dive into the calming blues, where serenity meets the horizon.</MainText>

      <br />

{
  theme=='green'?<GreenButtonActive/>:<GreenButton onClick={()=>setTheme("green")}/>
}
     
      <MainText>Harmony Haven: Embrace the serene greens, where nature's harmony awaits.</MainText>

      <br />
      {
        theme=='purple'?<PurpleButtonActive/>:<PurpleButton onClick={()=>setTheme("purple")}/>
      }


      <MainText>Peaceful Palette: Unwind with relaxing purples, painting a tranquil atmosphere.</MainText>
    

</Box>

  
      </Modal>
    </div>
  );
}
