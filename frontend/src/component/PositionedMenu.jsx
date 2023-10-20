import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import styled from "styled-components"
import { UserContext } from '../Context/context';
import { useContext } from 'react';
import ModalTheme from './ModalTheme';
import { defaultTheme,calmingBlueTheme,sereneGreenTheme,relaxingPurpleTheme } from '../themes/themes'

const FunctionalComponent = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const {

    theme,

    ColorTheme,SetColorTheme,  
  } = useContext(UserContext);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const IconHeading = styled.p`
  margin-left: 10px;
`;

const LightMainContainer = styled(ColorLensIcon)`
color: ${defaultTheme.palette.text.primary};

`;

const BlueMainContainer = styled(ColorLensIcon)`
color: ${calmingBlueTheme.palette.text.primary};

`;
const GreenMainContainer = styled(ColorLensIcon)`
color: ${sereneGreenTheme.palette.text.primary};

`;
const PurpleMainContainer = styled(ColorLensIcon)`
color: ${relaxingPurpleTheme.palette.text.primary};

`;



const MainContainer =
  theme === 'light' ? LightMainContainer :
  theme === 'blue' ? BlueMainContainer :
  theme === 'green' ? GreenMainContainer :
  theme === 'purple' ? PurpleMainContainer :LightMainContainer 


  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        {
          ColorTheme?
          <ModalTheme/>:
          null
        }
     
        <IconButton
          size="small"
          aria-label="more"
          id="long-button"
          aria-controls="long-menu"
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleClick}

        >
          <MoreHorizIcon           fontSize="large" />
          <IconHeading>More</IconHeading>
        </IconButton>
      </Box>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
      >
        <MenuItem onClick={()=>SetColorTheme(true)} >
     
          <MainContainer onClick={()=>SetColorTheme(true)}  fontSize='large'/>
          Therapy Mode Theme
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
     
          </ListItemIcon>
    
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
        
          </ListItemIcon>
        
        </MenuItem>
      </Menu>
    </>
  );
};

export default FunctionalComponent;
