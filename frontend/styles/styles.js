import styled from "styled-components";
import { relaxingPurpleTheme,sereneGreenTheme,defaultTheme,calmingBlueTheme } from "../src/themes/themes";
import { UserContext } from "../src/Context/context";
export const ADDTOPOST=styled.div`
border: 1px solid black;
height:50px;
overflow: hidden;


`
export const Heading=styled.h3`


margin-top:10px;
margin-left:20px;

`
 export const AddToPostItems=styled.div`

display: flex;
justify-content: flex-end;
position: relative;

bottom:30px
`
const Profile=styled.div`

width:900px;
height:60px;
border-radius: 150px;
margin-right:25px;
margin-bottom:20px;


`

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