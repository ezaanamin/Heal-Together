import React from 'react';
import { useContext } from 'react';
import { UserContext } from "../contextState/contextState"
import { TextField } from '@mui/material';
import { defaultTheme,calmingBlueTheme,sereneGreenTheme,relaxingPurpleTheme } from '../themes/themes'
const InputField = ({name,label,type,changedText,value}) => {
  const userContext = useContext(UserContext);

    return (
        <>
<TextField
  label={label}
  type={type}
  onChange={changedText}
  value={value}
  name={name}
  sx={{
    backgroundColor:
    userContext.theme === 'blue' ? calmingBlueTheme.palette.primary.main :
              userContext.theme === 'green' ? sereneGreenTheme.palette.primary.main :
              userContext.theme === 'purple' ? relaxingPurpleTheme.palette.primary.main :
              userContext.theme === 'light' ? defaultTheme.palette.primary.main
              :
              defaultTheme.palette.primary.main,
    color:
    userContext.theme === 'blue' ? calmingBlueTheme.palette.text.primary :
              userContext.theme === 'green' ? sereneGreenTheme.palette.text.primary  :
              userContext.theme === 'purple' ? relaxingPurpleTheme.palette.text.primary  :
              userContext.theme === 'light' ? defaultTheme.palette.text.primary 
              :
              defaultTheme.palette.text.primary ,
    border: '3px solid',
    borderColor:
    userContext.theme === 'blue' ? calmingBlueTheme.palette.borderLine.backgroundColo :
              userContext.theme === 'green' ? sereneGreenTheme.palette.borderLine.backgroundColor :
              userContext.theme === 'purple' ? relaxingPurpleTheme.palette.borderLine.backgroundColor :
              userContext.theme === 'light' ? defaultTheme.palette.borderLine.backgroundColor
              :
              defaultTheme.palette.borderLine.backgroundColor,
    borderRadius: 50,
    display: "flex",
    justifyContent: 'center',
    marginBottom:2,
    width:700
  }}
  InputLabelProps={{
    sx: {
      color:
        userContext.theme === 'light' ? '#333333' :
        userContext.theme === 'blue' ? '#FFFFFF' :
        userContext.theme === 'green' ? '#c9e8c1' :
        userContext.theme === 'purple' ? '#FFFFFF' : '#333333',
      textTransform: 'capitalize',
    },
  }}
  />
        
        </>

    );
}

export default InputField;
