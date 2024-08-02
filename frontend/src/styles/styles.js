import styled, { keyframes, css } from 'styled-components';
import { relaxingPurpleTheme, sereneGreenTheme, TranquilTealTheme, calmingBlueTheme } from "../themes/themes"
import { useContext } from "react";
import { UserContext } from "../contextState/contextState";
import { makeStyles } from '@material-ui/core/styles';
import { darken } from 'polished';
import ColorLensIcon from '@mui/icons-material/ColorLens'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const LightStatusBar = TranquilTealTheme.palette.statusBar.backgroundColor
const LightStatusBarHover = TranquilTealTheme.palette.CommentsHover.backgroundColor
const BlueStatusBar = calmingBlueTheme.palette.statusBar.backgroundColor
const BlueStatusBarHover = calmingBlueTheme.palette.CommentsHover.backgroundColor
const GreenStatusBar = sereneGreenTheme.palette.statusBar.backgroundColor
const GreenStatusBarHover = sereneGreenTheme.palette.CommentsHover.backgroundColor
const PurpleStatusBar = relaxingPurpleTheme.palette.statusBar.backgroundColor
const PurpleStatusBarHover = relaxingPurpleTheme.palette.CommentsHover.backgroundColor


const GreenTextColor = sereneGreenTheme.palette.text.primary
const BlueTextColor = calmingBlueTheme.palette.text.primary
const LightTextColor = TranquilTealTheme.palette.text.primary
const PurpleTextColor = relaxingPurpleTheme.palette.text.primary


const LightMainContainer = TranquilTealTheme.palette.primary.main
const BlueMainContainer = calmingBlueTheme.palette.primary.main
const GreenMainContainer = sereneGreenTheme.palette.primary.main
const PurpleMainContainer = relaxingPurpleTheme.palette.primary.main


const LightBorder = TranquilTealTheme.palette.borderLine.backgroundColor
const BlueBorder = calmingBlueTheme.palette.borderLine.backgroundColor
const GreenBorder = sereneGreenTheme.palette.borderLine.backgroundColor
const PurpleBorder = relaxingPurpleTheme.palette.borderLine.backgroundColor;


const LightButtonColor = TranquilTealTheme.palette.secondary.main;
const BlueButtonColor = calmingBlueTheme.palette.secondary.main;
const PurpleButtonColor = relaxingPurpleTheme.palette.secondary.main
const GreenButtonColor = sereneGreenTheme.palette.secondary.main
const BlueMainHoverColor = calmingBlueTheme.palette.action.hover
const GreenMainHoverColor = sereneGreenTheme.palette.action.hover
const LIghtMainHoverColor = TranquilTealTheme.palette.action.hover
const PurpleMainHoverColor = relaxingPurpleTheme.palette.action.hover


const LightButtonCreateColor = TranquilTealTheme.overrides.MuiButton.root.backgroundColor
const BlueButtonCreateColor = calmingBlueTheme.overrides.MuiButton.root.backgroundColor
const GreenButtonCreateColor = sereneGreenTheme.overrides.MuiButton.root.backgroundColor
const PurpleButtonCreateColor = relaxingPurpleTheme.overrides.MuiButton.root.backgroundColor

const LightColorSideBar = TranquilTealTheme.palette.SideBar.backgroundColor
const BlueColorSideBar = calmingBlueTheme.palette.SideBar.backgroundColor
const GreenColorSideBar = sereneGreenTheme.palette.SideBar.backgroundColor
const PurpleColorSideBar = relaxingPurpleTheme.palette.SideBar.backgroundColor


const LightPostBackgroundColor = TranquilTealTheme.palette.Post.containerBackground;
const BluePostBackgroundColor = calmingBlueTheme.palette.Post.containerBackground;
const GreenPostBackgroundColor = sereneGreenTheme.palette.Post.containerBackground;
const PurplePostBackgroundColor = relaxingPurpleTheme.palette.Post.containerBackground;


const BlueCommentSection = calmingBlueTheme.palette.Comments.backgroundColor;
const GreenCommentSection = sereneGreenTheme.palette.Comments.backgroundColor;
const PurpleCommentSection = relaxingPurpleTheme.palette.Comments.backgroundColor;
const TranquilTealCommentSection = TranquilTealTheme.palette.Comments.backgroundColor;


const LightHeartFill1_TranquilTeal = TranquilTealTheme.palette.animateHeart.fillColor1;
const LightHeartFill2_TranquilTeal = TranquilTealTheme.palette.animateHeart.fillColor2;
const LightHeartFill3_TranquilTeal = TranquilTealTheme.palette.animateHeart.fillColor3;
const LightHeartStroke_TranquilTeal = TranquilTealTheme.palette.animateHeart.strokeColor;
const LightHeartFilter_TranquilTeal = TranquilTealTheme.palette.animateHeart.filter;

const LightHeartFill1_CalmingBlue = calmingBlueTheme.palette.animateHeart.fillColor1;
const LightHeartFill2_CalmingBlue = calmingBlueTheme.palette.animateHeart.fillColor2;
const LightHeartFill3_CalmingBlue = calmingBlueTheme.palette.animateHeart.fillColor3;
const LightHeartStroke_CalmingBlue = calmingBlueTheme.palette.animateHeart.strokeColor;
const LightHeartFilter_CalmingBlue = calmingBlueTheme.palette.animateHeart.filter;

const LightHeartFill1_SereneGreen = sereneGreenTheme.palette.animateHeart.fillColor1;
const LightHeartFill2_SereneGreen = sereneGreenTheme.palette.animateHeart.fillColor2;
const LightHeartFill3_SereneGreen = sereneGreenTheme.palette.animateHeart.fillColor3;
const LightHeartStroke_SereneGreen = sereneGreenTheme.palette.animateHeart.strokeColor;
const LightHeartFilter_SereneGreen = sereneGreenTheme.palette.animateHeart.filter;


const LightHeartFill1_RelaxingPurple = relaxingPurpleTheme.palette.animateHeart.fillColor1;
const LightHeartFill2_RelaxingPurple = relaxingPurpleTheme.palette.animateHeart.fillColor2;
const LightHeartFill3_RelaxingPurple = relaxingPurpleTheme.palette.animateHeart.fillColor3;
const LightHeartStroke_RelaxingPurple = relaxingPurpleTheme.palette.animateHeart.strokeColor;
const LightHeartFilter_RelaxingPurple = relaxingPurpleTheme.palette.animateHeart.filter;


const TranquilTealThemeIconColor = TranquilTealTheme.palette.ButtonActive.backgroundColor;
const CalmingBlueThemeIconColor = calmingBlueTheme.palette.ButtonActive.backgroundColor;
const SereneGreenThemeIconColor = sereneGreenTheme.palette.ButtonActive.backgroundColor;
const RelaxingPurpleIconColor = relaxingPurpleTheme.palette.ButtonActive.backgroundColor;




export const GetMainBackGround = (theme) => {
  return theme === 'light' ? LightMainContainer :
    theme === 'blue' ? BlueMainContainer :
      theme === 'green' ? GreenMainContainer :
        theme === 'purple' ? PurpleMainContainer :
          LightMainContainer;
};


export const GetPostBackGroundColor = (theme) => {
  return theme === 'light' ? LightPostBackgroundColor :
    theme === 'blue' ? BluePostBackgroundColor :
      theme === 'green' ? GreenPostBackgroundColor :
        theme === 'purple' ? PurplePostBackgroundColor :
          LightPostBackgroundColor;
};

export const GetCommentSectionBackground = (theme) => {
  return theme === 'light' ? TranquilTealCommentSection :
    theme === 'blue' ? BlueCommentSection :
      theme === 'green' ? GreenCommentSection :
        theme === 'purple' ? PurpleCommentSection :
          TranquilTealCommentSection;
};

export const GetLightHeartFill1 = (theme) => {
  return theme === 'light' ? LightHeartFill1_TranquilTeal :
    theme === 'blue' ? LightHeartFill1_CalmingBlue :
      theme === 'green' ? LightHeartFill1_SereneGreen :
        theme === 'purple' ? LightHeartFill1_RelaxingPurple :
          LightHeartFill1_TranquilTeal;
};
export const GetLightHeartFill2 = (theme) => {
  return theme === 'light' ? LightHeartFill2_TranquilTeal :
    theme === 'blue' ? LightHeartFill2_CalmingBlue :
      theme === 'green' ? LightHeartFill2_SereneGreen :
        theme === 'purple' ? LightHeartFill2_RelaxingPurple :
          LightHeartFill2_TranquilTeal;
};

export const GetLightHeartFill3 = (theme) => {
  return theme === 'light' ? LightHeartFill3_TranquilTeal :
    theme === 'blue' ? LightHeartFill3_CalmingBlue :
      theme === 'green' ? LightHeartFill3_SereneGreen :
        theme === 'purple' ? LightHeartFill3_RelaxingPurple :
          LightHeartFill3_TranquilTeal;
};

export const GetLightHeartStroke = (theme) => {
  return theme === 'light' ? LightHeartStroke_TranquilTeal :
    theme === 'blue' ? LightHeartStroke_CalmingBlue :
      theme === 'green' ? LightHeartStroke_SereneGreen :
        theme === 'purple' ? LightHeartStroke_RelaxingPurple :
          LightHeartStroke_TranquilTeal;
};

export const GetLightHeartFilter = (theme) => {
  return theme === 'light' ? LightHeartFilter_TranquilTeal :
    theme === 'blue' ? LightHeartFilter_CalmingBlue :
      theme === 'green' ? LightHeartFilter_SereneGreen :
        theme === 'purple' ? LightHeartFilter_RelaxingPurple :
          LightHeartFilter_TranquilTeal;
};

export const GetIconColor = (theme) => {
  switch (theme) {
    case 'light':
      return TranquilTealThemeIconColor;
    case 'blue':
      return CalmingBlueThemeIconColor;
    case 'green':
      return SereneGreenThemeIconColor;
    case 'purple':
      return RelaxingPurpleIconColor;
    default:
      return;
  }
};

export const GetRingColor = (theme) => {
  switch (theme) {
    case 'light':
      return LightMainContainer;
    case 'blue':
      return BlueMainContainer;
    case 'green':
      return GreenMainContainer;
    case 'purple':
      return PurpleMainContainer;
    default:
      return LightMainContainer;
  }
};
export const ADDTOPOST = styled.div`
border: 1px solid black;
height:50px;
overflow: hidden;


`
export const Heading = styled.h3`


margin-top:10px;
margin-left:20px;

`
export const AddToPostItems = styled.div`

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

export const MainBorderColor = (theme) => {
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
  border-radius: 50px;
  margin-right: 15px;
  margin-bottom: 20px;
  background-color: ${props => MainProfile(props.theme)};
  &:hover {
    background-color: ${props => MainProfileHover(props.theme)};
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


export const ButtonModal = styled.button`
  width: 300px;
  height: 50px;
  border-radius: 150px;
  margin-right: 25px;
  text-transform: capitalize;
  background-color: ${props => props.theme === 'blue' ? calmingBlueTheme.palette.borderLine.backgroundColor : props.theme === 'green' ? sereneGreenTheme.palette.borderLine.backgroundColor : props.theme === 'purple' ? relaxingPurpleTheme.palette.borderLine.backgroundColor : TranquilTealTheme.palette.borderLine.backgroundColor};
  color: ${ProfileText};

  border: 4px solid ${props => props.theme === 'blue' ? calmingBlueTheme.palette.borderLine.backgroundColor : props.theme === 'green' ? sereneGreenTheme.palette.borderLine.backgroundColor : props.theme === 'purple' ? relaxingPurpleTheme.palette.borderLine.backgroundColor : TranquilTealTheme.palette.borderLine.backgroundColor};

  &:hover {
    background-color: ${props => props.theme === 'blue' ? calmingBlueTheme.palette.borderLine.backgroundColor : props.theme === 'green' ? sereneGreenTheme.palette.borderLine.backgroundColor : props.theme === 'purple' ? relaxingPurpleTheme.palette.borderLine.backgroundColor : TranquilTealTheme.palette.borderLine.backgroundColor};
  }
`;

export const CenteredContainerButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonModalTheme = styled.button`
  width: 300px;
  height: 50px;
  border-radius: 150px;
  margin-top:20px;
  text-transform: capitalize;
  background-color: ${props => (
    props.theme === 'blue'
      ? calmingBlueTheme.palette.borderLine.backgroundColor
      : props.theme === 'green'
        ? sereneGreenTheme.palette.borderLine.backgroundColor
        : props.theme === 'purple'
          ? relaxingPurpleTheme.palette.borderLine.backgroundColor
          : TranquilTealTheme.palette.borderLine.backgroundColor
  )};
  color: ${ProfileText};

  border: 4px solid ${props => (
    props.theme === 'blue'
      ? calmingBlueTheme.palette.borderLine.backgroundColor
      : props.theme === 'green'
        ? sereneGreenTheme.palette.borderLine.backgroundColor
        : props.theme === 'purple'
          ? relaxingPurpleTheme.palette.borderLine.backgroundColor
          : TranquilTealTheme.palette.borderLine.backgroundColor
  )};

  &:hover {
    background-color: ${props => (
    props.theme === 'blue'
      ? calmingBlueTheme.palette.borderLine.backgroundColor
      : props.theme === 'green'
        ? sereneGreenTheme.palette.borderLine.backgroundColor
        : props.theme === 'purple'
          ? relaxingPurpleTheme.palette.borderLine.backgroundColor
          : TranquilTealTheme.palette.borderLine.backgroundColor
  )};
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

export const ProfileImg = styled.img`
height:50px;
border-radius:50px;
margin-top:10px;


`
export const ModalUser = styled.div`
display:flex;
flex-direction: row;

`
export const ModalUserHeading = styled.p`
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
export const EditProfilePhoto = styled.img`
  border-radius: 50%;
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
export const Logo = styled.img`
    
width:100px;
height:100px;
display:block;
margin-right:auto;
margin-left:auto;


`

export const LoginButtonModal = styled.button`
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
export const SideBarProfile = styled.img`
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

export const SideBarUserHeading = styled.p`
position: relative;
font-size:20px;

margin-top:20px;
font-weight:bold;




`
export const SignUp = styled.div`

display:flex;
flex-direction: row;
margin-top:10px;




`
export const RadioFlex = styled.div`

display:flex;
flex-direction: row;
align-items: center;


`

export const SignUpButton = styled.button`
width:250px;
height:40px;
font-size:25px;
background-color:${sereneGreenTheme.palette.secondary.main};
color:white;
margin-bottom:10px;
border-radius:10px;
border-color:${sereneGreenTheme.palette.borderLine.backgroundColor};


&:hover {
  background-color:${sereneGreenTheme.palette.action.hover};
 
}


`
export const TermsPrivacyPolicy = styled.p`

margin-bottom:10px;

`

export const StyledStatusBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 700px;
  position: fixed;
  top: 100px;
  height: 140px;
  left: 50%;
  transform: translateX(-50%);

  
  
`


export const VerificationBox = styled.div`

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

export const VerificationButton = styled.button`

width:300px;
height:50px;
color:white;
background-color:#002D62;
margin-top:20px;
margin-bottom:20px;


`
export const GettingStartedDiv = styled.div`
  background-color: ${sereneGreenTheme.palette.primary.main};
  width: 100%;
  height: 100vh;
`;
export const HeadingGettingStarted = styled.h1`
color:${GreenTextColor};
text-align: center;
margin-top:60px; 
`
export const SubHeadingGettingStarted = styled.p`
color:${GreenTextColor};
text-align: center;
margin-top: 15px;
width: 700px;
margin: 0 auto; 
`;

export const GettingStartedLogo = styled.img`
width:100px;
height:100px;
position: fixed;
left:0;
`
export const QuestionDiv = styled.div`
width:600px;
background-color: white;
margin-right:auto;
margin-left:auto;

`
export const QuestionHeading = styled.h3`
margin-top:25px;
text-align:center;
margin-bottom:25px;
`
export const QuestionOption = styled.div`
display:flex;
flex-direction:column;
`
export const QuestionButton = styled.button`
background-color:${GreenStatusBarHover};
color:${GreenTextColor};
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
    `linear-gradient(to right, ${theme === 'light'
      ? `${TranquilTealTheme.palette.primary.main} 58%`
      : theme === 'blue'
        ? `${calmingBlueTheme.palette.primary.main} 58%`
        : theme === 'green'
          ? `${sereneGreenTheme.palette.primary.main} 58%`
          : theme === 'purple'
            ? `${relaxingPurpleTheme.palette.primary.main} 58%`
            : `${TranquilTealTheme.palette.primary.main} 58%`
    }, white 50%)`};
font-family: 'Nanum Gothic', sans-serif;

display: flex;
justify-content: center;
align-items: center;
position: relative;

@media screen and (max-device-width:480px){

  width: 100%;
height: 100vh;
background-image: ${({ theme }) =>
    `linear-gradient(to bottom, ${theme === 'light'
      ? `${TranquilTealTheme.palette.primary.main} 58%`
      : theme === 'blue'
        ? `${calmingBlueTheme.palette.primary.main} 58%`
        : theme === 'green'
          ? `${sereneGreenTheme.palette.primary.main} 58%`
          : theme === 'purple'
            ? `${relaxingPurpleTheme.palette.primary.main} 58%`
            : `${TranquilTealTheme.palette.primary.main} 58%`
    }, white 50%)`};
font-family: 'Nanum Gothic', sans-serif;

display: flex;
justify-content: center;
align-items: center;
position: relative;

  
}
`;


export const LogoContainer = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-90%, -50%);

@media screen and (max-device-width:480px){
  top: 50%;
left: 50%;
transform: translate(-50%, -80%);


   }

`;



export const LoginLogo = styled.img`
@media screen and (max-device-width:480px){
width:520px


   }

`;



export const LoginSection = styled.div`

position: relative;
left:550px;



@media screen and (max-device-width:480px){
   

left:10px;
top:300px;
}

`;



export const NoCoverPhoto = styled.div`

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

export const InformationLayer = styled.div`
position: absolute;
left: 20px;
top: 500px;
display:flex;
flex-direction:column;


`



export const MentalHealthInsights = styled.div`
 display:flex;
 flex-direction:row;
 position: relative;
 top:50px;
 left:300px;


`
export const CopingTechniques = styled.div`

display:flex;
flex-direction:row;
position: relative;
top:100px;
left:300px;


`
export const ButtonLayer = styled.div`
  position: absolute;
  top: 400px;
  right: 400px;
  display: flex;
  flex-direction: row;
  z-index: 10; 
`;






export const ProfileHeading = styled.h2`
  margin-bottom: 5px 0;
  margin-left: 60px;
  margin-top: 10px;
  color: ${ProfileText};
`;

export const Header = styled.h2`
margin-bottom:5px 0;
margin-left:60px;
margin-top:50px;
color: ${ProfileText};


`

export const AccountDoesnotExist = styled.h1`

color: ${ProfileText};


`
export const SearchAccount = styled.p`
color: ${ProfileText};

`
export const MentalHealthInsightsHeading = styled.h2`

color: ${ProfileText};
margin-right:30px;


`
export const HeadingMentalHealth = styled.h2`
  color: ${ProfileText};
  text-align: center;
  position: relative;
  top: 10px;
`;

export const MyStorySection = styled.div`
  position: absolute;
  top: 600px;
  left: -250px;
  width: 100%;
  text-align: center;
`;

export const MyStory = styled.h2`
  color: ${ProfileText};
  text-align: center;
`;

export const MyStoryText = styled.p`
  width: 1200px;
  text-align: center;
  font-size: 16px;
  margin: 0 auto;
  margin-bottom: 10px; 
`;


export const WellnessUpdatesSection = styled.div`
  position: absolute;
  top:900px;
  left: 100px;
  display: flex;
  justify-content: center; 
  align-items: center; 


`;
export const WellnessUpdatesHeading = styled.div`
position: absolute;

top: 850px;
left: 120px;


`

export const WellnessUpdates = styled.h2`
color: ${ProfileText};



`

export const WellnessUpdatesComments = styled.div`
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
export const ChangeEmail = styled.p`
margin-bottom:10px;
margin-top:20px;
&:hover {
  text-decoration: underline;
}


`
export const VerificationDiv = styled.div`

background-color: #E6F1F7;
height:100vh;

`
export const LoginHeading = styled.h1`

text-align: center;

margin-bottom:10px;
font-weight:1900;
font-size:50px;





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
  border-radius: 5px;
  font-weight: bold;
  background-color: ${props => MainButton(props.theme) || 'blue'};
`;

export const CreateAccountButton = styled.button`
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
export const ProgressBarContainer = styled.div`
  width: 550px;
  background-color: #ccc;
  border-radius: 5px;
  margin: 10px auto; 
  display: flex;
  justify-content: center; 
  align-items: center;
  overflow: hidden;
`;

export const ProgressBarText = styled.div`
  padding: 10px;
  text-align: left;
  font-weight: bold;
  color: #333;
`;

export const ProgressBarFill = styled.div`
  text-align: right;
  color: #fff;
  background-color: #007bff;
  padding: 10px;
  width: ${props => props.percentage}%;
`;

export const StyledTextarea = styled.textarea`
  margin-top: 10px;
  margin-left: 50px;
  width: 500px;
  height: 100px;
  background:${GreenColorSideBar};
  border-color:${GreenBorder};
  border-radius: 6px 6px 6px 6px;
  border-style: none solid solid none;
  border-width: medium 1px 1px medium;
  box-shadow: 0 1px 2px ${GreenMainHoverColor} inset;
  color: ${GreenTextColor};
  font-size: 1em;
  line-height: 1.4em;
  padding: 5px 8px;
  transition: background-color 0.2s ease 0s;
  margin-bottom:20px;
  
  &:focus {
    background: #FFFFFF;
    outline-width: 0;
  }
`;
export const MindFulMomentContainer = styled.div`

background-color: ${props => GetPostBackGroundColor(props.theme) || 'defaultColor'};

display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 700px;
    position: fixed;
    top: 200px;
    height: 200px;
    left: 50%;
    transform: translateX(-50%);
    overflow-x: hidden;


`

export const CompanionConnection = styled.button`
  background-color: ${props => MainButton(props.theme) || 'BLUE'};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  position:absolute;
  margin-top:10px;
  right:20px;
margin-left:10px;
  &:hover {
    background-color: ${props => MainHover(props.theme) || 'darkblue'};
  }

  &:focus {
    outline: none;
  }


`;
export const cardStyle = {
  width: '200px',
  height: '300px',
  perspective: '1000px',
};

export const cardWrapperStyle = (isFlipped) => ({
  width: '100%',
  height: '100%',
  transformStyle: 'preserve-3d',
  transition: 'transform 1s',
  transform: isFlipped ? 'rotateY(360deg)' : 'rotateY(0deg)',
});

export const cardFaceStyle = (props) => ({
  width: '100%',
  height: '100%',
  position: 'absolute',
  backfaceVisibility: 'hidden',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '24px',
  backgroundColor: props.isFlipped ? props.flippedBackgroundColor || '#2ecc71' : props.frontBackgroundColor || '#3498db',
  color: props.isFlipped ? `rgba(255, 255, 255, 0.7)` : '#fff',
  backgroundImage: props.isFlipped ? `url(${props.backImage})` : 'none',
  backgroundSize: 'cover',
  boxShadow: props.is3D ? '0 10px 20px rgba(0, 0, 0, 0.2)' : 'none',
});
export const ThemeModalHeading = styled.h2`

color: ${ProfileText};
text-align:center;
margin-bottom:20px;

`


const getBackgroundColor = (theme) => {
  return theme === 'blue'
    ? calmingBlueTheme.palette.primary.main
    : theme === 'green'
      ? sereneGreenTheme.palette.primary.main
      : theme === 'purple'
        ? relaxingPurpleTheme.palette.primary.main
        : TranquilTealTheme.palette.primary.main;
};



export const getStyle = (userContextTheme) => {
  return {
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
    backgroundColor: getBackgroundColor(userContextTheme),
  };
};

const GetPostContainerBackGround = (theme) => {
  return theme === 'blue'
    ? calmingBlueTheme.palette.Post.containerBackground
    : theme === 'green'
      ? sereneGreenTheme.palette.Post.containerBackground
      : theme === 'purple'
        ? relaxingPurpleTheme.palette.Post.containerBackground
        : TranquilTealTheme.palette.Post.containerBackground
};
export const StatusBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 100px;
  left: 50%; 
  width: 800px;
  max-width: 900px;
  height: 90.01px;
  max-height: 100px;
  border-radius: 20px;
  background-color: ${props => MainButton(props.theme) || 'blue'};
  overflow: hidden;
  transform: translateX(-50%); 
`;

export const StatusBarContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
`;

export const StatusBarHeading = styled.h3`
  color: ${ProfileText};
  margin: 20px;
  font-weight: normal;
  overflow: hidden;
  white-space: nowrap; 
  position: fixed;
  top:-5px;
 
`;



export const StatusBarItems = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%; 
  overflow:hidden;
  position:relative;
  top:10px;


`;

export const StatusBarItem = styled.div`
  display: flex;
  align-items: center;
  margin-top:20px;
  margin-bottom:10px;
`;
export const ColoredHr = styled.div`
  border-bottom: 5px solid ${(props) => MainBorderColor(props.theme)};
  width: 100%;
  margin: 10px 0;
  position:relative;
  top:40px;
`;


export const StatusBarProfile = styled.img`
  width: 30.46px;
 
  height: 30px;
  border-radius: 50px;
  margin-right: 10px; 
  transition: opacity 0.3s ease;
  position:absolute;
  top:20px;
left:20px;
transform: scale(1.4);
  &:hover {
    opacity: 0.8;
  }
`;

export const PositionedMenu = styled(ColorLensIcon)`
color: ${ProfileText};

`;
export const PostContainer = styled.div`
  background: ${(props) => GetPostContainerBackGround(props.theme)};
  width: 800px;
  margin: ${(props) => (props.isFirst ? '120px' : '10px')} auto 10px auto; 
`;

export const PostProfilePic = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  margin: 10px;
  margin-right:50px; 
`;

export const PostContent = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ProfileHeadingPost = styled.p`
  margin: 10px; 
`;
export const CommentSection = styled.div`
  background: ${(props) => GetCommentSectionBackground(props.theme)};
  width: 800px;
  height: 50px;

    overflow: hidden;
`;
export const HeartContainer = styled.div`
  fill: none;
  stroke-width: 1px;
  stroke: ${props => GetLightHeartStroke(props.theme)};
  cursor: pointer;
  filter: drop-shadow(0px 0px 7px ${props => GetLightHeartFilter(props.theme)});
  display: flex;
  flex-direction: row;

`;


const animateHeart = (props) => keyframes`
  0% {
    stroke-dashoffset: 0;
  }

  40% {
    stroke-dashoffset: 67;
  }

  80% {
    stroke-dashoffset: 134;
    fill: transparent;
  }

  100% {
    stroke-dashoffset: 134;
    fill: ${GetLightHeartFill1(props.theme)};
  }
`;


export const AnimatedHeartPath = styled.path`
  stroke-dasharray: 67;
  stroke-dashoffset: 0;

  ${({ isClicked, theme }) => isClicked
    ? css`animation: ${animateHeart({ theme })} 3s linear forwards;`
    : null};
`;
export const HeartSVG = styled.svg`
  width: 30px;
  height: 30px;
  margin:10px;
`;

export const HeartPath = styled.path`
  stroke-dasharray: 67;
  stroke-dashoffset: 0;
  stroke-dashoffset: 134;
  fill: ${(props) => GetLightHeartFill1(props.theme)};
`;


export const CommentsHeading = styled.h2`
text-align:center;
  text-transform: capitalize;



`
export const CommentLine = styled.hr`

border: 2px solid ${props => MainBorderColor(props.theme)};
width: 100%;
position:absolute;
left:0

`

const loadingAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

// Styled components
export const LoadContainer = styled.div`
  display: flex; /* Use flexbox */
  justify-content: center; 
  align-items: center; 
  margin-top:20px;
`;

export const LoadingParagraph = styled.p`
  font-size: 18px;
  margin-left: 10px; /* Adjust spacing if needed */

`;

export const Ring = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid #ccc;
  border-top-color: ${props => GetRingColor(props.theme)};
  border-radius: 50%;
  animation: ${loadingAnimation} 1.5s 0.3s cubic-bezier(0.17, 0.37, 0.43, 0.67) infinite;
`;

export const CommentsProfilePic = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  margin: 10px;
  margin-right:20px; 
`;
export const CommentsDiv = styled.div`
  background: ${(props) => GetCommentSectionBackground(props.theme)};
  margin-top:10px;
  border-radius:10px;
  width:430px;




`

const fadeIn = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`;

export const PContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
`;
export const AnimatedContainer = styled.div`
animation: ${fadeIn} 1s ease-in-out; 
`;

export const ChatSideBarDiv = styled.div`
background-color: ${props => darken(0.10, MainButton(props.theme))};

width: ${props => (props.width ? '460px' : '370px')};
  height: 100vh;
`;
export const ChatHeader = styled.div`
flex: 1; 
height: 50px;
background-color: ${props => MainButton(props.theme) || 'BLUE'};
overflow:hidden;
`;

export const ContainerChat = styled.div`

display:flex;
flex-direction: row;

`
export const ProfileImgChatRoom = styled.img`
height:40px;
border-radius:50%;
width:50px;
margin-left:50px;
margin-top:10px;


`

export const ChatHeading = styled.h3`
color:${ProfileText};
margin-left:120px;
margin-top:-40px;
text-transform: capitalize;


`
export const SideBarChat = styled.h1`
color:${ProfileText};
margin-left:20px;
margin-top:30px;
margin-bottom:20px;
font-size:36px;
font-weight:normal;



`

export const StyledSearchIcon = styled(FontAwesomeIcon)`
  position: absolute;
  right: 40px;
  top: 45px;
  color: #005f7f; 
  font-size:2x;
`;


export const ChatBox = styled.div`
  width: 340px;
  height: 70px;
  background: ${(props) => (props.isClicked ? MainProfileHover(props.theme) : GetCommentSectionBackground(props.theme))};
  border-radius: 10px;
  position: relative;
  left: 20px;
  margin-bottom: 20px;
  margin-top: 20px;
  color: ${ProfileText};  

  &:focus {
    background-color: red;
  }
`;


export const ChatSearchInputField = styled.input`

margin: auto;
display: block;
width:300px;
height:32px;
border-radius:50px;
border:none;
background-color: ${props => MainSideBar(props.theme) || 'BLUE'};
font-size:20px;
padding-left: 35px;
padding-right:20px;




`

export const SearchIcon = styled(FontAwesomeIcon)`
  position: relative;
bottom:27px;
left:20px;

`;
export const ChatFooterBar = styled.div`
  width: 100%;
  height: 50px;
  position: absolute;
  bottom: 0;
  background-color: ${darken(0.10, '#B3C9E8')};
  margin-top:200px;
`;
export const ChatInput = styled.input`

position: relative;
left:200px;
margin-top:10px;
width:60%;
border-radius: 10px;
height:35px;
border:none;
background-color: ${props => MainSideBar(props.theme) || 'BLUE'};

font-size:20px;

`
export const MessageConversation=styled.div`

color:black;
background-color: ${(props) => props.sender ? GetCommentSectionBackground(props.theme) : MainHover(props.theme)};
max-width:50%;
min-width:100px;
min-height:30px;
max-height:50%;
text-align:center;
border-radius:10px;
margin-top:10px;
margin-left:20px;
margin-bottom: ${(props) => (props.isLast ? '100px' : '1px')};
margin-right:20px;




`
export const MessageProfilePic=styled.img`
width:50px;
height:50px;
margin-top:20px;
margin-left:20px;
`

export const SendIcon=styled(FontAwesomeIcon)`
position:absolute;
font-size:40px;
right:480px;
top:10px;



`