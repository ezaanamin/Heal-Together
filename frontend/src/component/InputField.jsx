import React from 'react';
import { useContext } from 'react';
import { UserContext } from "../contextState/contextState";
import { TextField } from '@mui/material';
import { TranquilTealTheme, calmingBlueTheme, sereneGreenTheme, relaxingPurpleTheme } from '../themes/themes';

const InputField = ({ name, label, type, changedText, value }) => {
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
              userContext.theme === 'light' ? TranquilTealTheme.palette.primary.main :
              TranquilTealTheme.palette.primary.main,
          color:
            userContext.theme === 'blue' ? calmingBlueTheme.palette.text.primary :
              userContext.theme === 'green' ? sereneGreenTheme.palette.text.primary :
              userContext.theme === 'purple' ? relaxingPurpleTheme.palette.text.primary :
              userContext.theme === 'light' ? TranquilTealTheme.palette.text.primary :
              TranquilTealTheme.palette.text.primary,
          border: '3px solid',
          borderColor:
            userContext.theme === 'blue' ? calmingBlueTheme.palette.borderLine.backgroundColor :
              userContext.theme === 'green' ? sereneGreenTheme.palette.borderLine.backgroundColor :
              userContext.theme === 'purple' ? relaxingPurpleTheme.palette.borderLine.backgroundColor :
              userContext.theme === 'light' ? TranquilTealTheme.palette.borderLine.backgroundColor :
              TranquilTealTheme.palette.borderLine.backgroundColor,
          borderRadius: 5,
          display: "flex",
          justifyContent: 'center',
          marginBottom: 2,
          width: 700, // Adjust the width for all screens
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
      <style>
        {`
          @media screen and (max-device-width: 480px) {
            .MuiTextField-root {
              width: 400px;
            }
           
          }
        `}
      </style>
    </>
  );
}

export default InputField;

