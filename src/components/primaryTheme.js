import { createTheme } from "@mui/material/styles";

export const themeOptions = {
    palette: {
      type: 'dark',
      primary: {
        main: '#342a21',
      },
      secondary: {
        main: '#b4761a',
      },
      info: {
        main: '#C9B79C',
      },
      error: {
        main: '#f1e0c5',
      },
      success: {
        main: '#71816d',
      },
      warning: {
        main: '#bb3e03',
      },
    }, 
}
  const theme=createTheme(themeOptions);
  export default theme