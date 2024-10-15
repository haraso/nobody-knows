import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  colorSchemes: {
    dark: true,
  },
  cssVariables: true,
  // palette: {
  //   primary: {
  //     main: '#556cd6',
  //   },
  //   secondary: {
  //     main: '#19857b',
  //   },
  //   error: {
  //     main: red.A400,
  //   },
  // },
});

export default theme;