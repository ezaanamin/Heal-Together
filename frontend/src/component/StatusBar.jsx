import React from 'react';
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoIcon from '@mui/icons-material/Photo';
import TagFacesIcon from '@mui/icons-material/TagFaces';

import { useContext } from 'react';
import FemaleAvatar from "../images/user_default_female.png"
import MaleAvatar from "../images/user_default_male.png"
import { StyledStatusBar, StatusBarButton, StatusBarHeading, StatusBarItems, StatusBarProfile } from '../styles/styles';
import { UserContext } from '../contextState/contextState';

const StatusBar = () => {

  const userContext = useContext(UserContext);
  const { SetCreatePost } = userContext;
  // useEffect(()=>{

  //   alert(UserGender)
  // },[])
  return (
    <>
      <StyledStatusBar theme={userContext.theme} >
        <StatusBarButton theme={userContext.theme} onClick={() => SetCreatePost(true)}>
          <StatusBarItems>
            {
              userContext.UserGender === "Male" ?
                <StatusBarProfile src={MaleAvatar} /> :
                <StatusBarProfile src={FemaleAvatar} />



            }
          </StatusBarItems>
          <StatusBarHeading>
            Share Your Thoughts, Feel Heard!
          </StatusBarHeading>
        </StatusBarButton>
        <hr style={{ width: 650, marginTop: 5 }} />
        <StatusBarItems>
          <VideocamIcon fontSize="large" style={{ color: "#f02849", marginRight: 200 }} />
          <PhotoIcon fontSize="large" style={{ color: "#45bd62", marginRight: 200 }} />
          <TagFacesIcon style={{ color: "#f7b928" }} fontSize="large" />
        </StatusBarItems>
      </StyledStatusBar>
    </>
  );
}

export default StatusBar;
