import React, { useState } from 'react';
import logo from "../images/HEAL TOGETHER-1 (3).png";
import { Box, TextField, IconButton } from '@mui/material';
import styled from 'styled-components';
import SearchBar from "material-ui-search-bar";
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import PersonIcon from '@mui/icons-material/Person';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import AddIcon from '@mui/icons-material/Add';
import MessageIcon from '@mui/icons-material/Message';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ChatIcon from '@mui/icons-material/Chat';
import { useContext } from 'react';
import { UserContext } from '../Context/context';
import { makeStyles } from '@mui/styles';
import Person2Icon from '@mui/icons-material/Person2';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PositionedMenu from './PositionedMenu';

const SideBar = () => {
  const [searchBar, SetSearchBar] = useState(false);
  const [icons, setIcons] = useState(1);
  const [anchorEl, setAnchorEl] = useState(null); // State to control the menu anchor

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const {

    theme,
    setTheme 
  } = useContext(UserContext);

  const SideBarContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 500px;
    background-color: white;
  `;

  const Logo = styled.img`
    height: 150px;
    width: 150px;
    margin-bottom: 20px;
  `;

  const SideBarItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    margin-top:auto; 
  `;

  const SideRight = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: auto;
    padding-bottom: 20px;
  `;

  const Mode = styled.img`
    width: 50px;
    height: 50px;
  `;

  const LightMainContainer = styled(SideBarContainer)`
    background-color: #CCCCCC;
  `;

  const BlueMainContainer = styled(SideBarContainer)`
    background-color: #e1f0f8;
  `;

  const GreenMainContainer = styled(SideBarContainer)`
    background-color: #e8f5e9;
  `;

  const PurpleMainContainer = styled(SideBarContainer)`
    background-color: #f2e8f5;
  `;

  const IconHeading = styled.p`
    margin-left: 10px;
  `;

  const MainComponent =
    theme === 'blue' ? BlueMainContainer :
    theme === 'green' ? GreenMainContainer :
    theme === 'purple' ? PurpleMainContainer :
    theme === 'light' ? LightMainContainer : LightMainContainer;

  const useStyles = makeStyles(() => ({
    searchBar: {
      width: 180,
      borderRadius: 50,
      marginBottom: 20,
    },
  }));

  const classes = useStyles();

  return (
    <MainComponent>
      <Logo src={logo} />
      <SideBarItems>
        <IconButton style={{ marginBottom: 10 }}>
          <HomeIcon fontSize="large" />
          <IconHeading>Home</IconHeading>
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
          <IconHeading>Profile</IconHeading>
        </IconButton>

        <div style={{ marginBottom: 10 }}>
          <PositionedMenu />
        </div>
      </SideBarItems>

      <SideRight>
        {/* Rest of the content in the SideBar */}
      </SideRight>
    </MainComponent>
  );
};

export default SideBar;
