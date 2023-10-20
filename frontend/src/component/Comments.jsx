import React from 'react'
import styled from 'styled-components'
import { UserContext } from '../Context/context'
import { useContext } from 'react'
import { defaultTheme,calmingBlueTheme,sereneGreenTheme,relaxingPurpleTheme } from '../themes/themes'

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
    background-color: ${defaultTheme.palette.Comments.backgroundColor};
    &:hover {
      background-color: ${defaultTheme.palette.CommentsHover.backgroundColor}
    }
    color:${defaultTheme.palette.text.primary} 

  `;

  const BlueStatusBar = styled(Profile)`
    background-color:${calmingBlueTheme.palette.Comments.backgroundColor};
    &:hover {
      background-color:${calmingBlueTheme.palette.CommentsHover.backgroundColor}
      
    }
    color:${calmingBlueTheme.palette.text.primary} 
  `;
  const GreenStatusBar = styled(Profile)`
  background-color:${sereneGreenTheme.palette.Comments.backgroundColor};
  &:hover {
    background-color:${sereneGreenTheme.palette.CommentsHover.backgroundColor}
  }
  color:${sereneGreenTheme.palette.text.primary} 

`;
const PurpleStatusBar = styled(Profile)`
background-color:${relaxingPurpleTheme.palette.Comments.backgroundColor};
&:hover {
  background-color:${relaxingPurpleTheme.palette.CommentsHover.backgroundColor}
}
color:${relaxingPurpleTheme.palette.text.primary} 

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
