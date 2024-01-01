import { createTheme } from '@mui/material/styles';

const TranquilTealTheme = createTheme({
  palette: {
    primary: {
      main: '#FFC0CB',
    },
    secondary: {
      main: '#E6E6FA',
    },
    text: {
      primary: '#4E342E',
    },
    action: {
      hover: '#FFDAB9',
    },
    borderLine: {
      backgroundColor: '#4277A8',
    },
    Comments: {
      backgroundColor: '#FFECB3',
    },
    CommentsHover: {
      backgroundColor: '#FFE082',
    },
    ButtonActive: {
      backgroundColor: '#FFDAB9',
    },
    SideBar: {
      backgroundColor: '#E6E6FA',
    },
    Post: {
      containerBackground: '#FFFFFF',
      textPrimary: '#4E342E',
      borderLine: '#D8BFD8',
    },
    statusBar: {
      backgroundColor: '#B2DFDB',
      inputBackground: '#E0F7FA',
    },
  },
  overrides: {
    MuiButton: {
      root: {
        borderColor: '#8D6E63',
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
    Comments: {
      backgroundColor: '#5c8fbf',
    },
    CommentsHover: {
      backgroundColor: '#8bb5e8',
    },
    ButtonActive: {
      backgroundColor: '#005f7f',
    },
    SideBar: {
      backgroundColor: '#e1f0f8',
    },
    Post: {
      containerBackground: '#b3c9e8',
      textPrimary: '#333333',
      borderLine: '#4277a8',
    },
    statusBar: {
      backgroundColor: '#90CAF9',
      inputBackground: '#BBDEFB',
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
    Comments: {
      backgroundColor: '#7dbf6b',
    },
    CommentsHover: {
      backgroundColor: '#a8e89e',
    },
    ButtonActive: {
      backgroundColor: '#387d3a',
    },
    SideBar: {
      backgroundColor: '#e8f5e9',
    },
    Post: {
      containerBackground: '#c9e8c1',
      textPrimary: '#333333',
      borderLine: '#6bb681',
    },
    statusBar: {
      backgroundColor: '#A5D6A7',
      inputBackground: '#C8E6C9',
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
    Comments: {
      backgroundColor: '#8a5fbf',
    },
    CommentsHover: {
      backgroundColor: '#c18ae8',
    },
    ButtonActive: {
      backgroundColor: '#5c005c',
    },
    SideBar: {
      backgroundColor: '#f2e8f5',
    },
    Post: {
      containerBackground: '#d9c1e8',
      textPrimary: '#333333',
      borderLine: '#906db3',
    },
    statusBar: {
      backgroundColor: '#CE93D8',
      inputBackground: '#E1BEE7',
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


export { TranquilTealTheme, calmingBlueTheme, sereneGreenTheme, relaxingPurpleTheme };
