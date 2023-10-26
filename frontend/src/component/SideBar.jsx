import React  from 'react';
import logo from "../images/HealTogether_Logo2_transparent.png";
import {IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ChatIcon from '@mui/icons-material/Chat';
import { useContext } from 'react';
import { UserContext } from "../contextState/contextState";
import Person2Icon from '@mui/icons-material/Person2';
import PositionedMenu from './PositionedMenu';
import LoginModal from './LoginModal';
import { useEffect } from 'react';
import SignUpModal from './SignUpModal';
import FemaleAvatar from "../images/user_default_female.png"
import MaleAvatar from "../images/user_default_male.png"
import { useNavigate } from 'react-router-dom';
import { decodeToken, } from 'react-jwt';
import {Link,} from "react-router-dom";
import { SideBarLogo,SideBarProfile,SideBarItems,SideRight,SideBarContainer,IconHeading,SideBarUserHeading } from '../styles/styles';
const SideBar = () => {
  const nav = useNavigate();
 
  const userContext = useContext(UserContext);
  const { SetUserFirstName,SetUserGender,SetUserSurName,SetUserUsername } = userContext;

  useEffect(() => {
    const userFirstName = localStorage.getItem('UserFirstName');
    const userSurName = localStorage.getItem('UserSurName');
    const userGender = localStorage.getItem('UserGender');
    const userUsername = localStorage.getItem('UserUsername');

    if(userFirstName || userGender || userSurName || userUsername)
    {
      SetUserFirstName(userFirstName);
      SetUserSurName(userSurName);
      SetUserGender(userGender);
      SetUserUsername(userUsername)
    }
  
  }, []);
  useEffect(() => {
    const token = localStorage.getItem('Token');
    if (token) {
      const expirationTime = decodeToken(token).exp * 1000;
      const expiration = decodeToken(token)

      console.log(expiration,'ezaan')

      if (Date.now() > expirationTime) {
        localStorage.removeItem('Token');
      } else {
        const timeoutId = setTimeout(() => {
          localStorage.removeItem('Token');
          nav('/');
        }, expirationTime - Date.now());

        return () => clearTimeout(timeoutId);
      }
    }
  }, []);
  return (
    <SideBarContainer theme={userContext.theme}>
      <LoginModal/>
      <SignUpModal/>

      <SideBarLogo src={logo} />
      <SideBarItems>
        <IconButton style={{ marginBottom: 10 }}>
          <HomeIcon fontSize="large" />
          {            <Link to={`/home`}>

          <IconHeading>Home</IconHeading>

          </Link>

          }
        </IconButton>
        <IconButton style={{ marginBottom: 10 }}>
          <ChatIcon fontSize="large" />
          <IconHeading>Message</IconHeading>
        </IconButton>
        <IconButton style={{ marginBottom: 10 }}>
          <PeopleAltIcon fontSize="large" />
          <IconHeading>Connection</IconHeading>
        </IconButton>
        <IconButton style={{ marginBottom: 10 }}>
          <Person2Icon fontSize='large' />
          {
            <Link to={`/${userContext.UserUsername}`}>

            <IconHeading>Profile</IconHeading>
            </Link>

          }
    
        </IconButton>

        <div style={{ marginBottom: 10 }}>
          <PositionedMenu />
        </div>
      </SideBarItems>

      <SideRight>
      {
        userContext.UserGender==="Male"?
                  <SideBarProfile src={MaleAvatar}/>:
                  <SideBarProfile src={FemaleAvatar}/>



          }

<SideBarUserHeading>{userContext.UserFirstName}  {userContext.UserSurName}</SideBarUserHeading>

      </SideRight>
    </SideBarContainer>
  );
};

export default SideBar;
