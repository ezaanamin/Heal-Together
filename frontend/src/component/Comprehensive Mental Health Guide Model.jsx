import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useContext } from 'react';
import { UserContext } from '../Context/context';
import TextField from '@mui/material/TextField';
import styled from 'styled-components';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import * as yup from 'yup';
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { SignUpPost } from '../redux/slice/API';
import {  useDispatch } from 'react-redux';


function Comprehensive_Mental_Health_Guide_Model({firstName,Surname,username,UserProfileInformation,mental_health,coping}) {


      const {
        UserProfileModal,SetUserProfileModal,theme

      }=useContext(UserContext)

      const handleClose = () => {
        SetUserProfileModal(false);
      };
      React.useEffect(()=>{

        console.log(UserProfileInformation,'ezaan')

      },[])

      const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 700,
        borderRadius: 10,
        paddingTop: 2,
        paddingLeft: 4,
        paddingBottom: 3,
      };
      
      // Assuming you have a 'theme' variable
      if (theme === "blue") {
        style.backgroundColor = '#6ea8d9'; 
        style.border = '2px solid #d9d9d9';
      } 
      if (theme === "green") {
        style.backgroundColor = '#8fd9a6'; 
        style.border = '2px solid #c1e8c1';
      } 
      if (theme === "purple") {
        style.backgroundColor = '#b39ed9'; 
        style.border = '2px solid #e8c1e8';
      } 
      if (theme === "light") {
        style.backgroundColor = '#f0f2f5';  
        style.border = '2px solid #999999';
      }


      const GreenTextColor = '#FFFFFF';
      const BlueTextColor = '#FFFFFF';
      const LightTextColor = '#333333';
      const PurpleTextColor = '#333333';

      const ProfileText =
      theme === 'light' ? LightTextColor:
      theme === 'blue' ? BlueTextColor :
      theme === 'green' ? GreenTextColor :
      theme === 'purple' ? PurpleTextColor :LightTextColor 
    
      const MainHeading=styled.h1`
      text-align:center;
      margin-bottom:25px;
      color: ${ProfileText};
      `
      const GridContainer = styled.div`
      display: grid;
      grid-gap: 10px; /* Adjust this value to control the gap between all items */

      padding: 10px;
      grid-template-columns: repeat(2, 1fr); /* Two columns */
      grid-template-rows: auto; /* Automatically sized rows */
    `;
    
    // Styled component for the grid items
    const GridItem = styled.div`
      text-align: center;
      color: ${ProfileText};
   
      
      /* Add margin between the items (top margin in this case) */
      margin-top: ${(props) => (props.spaceBetween ? '20px' : '0')};
    `;
    const CenteredContainer = styled.div`
    display: flex;
    justify-content: center; 
    align-items: center; 
  
  `;
  
  const Button = styled.button`
    width: 300px;
    height: 50px;
    border-radius: 150px;
    margin-right: 25px;
    text-transform: capitalize;
    background-color: ${props => {
      if (props.theme === 'blue') return '#b3c9e8';
      if (props.theme === 'green') return ' #c9e8c1';
      if (props.theme === 'purple') return '#d9c1e8';
      return '#6ea8d9';
    }};
    border: 4px solid ${props => {
      if (props.theme === 'blue') return '#4277a8';
      if (props.theme === 'green') return '#6bb681';
      if (props.theme === 'purple') return '#906db3';
      return '#000';
    }};
    color: #333333;
  
    &:hover {
      background-color: ${props => {
        if (props.theme === 'blue') return '#8bb5e8';
        if (props.theme === 'green') return ' #a8e89e';
        if (props.theme === 'purple') return '#c18ae8';
        return '#8bb5e8';
      }};
    }
  `


    
    

  return (
    <Modal
    open={UserProfileModal}
    onClose={handleClose}
    aria-labelledby="parent-modal-title"
    aria-describedby="parent-modal-description"
  
  >
    <Box sx={{ ...style, width: 1200 }}>
    <MainHeading >{firstName}  {Surname}</MainHeading>
<MainHeading >@{username}</MainHeading>
<MainHeading >User Profile</MainHeading>

<GridContainer>
      <GridItem>Religion:</GridItem>
      <GridItem>{UserProfileInformation.religious}</GridItem>
      <GridItem spaceBetween>Primary Motivation:</GridItem>
      <GridItem spaceBetween>{UserProfileInformation.primary_motivation}</GridItem>





<GridItem>Age:</GridItem>
<GridItem>{UserProfileInformation.age}</GridItem>
<GridItem spaceBetween>Professional Treatment:</GridItem>
<GridItem spaceBetween>{UserProfileInformation.professional_treatment}</GridItem>



<GridItem>Gender:</GridItem>
<GridItem>{UserProfileInformation.gender_identity}</GridItem>
<GridItem spaceBetween>Comfortable Discussing Mental Health:</GridItem >
<GridItem spaceBetween>{UserProfileInformation.comfortable_discussing_mental_health}</GridItem >



<GridItem>Religious Identity:</GridItem>
<GridItem>{UserProfileInformation.religious_identity}</GridItem>
<GridItem spaceBetween>Connect With Others:</GridItem >
<GridItem spaceBetween>{UserProfileInformation.connect_with_others}</GridItem>




<GridItem>Sexual Orientation:</GridItem>
<GridItem>{UserProfileInformation.sexual_orientation}</GridItem>

</GridContainer>

<MainHeading> Mental Health Insight</MainHeading>

<GridContainer>
{mental_health.map((mental_health) => (
  <CenteredContainer>
         <Button theme={theme}>{mental_health}</Button>
  </CenteredContainer>


      ))}

</GridContainer>



<MainHeading>Coping Techniques</MainHeading>

<GridContainer>
{coping.map((coping) => (
  <CenteredContainer>
         <Button theme={theme}>{coping}</Button>
  </CenteredContainer>


      ))}

</GridContainer>


        </Box>
        </Modal>
  )
}

export default Comprehensive_Mental_Health_Guide_Model
