import React from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useContext, useEffect } from 'react';
import { UserContext } from '../contextState/contextState';
import { getDynamicStyle } from '../styles/styles';
import { MainHeading,GridContainer, GridItem,CenteredContainer,ButtonModal} from '../styles/styles';
function Comprehensive_Mental_Health_Guide_Model({firstName,Surname,username,UserProfileInformation,mental_health,coping}) {
;
  const userContext = useContext(UserContext);

  
      const { SetUserProfileModal } = userContext;

      const handleClose = () => {
        SetUserProfileModal(false);
      };
      useEffect(()=>{

        console.log(UserProfileInformation,'ezaan')

      },[])

      const style = getDynamicStyle(userContext.theme);      
  return (
    <Modal
    open={userContext.UserProfileModal}
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
         <ButtonModal theme={userContext.theme}>{mental_health}</ButtonModal>
  </CenteredContainer>


      ))}

</GridContainer>



<MainHeading>Coping Techniques</MainHeading>

<GridContainer>
{coping.map((coping) => (
  <CenteredContainer>
         <ButtonModal theme={userContext.theme}>{coping}</ButtonModal>
  </CenteredContainer>


      ))}

</GridContainer>


        </Box>
        </Modal>
  )
}

export default Comprehensive_Mental_Health_Guide_Model
