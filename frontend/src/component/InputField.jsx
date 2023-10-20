import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../Context/context';
import { TextField } from '@mui/material';
import { defaultTheme,calmingBlueTheme,sereneGreenTheme,relaxingPurpleTheme } from '../themes/themes'

const InputField = ({name,label,type,changedText,value}) => {

    const {theme}=useContext(UserContext)

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
    theme === 'blue' ? calmingBlueTheme.palette.primary.main :
              theme === 'green' ? sereneGreenTheme.palette.primary.main :
              theme === 'purple' ? relaxingPurpleTheme.palette.primary.main :
              theme === 'light' ? defaultTheme.palette.primary.main
              :
              defaultTheme.palette.primary.main,
    color:
    theme === 'blue' ? calmingBlueTheme.palette.text.primary :
              theme === 'green' ? sereneGreenTheme.palette.text.primary  :
              theme === 'purple' ? relaxingPurpleTheme.palette.text.primary  :
              theme === 'light' ? defaultTheme.palette.text.primary 
              :
              defaultTheme.palette.text.primary ,
    border: '3px solid',
    borderColor:
    theme === 'blue' ? calmingBlueTheme.palette.borderLine.backgroundColo :
              theme === 'green' ? sereneGreenTheme.palette.borderLine.backgroundColor :
              theme === 'purple' ? relaxingPurpleTheme.palette.borderLine.backgroundColor :
              theme === 'light' ? defaultTheme.palette.borderLine.backgroundColor
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
        theme === 'light' ? '#333333' :
        theme === 'blue' ? '#FFFFFF' :
        theme === 'green' ? '#c9e8c1' :
        theme === 'purple' ? '#FFFFFF' : '#333333',
      textTransform: 'capitalize',
    },
  }}
  />
        
        </>

    );
}

export default InputField;
