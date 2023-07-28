import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../Context/context';
import { TextField } from '@mui/material';
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
      theme === 'light' ? '#CCCCCC' :
      theme === 'blue' ? '#b3c9e8' :
      theme === 'green' ? '#c9e8c1' :
      theme === 'purple' ? '#d9c1e8' : '#CCCCCC',
    color:
      theme === 'light' ? '#333333' :
      theme === 'blue' ? '#FFFFFF' :
      theme === 'green' ? '#c9e8c1' :
      theme === 'purple' ? '#FFFFFF' : '#333333',
    border: '3px solid',
    borderColor:
      theme === 'light' ? ' #f0f0f0' :
      theme === 'blue' ? '#5c8fbf' :
      theme === 'green' ? ' #7dbf6b' :
      theme === 'purple' ? '#8a5fbf' : ' #f0f0f0',
    borderRadius: 50,
    display: "flex",
    justifyContent: 'center',
    marginBottom:2
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
