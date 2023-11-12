import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import { UserContext } from '../contextState/contextState';
import { useContext } from 'react';
import ModalTheme from './ModalTheme';
import { IconHeading,PositionedMenu } from '../styles/styles';

const FunctionalComponent = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

    const userContext = useContext(UserContext);
    const {SetColorTheme} = userContext
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        {
          userContext.ColorTheme?
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
     
          <PositionedMenu onClick={()=>SetColorTheme(true)}  fontSize='large'/>
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
