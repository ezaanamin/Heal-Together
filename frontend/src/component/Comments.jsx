import React from 'react'
import styled from 'styled-components'
import { UserContext } from '../Context/context'
import { useContext } from 'react'

function ProfileCompoents() {

    const Profile=styled.div`

    width:900px;
    height:60px;
    border-radius: 150px;
margin-right:25px;
margin-bottom:20px;
    
    
    `

    const {theme} = useContext(UserContext);
    const LightStatusBar = styled(Profile)`
    background-color: #f0f2f5;
    &:hover {
      background-color: #e1e3e6;
    }
    color:#333333

  `;

  const BlueStatusBar = styled(Profile)`
    background-color: #5c8fbf;
    &:hover {
      background-color:#8bb5e8 ;
      
    }
    color:white;
  `;
  const GreenStatusBar = styled(Profile)`
  background-color:#7dbf6b;
  &:hover {
    background-color: #a8e89e;
  }
  color:white;

`;
const PurpleStatusBar = styled(Profile)`
background-color: #8a5fbf;
&:hover {
  background-color: #c18ae8;
}
color:#333333

`;
 
      const MainProfile =
      theme === 'light' ? LightStatusBar :
      theme === 'blue' ? BlueStatusBar :
      theme === 'green' ? GreenStatusBar :
      theme === 'purple' ? PurpleStatusBar :LightStatusBar 

  return (
   <MainProfile>
 <p style={{textAlign:"center"}}>Connect with Loved Ones: Social bonds are essential for our well-being. Reach out to friends or family you haven't spoken to in a while.</p>



   </MainProfile>
  )
}

export default ProfileCompoents
