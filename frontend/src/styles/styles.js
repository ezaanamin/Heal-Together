import styled from "styled-components";
import { relaxingPurpleTheme,sereneGreenTheme,defaultTheme,calmingBlueTheme } from "../themes/themes"
import { useContext } from "react";
import { UserContext } from "../Context/context";
import { makeStyles } from '@material-ui/core/styles';
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
  const { theme } = useContext(UserContext);

  const selectedTextColor =
    theme === 'light' ? LightTextColor :
    theme === 'blue' ? BlueTextColor :
    theme === 'green' ? GreenTextColor :
    theme === 'purple' ? PurpleTextColor :
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
export const GetMainBackGround = (theme) => {
  return theme === 'light' ? LightMainContainer :
    theme === 'blue' ? BlueMainContainer :
    theme === 'green' ?  GreenMainContainer  :
    theme === 'purple' ?  PurpleMainContainer:
    LightMainContainer; 
};

export const EditCoverPhoto = styled.img`
width: 600px;
height: 150px;
position: relative;
left: 0px;
top: 0;
transition: opacity 0.3s;
opacity: 0.2;
border:0px;
`;

export const NameDiv = styled.div`

position:relative;
left:130px;
margin-bottom:25px;


`
export const GetEditProfilePhoto = (theme) => styled.img`
  border-radius: 150px;
  height: 100px;
  width: 100px;
  position: absolute;
  left: 80px;
  top: 250px;
  z-index: 1;
  border: 4px solid ${MainBorderColor(theme)}; 
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




