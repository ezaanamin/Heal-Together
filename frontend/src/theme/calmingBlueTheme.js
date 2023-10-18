import { createTheme } from '@mui/material/styles';
const calmingBlueTheme = createTheme({
  palette: {
    primary: {
      main: '#6ea8d9', // Soothing light blue
    },
    secondary: {
      main: '#b3c9e8', // Accent color for buttons
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    // Customize typography settings like font size, line height, and more.
  },
  overrides: {
    MuiButton: {
      root: {
        backgroundColor: '#b3c9e8', // Background color for buttons
        color: '#333333', // Button text color
        '&:hover': {
          backgroundColor: '#8bb5e8', // Hover color for buttons
        },
      },
    },
    MuiPaper: {
      root: {
        backgroundColor: '#6ea8d9', // Cover Photo Background
      },
    },
    // Customize other components as needed
  },
});

export default calmingBlueTheme;
