import { createTheme } from '@material-ui/core/styles';

const relaxingPurpleTheme = createTheme({
  palette: {
    primary: {
      main: '#b39ed9', // Calming lavender purple
    },
    secondary: {
      main: '#d9c1e8', // Accent color for buttons
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    // Customize typography settings like font size, line height, and more.
  },
  overrides: {
    MuiButton: {
      root: {
        backgroundColor: '#d9c1e8', // Background color for buttons
        color: '#333333', // Button text color
        '&:hover': {
          backgroundColor: '#c18ae8', // Hover color for buttons
        },
      },
    },
    MuiPaper: {
      root: {
        backgroundColor: '#b39ed9', // Cover Photo Background
      },
    },
    // Customize other components as needed
  },
});

export default relaxingPurpleTheme;
