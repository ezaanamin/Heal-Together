import { createTheme } from '@mui/material/styles';

const TranquilTealTheme = createTheme({
  palette: {
    primary: {
      main: '#FFC0CB', // Pastel Pink
    },
    secondary: {
      main: '#E6E6FA', // Pastel Lavender
    },
    text: {
      primary: '#4E342E', // Brown
    },
    action: {
      hover: '#FFDAB9', // Peach (lighter)
    },
    borderLine: {
      backgroundColor: '#D8BFD8', // Lavender (lighter)
    },
    Comments: {
      backgroundColor: '#FFECB3', // Peach (lighter)
    },
    CommentsHover: {
      backgroundColor: '#FFE082', // Peach (lighter)
    },
    ButtonActive: {
      backgroundColor: '#FFDAB9', // Peach (lighter)
    },
    SideBar: {
      backgroundColor: '#E6E6FA', // Pastel Lavender
    },
    Post: {
      containerBackground: '#FFFFFF',
      textPrimary: '#4E342E', // Brown
      borderLine: '#D8BFD8', // Lavender (lighter)
    },
  },
  overrides: {
    MuiButton: {
      root: {
        borderColor: '#8D6E63', // Brown (darker)
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
  SideBar:{
    backgroundColor:"#e1f0f8"
  },
Post:{
  containerBackground: '#b3c9e8',
  textPrimary: '#333333',
  borderLine: '#4277a8',
}
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
    SideBar:{
      backgroundColor:"#e8f5e9"
    },
    Post:{
      containerBackground: '#c9e8c1',
      textPrimary: '#333333',
      borderLine: '#6bb681',
    }
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
    SideBar:{
      backgroundColor:"#f2e8f5"
    },
    Post:{
      
        containerBackground: '#d9c1e8',
        textPrimary: '#333333',
        borderLine: '#906db3',
    
    }
  },


  overrides: {
    MuiButton: {
      root: {
        backgroundColor: '#c18ae8',
      },
    },
  },
});



export { TranquilTealTheme, calmingBlueTheme, sereneGreenTheme, relaxingPurpleTheme };
