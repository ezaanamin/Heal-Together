import styled from "styled-components";
import { relaxingPurpleTheme,sereneGreenTheme,defaultTheme,calmingBlueTheme } from "../themes/themes"
import { useContext } from "react";
import { UserContext } from "../contextState/contextState";
import { makeStyles } from '@material-ui/core/styles';
import ColorLensIcon from '@mui/icons-material/ColorLens';
const LightStatusBar =defaultTheme.palette.Comments.backgroundColor
const LightStatusBarHover =defaultTheme.palette.CommentsHover.backgroundColor
const BlueStatusBar =calmingBlueTheme.palette.Comments.backgroundColor
const BlueStatusBarHover =calmingBlueTheme.palette.CommentsHover.backgroundColor
const GreenStatusBar =sereneGreenTheme.palette.Comments.backgroundColor
const GreenStatusBarHover =sereneGreenTheme.palette.CommentsHover.backgroundColor
const PurpleStatusBar = relaxingPurpleTheme.palette.Comments.backgroundColor
const PurpleStatusBarHover =relaxingPurpleTheme.palette.CommentsHover.backgroundColor
const GreenTextColor =sereneGreenTheme.palette.text.primary
const BlueTextColor = calmingBlueTheme.palette.text.primary
const LightTextColor =defaultTheme.palette.text.primary
const PurpleTextColor =relaxingPurpleTheme.palette.text.primary
const LightMainContainer = defaultTheme.palette.primary.main
const BlueMainContainer =calmingBlueTheme.palette.primary.main
const GreenMainContainer =sereneGreenTheme.palette.primary.main
const PurpleMainContainer = relaxingPurpleTheme.palette.primary.main
const LightBorder =defaultTheme.palette.borderLine.backgroundColor
const BlueBorder =calmingBlueTheme.palette.borderLine.backgroundColor
const GreenBorder =sereneGreenTheme.palette.borderLine.backgroundColor
const PurpleBorder =relaxingPurpleTheme.palette.borderLine.backgroundColor;
const LightButtonColor=defaultTheme.palette.secondary.main;
const BlueButtonColor=calmingBlueTheme.palette.secondary.main;
const PurpleButtonColor=relaxingPurpleTheme.palette.secondary.main
const GreenButtonColor=sereneGreenTheme.palette.secondary.main
const BlueMainHoverColor= calmingBlueTheme.palette.action.hover
const GreenMainHoverColor=sereneGreenTheme.palette.action.hover
const LIghtMainHoverColor=defaultTheme.palette.action.hover
const PurpleMainHoverColor=relaxingPurpleTheme.palette.action.hover
const LightButtonCreateColor=defaultTheme.overrides.MuiButton.root.backgroundColor
const BlueButtonCreateColor=calmingBlueTheme.overrides.MuiButton.root.backgroundColor
const GreenButtonCreateColor=sereneGreenTheme.overrides.MuiButton.root.backgroundColor
const PurpleButtonCreateColor=relaxingPurpleTheme.overrides.MuiButton.root.backgroundColort
const LightColorSideBar=defaultTheme.palette.SideBar.backgroundColor
const BlueColorSideBar=calmingBlueTheme.palette.SideBar.backgroundColor
const GreenColorSideBar=sereneGreenTheme.palette.SideBar.backgroundColor
const PurpleColorSideBar=relaxingPurpleTheme.palette.SideBar.backgroundColor


export const GetMainBackGround = (theme) => {
  return theme === 'light' ? LightMainContainer :
    theme === 'blue' ? BlueMainContainer :
    theme === 'green' ?  GreenMainContainer  :
    theme === 'purple' ?  PurpleMainContainer:
    LightMainContainer; 
};
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

export const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: 'white',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    outline: 'none',
    color: 'black',
  },
}));

export const ProfileText = () => {
  const userContext = useContext(UserContext);


  const selectedTextColor =
  userContext.theme === 'light' ? LightTextColor :
  userContext.theme === 'blue' ? BlueTextColor :
  userContext.theme === 'green' ? GreenTextColor :
  userContext.theme === 'purple' ? PurpleTextColor :
    LightTextColor; 

  return selectedTextColor;
}


export const MainHover = (theme) => {
  return (
    theme === 'light' ? LIghtMainHoverColor :
    theme === 'blue' ? BlueMainHoverColor :
    theme === 'green' ? GreenMainHoverColor :
    theme === 'purple' ? PurpleMainHoverColor :
    LIghtMainHoverColor
  );
};


export const MainSideBar = (theme) => {
  return (
    theme === 'light' ? LightColorSideBar :
    theme === 'blue' ? BlueColorSideBar :
    theme === 'green' ? GreenColorSideBar :
    theme === 'purple' ? PurpleColorSideBar :
    LightColorSideBar
  );
};

export const MainButtonCreate = (theme) => {
  return (
    theme === 'light' ? LightButtonCreateColor :
    theme === 'blue' ? BlueButtonCreateColor :
    theme === 'green' ? GreenButtonCreateColor :
    theme === 'purple' ? PurpleButtonCreateColor :
    LightButtonCreateColor
  );
};



export const MainProfileHover = (theme) => {
  return (
    theme === 'light' ? LightStatusBarHover :
    theme === 'blue' ? BlueStatusBarHover :
    theme === 'green' ? GreenStatusBarHover :
    theme === 'purple' ? PurpleStatusBarHover :
    LightStatusBarHover
  );
};


export const MainButton = (theme) => {
  return (
    theme === 'light' ? LightButtonColor :
    theme === 'blue' ? BlueButtonColor :
    theme === 'green' ? GreenButtonColor :
    theme === 'purple' ? PurpleButtonColor :
    LightButtonColor
  );
};

export const MainBorderColor  = (theme) => {
  return theme === 'blue' ? BlueBorder :
    theme === 'green' ? GreenBorder :
    theme === 'purple' ? PurpleBorder :
    LightBorder; 
};


export const MainProfile = (theme) => {


  return (
    theme === 'light' ? LightStatusBar :
    theme === 'blue' ? BlueStatusBar :
    theme === 'green' ? GreenStatusBar :
    theme === 'purple' ? PurpleStatusBar :
    LightStatusBar
  );

};

export const Profile = styled.div`
  width: 900px;
  height: 60px;
  border-radius: 150px;
  margin-right: 25px;
  margin-bottom: 20px;
  background-color: ${props => MainProfile(props.theme) || 'BLUE'};
  &:hover {
    background-color: ${props => MainProfileHover(props.theme) || 'BLACK'};
  }
  color:${ProfileText}
`;
export const getDynamicStyle = (theme) => {
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

  style.backgroundColor = MainButton(theme);
  
  style.border = `2px solid ${MainBorderColor(theme)}`;

  return style;
};


export const MainHeading = styled.h1`
  text-align: center;
  margin-bottom: 25px;
  color: ${ProfileText};
`;



export const GridContainer = styled.div`
display: grid;
grid-gap: 10px; 

padding: 10px;
grid-template-columns: repeat(2, 1fr); 
grid-template-rows: auto; 
`;

 export const CenteredContainer = styled.div`
display: flex;
justify-content: center; 
align-items: center; 

`;


export const Button = (theme) => styled.button`
  width: 300px;
  height: 50px;
  border-radius: 150px;
  margin-right: 25px;
  text-transform: capitalize;
  background-color: ${props => MainButton(props.theme) || 'BLUE'};

  border: 4px solid ${
    theme === 'blue' ? calmingBlueTheme.palette.borderLine.backgroundColor :
    theme === 'green' ? sereneGreenTheme.palette.borderLine.backgroundColor :
    theme === 'purple' ? relaxingPurpleTheme.palette.borderLine.backgroundColor :
    defaultTheme.palette.borderLine.backgroundColor
  };
  color: ${ProfileText};

  &:hover {
    background-color: ${props => MainHover(props.theme) || 'BLUE'};

  }
`;

export const GridItem = styled.div`
text-align: center;
color: ${ProfileText};



margin-top: ${(props) => (props.spaceBetween ? '20px' : '0')};
`;

export function getModalStyle() {


  return {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };
}

export const ProfileImg=styled.img`
height:50px;
border-radius:50px;
margin-top:10px;


`
export const ModalUser=styled.div`
display:flex;
flex-direction: row;

`
export const ModalUserHeading=styled.p`
position: absolute;
left:90px;
margin-top:20px;
font-weight:bold;




`


export const SaveButton = styled.button`
  height: 40px;
  width: 100px;
  display: block;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
  color: white;
  font-weight: bold;
  border-radius: 50px;
  border-color: ${MainBorderColor};
  background-color: ${props => MainButton(props.theme) || 'BLUE'};

`;

export const Text = styled.p`
text-align:center;
font-size:18px;
margin-bottom:10px;
font-weight:bold;
color:${ProfileText}




`


export const EditCoverPhoto = styled.img`
width: 600px;
height: 150px;
position: relative;
left: 0px;
top: 0;
transition: opacity 0.3s;
opacity: 0.2;
border:0px;
border: 4px solid ${props => MainBorderColor(props.theme)};

`;

export const NameDiv = styled.div`

position:relative;
left:130px;
margin-bottom:25px;


`
export const GetEditProfilePhoto = styled.img`
  border-radius: 50%; /* Reduced the border-radius to 50% for a circular shape */
  height: 100px;
  width: 100px;
  position: absolute;
  left: 80px;
  top: 250px;
  z-index: 1;
  border: 4px solid ${props => MainBorderColor(props.theme)};
  transform: translate(-50%, -50%);
  opacity: 0.2;
`;


export const LoginInputContainer = styled.div`
background-color: #E0E0E0FF;
width: 450px;
height: 400px;

@media only screen and (max-width: 600px) {
  width: 550px;
  height: 550px;
}
`;

export const LoginForm = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export const LoginButton = styled.button`
width: 300px;
height: 40px;
font-size: 15px;
background-color: #007bff;
color: white;
margin-bottom: 10px;
border-radius: 10px;
border-color: #007bff;
`;

export const ForgotPassword = styled.p`
margin-bottom: 10px;

&:hover {
  text-decoration: underline;
}
`;

export const CreateAccount = styled.button`
width: 250px;
height: 40px;
font-size: 15px;
background-color: #42b72a;
color: white;
margin-bottom: 10px;
border-radius: 10px;
border-color: #42b72a;
`;

export const Errors = styled.p`
margin-bottom: 10px;
color: red;
`;
export const Logo=styled.img`
    
width:100px;
height:100px;
display:block;
margin-right:auto;
margin-left:auto;


`

export const LoginButtonModal=styled.button`
height:40px;
width:200px;
display:block;
margin-top:10px;
margin-bottom:10px;
margin-left:auto;
margin-right:auto;
color:white;
font-weight:bold;
background-color: ${props => MainButton(props.theme) || 'BLUE'};



`





export const CreateAccountModal = styled.button`
  marginTop: 10px;
  height: 40px;
  width: 200px;
  display: block;
  marginLeft: auto;
  marginRight: auto;
  marginBottom: 10px;
  fontWeight: bold;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  display:block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  color:${ProfileText};
  background-color: ${props => MainButtonCreate(props.theme) || 'BLUE'};



`;
 export const UserDisplay = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 20px;
    justify-content: space-between;
`;

 export const ProfilePic = styled.img`
    height: 50px;
    width: 50px;
    border-radius: 10px;
`;

 export const UserName = styled.h3`
    margin: 0;
`;

 export const ConnectButton = styled.button`
    background-color: #6fbf73;
    color: white;
    border-radius: 10px;
    border-color: #6fbf73;
    height: 30px;
    width:130px;
  
    &:hover {
        background-color: #9bcfc9;
        border-color: #9bcfc9;
    }
`;


 export const SideBarContainer = styled.div`
display: flex;
flex-direction: column;
position: fixed;
top: 0;
left: 0;
height: 100vh;
width: 400px;
background-color: white;
background-color: ${props => MainSideBar(props.theme) || 'BLUE'};

`;



export const SideBarLogo = styled.img`
height: 150px;
width: 150px;
margin-bottom: 20px;
`;

export const SideBarItems = styled.div`
display: flex;
flex-direction: column;
align-items: center;
flex-grow: 1;
margin-top:auto; 
`;

export const SideRight = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: auto;
padding-bottom: 20px;
`;
export const SideBarProfile=styled.img`
height:50px;
border-radius:50px;
margin-top:10px;


`


export const FinalConnectingButton = styled.button`
    height: 50px;
    font-size: 15px;
    background-color: #6fbf73;
    color: white;
    border-radius: 10px;
    border-color: #6fbf73;
    margin: 0 auto;
    display: block;
    flex: 1;
    &:hover {
        background-color: #9bcfc9;
        border-color: #9bcfc9;
    }
`;

export const IconHeading = styled.p`
margin-left: 10px;
`;

export const SideBarUserHeading=styled.p`
position: relative;
font-size:20px;

margin-top:20px;
font-weight:bold;




`
 export const SignUp=styled.div`

display:flex;
flex-direction: row;
margin-top:10px;




`
 export const RadioFlex=styled.div`

display:flex;
flex-direction: row;
align-items: center;


`

 export const SignUpButton=styled.button`
width:250px;
height:40px;
font-size:25px;
background-color:#00bfff  ;
color:white;
margin-bottom:10px;
border-radius:10px;
border-color:#00bfff;
position:relative;
left:70px;
&:hover {
  background-color: #0099cc;
 
}


`
 export const TermsPrivacyPolicy=styled.p`

margin-bottom:10px;

`

 export const StyledStatusBar = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 700px;
    position: fixed;
    top: 200px;
    height: 100px;
    left: 50%;
    transform: translateX(-50%);
    overflow-x: hidden;
    background-color: ${props => GetMainBackGround(props.theme) || 'defaultColor'};
`;

   export const StatusBarButton = styled.button`
    width: 600px;

    height: 50px;
    border-radius: 50px;
    background-color: ${props => MainProfile(props.theme) || 'BLUE'};
  &:hover {
    background-color: ${props => MainProfileHover(props.theme) || 'BLACK'};
  }
    border: none;
  `;

   export const StatusBarHeading = styled.h3`
 color:${ProfileText}
    font-size: 18px;
    position: relative;
    right: 130px;
  `;

  export const StatusBarItems = styled.div`
    display: flex;
    flex-direction: row;
  `;

   export const StatusBarProfile = styled.img`
    height: 50px;
    border-radius: 50px;
    position: absolute;
    left: 0;
    top: 5px;
  `;


   export const PositionedMenu = styled(ColorLensIcon)`
color: ${ProfileText};

`;


export const VerificationBox=styled.div`

display: flex;
justify-content: center;
align-items: center;
background-color:#f0f2f5;
height: 600px;
width: 600px;
margin: 150px auto 0;
flex-direction:column;

@media only screen and (max-width: 600px) {
  background-color:#f0f2f5;

  width:450px;
  height:450px;

}


`

export const VerificationButton=styled.button`

width:300px;
height:50px;
color:white;
background-color:#002D62;
margin-top:20px;
margin-bottom:20px;


`
export const GettingStartedDiv=styled.div`
background-color:#c6e2de;
width: 100%;
height: 100vh;
`
export const HeadingGettingStarted = styled.h1`
color:#8aade2;
text-align: center;
margin-top:105px; 
`
export const SubHeadingGettingStarted = styled.p`
color: #60a3a0;
text-align: center;
margin-top: 15px;
width: 700px;
margin: 0 auto; 
`;

export const GettingStartedLogo=styled.img`
width:100px;
height:100px;
position: fixed;
left:0;
`
export const QuestionDiv=styled.div`
width:600px;
background-color: white;
margin-right:auto;
margin-left:auto;
margin-top:15px;
`
export const QuestionHeading=styled.h3`
margin-top:25px;
text-align:center;
margin-bottom:25px;
`
export const QuestionOption=styled.div`
display:flex;
flex-direction:column;
`
export const QuestionButton = styled.button`
background-color: #b9e5e3;
color: #60a3a0;
border-color: #b9e5e3;
height: 50px;
width: ${props => props.width || '200px'};
font-size: 20px;
border-radius: 20px;
margin-bottom: 20px;
margin-right: ${props => props.right || 'auto'};
margin-left: ${props => props.left || 'auto'};
`;


export const StyledHome = styled.div`
width: 100%;
height: 100vh;
background-color: ${props => GetMainBackGround(props.theme) || 'defaultColor'};

`;



export const Container = styled.div`
width: 100%;
height: 100vh;
background-image: ${({ theme }) =>
  `linear-gradient(to right, ${
    theme === 'light'
      ? `${defaultTheme.palette.primary.main} 58%`
      : theme === 'blue'
      ? `${calmingBlueTheme.palette.primary.main} 58%`
      : theme === 'green'
      ? `${sereneGreenTheme.palette.primary.main} 58%`
      : theme === 'purple'
      ? `${relaxingPurpleTheme.palette.primary.main} 58%`
      : `${defaultTheme.palette.primary.main} 58%`
  }, white 50%)`};
font-family: 'Nanum Gothic', sans-serif;

display: flex;
justify-content: center;
align-items: center;
position: relative;
`;

export const LogoContainer = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-90%, -50%);
`;



export const LoginSection = styled.div`

position: relative;
left:550px;

`;

export const NoCoverPhoto=styled.div`

width: 80%;
height: 30%;
position: relative;
left: 0px;
top: 0;
background-color: ${props => GetMainBackGround(props.theme) || 'defaultColor'};
border: 4px solid ${props => MainBorderColor(props.theme)};


`



//  border: 4px solid ${MainBorderColor(theme)}; 

export const StyledHr = styled.hr`
border: none;
height: 3px;
margin:1px;
background-color:: ${props => MainBorderColor(props.theme)}
`;


  
export const StyledProfileHome = styled.div`
width: 100%;
height: 100vh;
position: relative;
left: 400px;
background-color: ${props => GetMainBackGround(props.theme) || 'defaultColor'};


`;

export const CoverPhoto = styled.img`
  width: 80%;
  height: 30%;
  position: relative;
  left: 0px;
  top: 0;
  border: 4px solid ${props => MainBorderColor(props.theme)};

`;

export const ProfilePhoto = styled.img`
  border-radius: 50%; 
  height: 200px;
  width: 200px;
  position: absolute;
  left: 150px;
  top: 400px;
  z-index: 1;
  border: 4px solid ${props => MainBorderColor(props.theme)};


  transform: translate(-50%, -50%);
`;

export const NoAccountProfilePhoto = styled.div`
  border-radius: 50%; 
  height: 200px;
  width: 200px;
  position: absolute;
  left: 150px;
  top: 400px;
  z-index: 1;
  background-color: ${props => GetMainBackGround(props.theme) || 'defaultColor'};
  border: 4px solid ${props => MainBorderColor(props.theme)};

  transform: translate(-50%, -50%);
`;

export const InformationLayer=styled.div`
position: absolute;
left: 20px;
top: 500px;
display:flex;
flex-direction:column;


`



export const MentalHealthInsights=styled.div`
 display:flex;
 flex-direction:row;
 position: relative;
 top:50px;
 left:300px;


`
export const CopingTechniques=styled.div`

display:flex;
flex-direction:row;
position: relative;
top:100px;
left:300px;


`
export const ButtonLayer=styled.div`

position: absolute;
top: 400px;
right:400px;
display:flex;
flex-direction:row;

`






 export const ProfileHeading = styled.h2`
  margin-bottom: 5px 0;
  margin-left: 60px;
  margin-top: 10px;
  color: ${ProfileText};
`;

export const Header=styled.h2`
margin-bottom:5px 0;
margin-left:60px;
margin-top:50px;
color: ${ProfileText};


`

export const AccountDoesnotExist=styled.h1`

color: ${ProfileText};


`
export const SearchAccount=styled.p`
color: ${ProfileText};

`
export const MentalHealthInsightsHeading=styled.h2`

color: ${ProfileText};
margin-right:30px;


`
export const HeadingMentalHealth = styled.h2`
  color: ${ProfileText};
  text-align: center;
  position: relative;
  top: 10px;
`;

export const MyStorySection=styled.div`
position: absolute;
top: 900px;
left: 50px;

`
export const MyStory=styled.h2`
color: ${ProfileText};
text-align:center;


`
export const MyStoryText=styled.p`
width:1200px;
text-align:center;
font-size:16px;



`
export const WellnessUpdatesSection = styled.div`
  position: absolute;
  top: 1100px;
  left: 100px;
  display: flex;
  justify-content: center; 
  align-items: center; 


`;
export const WellnessUpdatesHeading=styled.div`
position: absolute;

top: 1060px;
left: 50px;


`

export const WellnessUpdates=styled.h2`
color: ${ProfileText};
position: relative;


`

export const  WellnessUpdatesComments=styled.div`
position: relative;

`

export const MentalHealthGuide = styled.div`
  border: 4px solid ${props => MainBorderColor(props.theme)};
  width: 1400px;
  height: 250px;
  position: absolute;
  top: 600px;
  left: 50px;
`;
export const ChangeEmail=styled.p`
margin-bottom:10px;
margin-top:20px;
&:hover {
  text-decoration: underline;
}


`
export const VerificationDiv=styled.div`

background-color: #E6F1F7;
height:100vh;

`
export const LoginHeading=styled.h1`

text-align: center;

margin-bottom:10px;
font-weight:bold;




`
export const MainLoginButton = styled.button`
  height: 40px;
  width: 200px;
  display: block;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
  color: ${ProfileText};

  font-weight: bold;
  background-color: ${props =>MainButton(props.theme) || 'blue'};
`;

export const CreateAccountButton= styled.button`
marginTop: 10px;
height: 40px;
width: 250px;
display: block;
marginLeft: auto;
marginRight: auto;
marginBottom: 10px;
fontWeight: bold;
padding: 10px 20px;
border: none;
border-radius: 5px;
font-size: 16px;
cursor: pointer;
display:block;
margin-left: auto;
margin-right: auto;
margin-top: 10px;
background-color: ${props => MainButton(props.theme) || 'blue'};
color: ${ProfileText};

`;