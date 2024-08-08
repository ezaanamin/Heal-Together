import React from 'react';
// import VideocamIcon from '@mui/icons-material/Videocam';
// import PhotoIcon from '@mui/icons-material/Photo';
// import TagFacesIcon from '@mui/icons-material/TagFaces';
// import styled from 'styled-components';
import { useContext } from 'react';
import FemaleAvatar from "../images/user_default_female.png"
import MaleAvatar from "../images/user_default_male.png"
import { ColoredHr,StatusBarContent, StatusBarHeading, StatusBarItems, StatusBarProfile,StatusBarItem,StatusBarContainer } from '../styles/styles';
import { UserContext } from '../contextState/contextState';
// import Profile from "../images/beautiful-woman-street.jpg"
import Icon1 from "../images/StatusBarIcon1.png"
import Icon2 from "../images/StatusBarIcon2.png"
import Icon3 from "../images/StatusBarIcon3.png"
const StatusBar = () => {



  const userContext = useContext(UserContext);
  // const { SetCreatePost } = userContext;
  // useEffect(()=>{

  //   alert(profile_pic)
  // },[])
  return (
    <>
      <StatusBarContainer>
        <StatusBarContent>
          <a href={`/${userContext.UserUsername}`}>
            <StatusBarProfile
            src={`http://localhost:4000/upload/${userContext.profile_pic}`}
            />
          </a>
          <StatusBarHeading placeholder='    Share Your Thoughts, Feel Heard!' theme={userContext.theme}>
        
          </StatusBarHeading>
        </StatusBarContent>

        <ColoredHr theme={userContext.theme} />

         <StatusBarItems>
          <StatusBarItem>
            <img
              style={{ width: 30, height: 30, marginLeft: 20, marginBottom: 5, marginTop: 5 }}
              src={Icon1}
              alt="Icon 1"
            />
          </StatusBarItem>
          <StatusBarItem>
            <img
              style={{ width: 30, height: 30, marginRight: 20, marginBottom: 5, marginTop: 5 }}
              src={Icon2}
              alt="Icon 2"
            />
          </StatusBarItem>
          <StatusBarItem>
            <img
              style={{ width: 30, height: 30, marginRight: 20, marginBottom: 5, marginTop: 5 }}
              src={Icon3}
              alt="Icon 3"
            />
          </StatusBarItem>
        </StatusBarItems> 
      </StatusBarContainer>
      </>
  )
}

export default StatusBar;
// background-color: ${props => MainProfile(props.theme) || 'BLUE'};