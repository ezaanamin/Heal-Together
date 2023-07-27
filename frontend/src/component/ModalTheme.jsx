import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { useState,useEffect } from 'react';
import { useContext } from 'react';
import { UserContext } from '../Context/context';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';

import styled from 'styled-components';
import DateDropdown from './DateDropDown';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import * as yup from 'yup';
import { Formik } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { SignUpPost } from '../redux/slice/API';
import { useSelector, useDispatch } from 'react-redux';



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
};




export default function ModalThemeModal() {
  const nav=useNavigate()


  
  
    const {currentTheme,SetCurrentTheme,ColorTheme,SetColorTheme,theme, setTheme}=useContext(UserContext)

useEffect(()=>{

},[theme])

    
  const handleClose = () => {
    SetColorTheme(false);
  };

  const LightMainContainer = styled.h1`
  color: #CCCCCC;
`;

const BlueMainContainer = styled.h1`
  color: #5c8fbf;
`;

const GreenMainContainer = styled.h1`
  color: #7dbf6b;
`;

const PurpleMainContainer = styled.h1`
  color: #8a5fbf;
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
}

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
`;

const SaveButton = styled.button`
background-color: #4caf50; /* Green background color */
color: white; /* Text color */
padding: 10px 20px; /* Padding around the text */
border: none; /* Remove default border */
border-radius: 4px; /* Rounded corners */
cursor: pointer; /* Show pointer cursor on hover */
margin-left: auto; /* Right align the button within its container */

margin-top:20px;
position: relative;
left:352px;
`;


const BlueButtonSave = styled(SaveButton)`
  background-color: #008CBA;
`;
const GreenButtonSave = styled(SaveButton)`
  background-color: #4CAF50;
`;
const PurpleButtonSave = styled(SaveButton)`
  background-color: #800080;
`;
const LightButtonSave=styled(SaveButton)`

background-color:  #CCCCCC;
`

const MainContainer =
  theme === 'light' ? LightMainContainer :
  theme === 'blue' ? BlueMainContainer :
  theme === 'green' ? GreenMainContainer :
  theme === 'purple' ? PurpleMainContainer :LightMainContainer 


  const SaveButtonMain =
  theme === 'light' ? LightButtonSave :
  theme === 'blue' ? BlueButtonSave :
  theme === 'green' ? GreenButtonSave :
  theme === 'purple' ? PurpleButtonSave :LightMainContainer 

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
<MainContainer >Choose Your Calm Oasis</MainContainer>

<hr/>
<ParModal style={{width:400,marginTop:15}}  >Welcome to Heal Together - A Social Media Platform for Building Supportive Communities. We believe in providing a soothing and personalized experience for our users.</ParModal>


{
  theme=='light'?<LightButtonActive/>:<LightButton onClick={()=>setTheme("light")}/>
}
<Text>Light Theme: Experience the soothing ambience of our light theme, offering a sense of clarity and simplicity.</Text>


{
  theme=='blue'?<BlueButtonActive/>:
  <BlueButton onClick={()=>setTheme("blue")}/>
}

      <Text>Tranquil Tides: Dive into the calming blues, where serenity meets the horizon.</Text>

      <br />

{
  theme=='green'?<GreenButtonActive/>:<GreenButton onClick={()=>setTheme("green")}/>
}
     
      <Text>Harmony Haven: Embrace the serene greens, where nature's harmony awaits.</Text>

      <br />
      {
        theme=='purple'?<PurpleButtonActive/>:<PurpleButton onClick={()=>setTheme("purple")}/>
      }


      <Text>Peaceful Palette: Unwind with relaxing purples, painting a tranquil atmosphere.</Text>
    

</Box>

  
      </Modal>
    </div>
  );
}
