import React, { useEffect } from 'react';
import styled from 'styled-components';
import { makeStyles } from "@material-ui/core/styles";
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoIcon from '@mui/icons-material/Photo';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import { UserContext } from '../Context/context';
import { useContext } from 'react';
import FemaleAvatar from "../images/user_default_female.png"
import MaleAvatar from "../images/user_default_male.png"

const StatusBar = () => {
  const useStyles = makeStyles(theme => ({
    textarea: {
      resize: "both",
      height: "100%",
      width: "800px",
    }
  }));

  const classes = useStyles();

  const {

    SetCreatePost,
    theme,
  
    UserGender,
  } = useContext(UserContext);

  const StyledStatusBar = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    width: 700px;
    position: fixed;
    top: 200px;
    height: 100px;
    left: 50%;
    transform: translateX(-50%);
    overflow-x: hidden;
  `;

  const StatusBarButton = styled.button`
    width: 600px;
    background-color: ${props => props.theme === 'light' ? '#f0f2f5' : '#3a3b3c'};
    height: 50px;
    border-radius: 50px;
    &:hover {
      background-color: ${props => props.theme === 'light' ? '#e1e3e6' : '#a0a29d'};
    }
    border: none;
  `;

  const StatusBarHeading = styled.h1`
    color: white;
    font-size: 18px;
    position: relative;
    right: 130px;
  `;

  const StatusBarItems = styled.div`
    display: flex;
    flex-direction: row;
  `;

  const Profile = styled.img`
    height: 50px;
    border-radius: 50px;
    position: absolute;
    left: 0;
    top: 5px;
  `;

  const LightMainContainer = styled(StyledStatusBar)`
    background-color: #fff;
  `;

  const BlueMainContainer = styled(StyledStatusBar)`
    background-color: #b3c9e8 ;
  `;
  const GreenMainContainer = styled(StyledStatusBar)`
    background-color: #c9e8c1 ;
  `;
  const PurpleMainContainer = styled(StyledStatusBar)`
  background-color: #c18ae8 ;
`;

  const LightStatusBar = styled(StatusBarButton)`
    background-color: #f0f2f5;
    &:hover {
      background-color: #e1e3e6;
    }
  `;

  const BlueStatusBar = styled(StatusBarButton)`
    background-color: #5c8fbf;
    &:hover {
      background-color:#8bb5e8 ;
    }
  `;
  const GreenStatusBar = styled(StatusBarButton)`
  background-color:#7dbf6b;
  &:hover {
    background-color: #a8e89e;
  }
`;
const PurpleStatusBar = styled(StatusBarButton)`
background-color: #8a5fbf;
&:hover {
  background-color: #c18ae8;
}
`;

const GreenColor=styled(StatusBarHeading)`

color:#FFFFFF

`
const BlueColor=styled(StatusBarHeading)`
color:#FFFFFF


`
const LightColor=styled(StatusBarHeading)`

color:#333333

`
const PurpleColor=styled(StatusBarHeading)`
color:#333333



`

const MainText =
  theme === 'light' ? LightColor :
  theme === 'blue' ? BlueColor :
  theme === 'green' ? GreenColor :
  theme === 'purple' ? PurpleColor :LightColor 


const MainContainer =
  theme === 'light' ? LightMainContainer :
  theme === 'blue' ? BlueMainContainer :
  theme === 'green' ? GreenMainContainer :
  theme === 'purple' ? PurpleMainContainer :LightMainContainer 

const MainStatus =
  theme === 'light' ? LightStatusBar :
  theme === 'blue' ? BlueStatusBar :
  theme === 'green' ? GreenStatusBar :
  theme === 'purple' ? PurpleStatusBar : LightMainContainer;

  // useEffect(()=>{

  //   alert(UserGender)
  // },[])


  return (
    <>
    <MainContainer>
      <MainStatus onClick={() => SetCreatePost(true)} theme={theme}>
        <StatusBarItems>
          {
            UserGender=="Male"?
                  <Profile src={MaleAvatar}/>:
                  <Profile src={FemaleAvatar}/>



          }
        </StatusBarItems>
        <MainText>
          Share Your Thoughts, Feel Heard!
        </MainText>
      </MainStatus>
      <hr style={{ width: 650, marginTop: 5 }} />
      <StatusBarItems>
        <VideocamIcon fontSize="large" style={{ color: "#f02849", marginRight: 200 }} />
        <PhotoIcon fontSize="large" style={{ color: "#45bd62", marginRight: 200 }} />
        <TagFacesIcon style={{ color: "#f7b928" }} fontSize="large" />
      </StatusBarItems>
      </MainContainer>
    </>
  );
}

export default StatusBar;
