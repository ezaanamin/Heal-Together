import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useContext } from 'react';
import { UserContext } from '../Context/context';
import styled from 'styled-components';
import { defaultTheme,calmingBlueTheme,sereneGreenTheme,relaxingPurpleTheme } from '../themes/themes'


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
      

      if (theme === "blue") {
        style.backgroundColor = calmingBlueTheme.palette.primary.main;
        style.border = `2px solid ${calmingBlueTheme.palette.borderLine.backgroundColor}`;
      } 
      if (theme === "green") {
        style.backgroundColor = sereneGreenTheme.palette.primary.main;
        style.border = `2px solid ${sereneGreenTheme.palette.borderLine.backgroundColor}`;
      } 
      if (theme === "purple") {
        style.backgroundColor = relaxingPurpleTheme.palette.primary.main;
        style.border = `2px solid ${relaxingPurpleTheme.palette.borderLine.backgroundColor}`;
      } 
      if (theme === "light") {
        style.backgroundColor = defaultTheme.palette.primary.main;
        style.border = `2px solid ${defaultTheme.palette.borderLine.backgroundColor}`;
      }


      const GreenTextColor =sereneGreenTheme.palette.text.primary
      const BlueTextColor = calmingBlueTheme.palette.text.primary
      const LightTextColor =defaultTheme.palette.text.primary
      const PurpleTextColor =relaxingPurpleTheme.palette.text.primary

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
      grid-gap: 10px; 

      padding: 10px;
      grid-template-columns: repeat(2, 1fr); 
      grid-template-rows: auto; 
    `;
    

    const GridItem = styled.div`
      text-align: center;
      color: ${ProfileText};
   
      

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
    if (props.theme === 'blue') return `${calmingBlueTheme.palette.secondary.main}`
    if (props.theme === 'green') return `${sereneGreenTheme.palette.secondary.main}`
    if (props.theme === 'purple') return `${relaxingPurpleTheme.palette.secondary.main}`
    return `${defaultTheme.palette.secondary.main}`
  }};
  border: 4px solid ${props => {
  if (props.theme === 'blue') return calmingBlueTheme.palette.borderLine.backgroundColor;
  if (props.theme === 'green') return sereneGreenTheme.palette.borderLine.backgroundColor;
  if (props.theme === 'purple') return relaxingPurpleTheme.palette.borderLine.backgroundColor;
  if (props.theme === 'light') return defaultTheme.palette.borderLine.backgroundColor;
  return defaultTheme.palette.borderLine.backgroundColor;
}};
color: ${defaultTheme.palette.text.primary};

  &:hover {
    background-color: ${props => {
      if (props.theme === 'blue') return `${calmingBlueTheme.palette.action.hover}`
      if (props.theme === 'green') return `${sereneGreenTheme.palette.action.hover}`
      if (props.theme === 'purple') return `${relaxingPurpleTheme.palette.action.hover}`
      return `${defaultTheme.palette.action.hover}`
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
