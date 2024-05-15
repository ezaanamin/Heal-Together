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
import { GetUsersInformation } from '../redux/slice/API';
import { SideBarLogo,SideBarProfile,SideBarItems,SideRight,SideBarContainer,IconHeading,SideBarUserHeading } from '../styles/styles';
import { useDispatch } from 'react-redux';
const SideBar = () => {
  const nav = useNavigate();
 
  const userContext = useContext(UserContext);
  const { SetUserFirstName,SetUserProfilePic,SetUserSurName,SetUserUsername } = userContext;
  const dispatch=useDispatch()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('Token');
        console.log(token, 'ezaan amin');
    
        // Check if token exists before dispatching the action
        if (token) {
          const promise = await dispatch(GetUsersInformation(token));
  
          if (promise && promise.payload) {
            console.log( promise.payload,'amin')
            const { firstname, surname, profile_pic,username } = promise.payload;
  
            // Set local storage values
            localStorage.setItem('UserFirstName', firstname);
            localStorage.setItem('UserSurName', surname);
            localStorage.setItem('profile_pic', profile_pic);
            localStorage.setItem('UserUsername', username);
  
            // Set state variables if values are not empty
            if (firstname || surname || profile_pic || username) {
              SetUserFirstName(firstname);
              SetUserSurName(surname);
              SetUserProfilePic(profile_pic);
              SetUserUsername(username);
            }
          }
        } else {
          console.error('Token not found in local storage');
        }
      } catch (error) {
        // Handle any errors
        console.error('Error fetching user information:', error);
      }
    };
  
    // Call the fetchData function
    fetchData();
  }, [dispatch]);
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
          {            <Link to={`/chatroom`}>

          <IconHeading>Message</IconHeading>
          </Link>

          }
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
      
                  <SideBarProfile src={`http://localhost:4000/upload/${userContext.profile_pic}`}/>




          

<SideBarUserHeading>{userContext.UserFirstName}  {userContext.UserSurName}</SideBarUserHeading>

      </SideRight>
    </SideBarContainer>
  );
};

export default SideBar;
