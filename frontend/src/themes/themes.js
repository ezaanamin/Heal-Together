import { createTheme } from '@mui/material/styles';

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#f2f2f2',
    },
    text: {
      primary: '#333333',
    },
    action: {
      hover: '#e0e0e0',
    },
    borderLine: {
      backgroundColor: '#999999',
    },
    Comments:{
      backgroundColor:"#CCCCCC"
    },
    CommentsHover:{
      backgroundColor:"#d4d6d9"
    },
    ButtonActive:{
      backgroundColor:" #0000001A"
    },
  },


  overrides: {
    MuiButton: {
      root: {
        borderColor: '#d9d9d9',
      },
    },
  },
});


const calmingBlueTheme = createTheme({
  palette: {
    primary: {
      main: '#6ea8d9',
    },
    secondary: {
      main: '#b3c9e8',
    },
    text: {
      primary: '#333333',
    },
    action: {
      hover: '#8bb5e8',
    },
   
  borderLine: {
    backgroundColor: '#4277a8',
  },
  Comments:{
    backgroundColor:"#5c8fbf"
  },
  CommentsHover:{
    backgroundColor:"#8bb5e8"
  },
  ButtonActive:{
    backgroundColor:"#005f7f"
  },

  },

  overrides: {
    MuiButton: {
      root: {
        backgroundColor: '#8bb5e8',
      },
    },
  },
});


const sereneGreenTheme = createTheme({
  palette: {
    primary: {
      main: '#8fd9a6',
    },
    secondary: {
      main: '#c9e8c1',
    },
    text: {
      primary: '#333333',
    },
    action: {
      hover: '#a8e89e',
    },
    borderLine: {
      backgroundColor: '#6bb681',
    },
    Comments:{
      backgroundColor:"#7dbf6b"
    },
    CommentsHover:{
      backgroundColor:"#a8e89e"
    },
    ButtonActive:{
      backgroundColor:" #387d3a"
    },
  },



  overrides: {
    MuiButton: {
      root: {
        backgroundColor: '#a8e89e',
      },
    },
  },
});


const relaxingPurpleTheme = createTheme({
  palette: {
    primary: {
      main: '#b39ed9',
    },
    secondary: {
      main: '#d9c1e8',
    },
    text: {
      primary: '#333333',
    },
    action: {
      hover: '#c18ae8',
    },
    borderLine: {
      backgroundColor: '#906db3',
    },
    Comments:{
      backgroundColor:"#8a5fbf"
    },
    CommentsHover:{
      backgroundColor:"#c18ae8"
    },
    ButtonActive:{
      backgroundColor:"#5c005c"
    },
  },


  overrides: {
    MuiButton: {
      root: {
        backgroundColor: '#c18ae8',
      },
    },
  },
});



export { defaultTheme, calmingBlueTheme, sereneGreenTheme, relaxingPurpleTheme };
