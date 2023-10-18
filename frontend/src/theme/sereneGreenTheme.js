import { createTheme } from '@material-ui/core/styles';

const sereneGreenTheme = createTheme({
  palette: {
    primary: {
      main: '#8fd9a6', // Tranquil light green
    },
    secondary: {
      main: '#c9e8c1', // Accent color for buttons
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    // Customize typography settings like font size, line height, and more.
  },
  overrides: {
    MuiButton: {
      root: {
        backgroundColor: '#c9e8c1', // Background color for buttons
        color: '#333333', // Button text color
        '&:hover': {
          backgroundColor: '#a8e89e', // Hover color for buttons
        },
      },
    },
    MuiPaper: {
      root: {
        backgroundColor: '#8fd9a6', // Cover Photo Background
      },
    },
    // Customize other components as needed
  },
});

export default sereneGreenTheme;
