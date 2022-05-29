import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
      primary: {
        main: 'hsla(14, 77%, 44%, 1)',
        dark: 'hsla(14, 77%, 32%, 1)',
        light: 'hsla(14, 77%, 56%, 1)',
      },
      secondary: {
        main: 'hsla(16, 100%, 48%, 1)',
        dark: 'hsla(312, 14%, 36%, 1)',
        light: 'hsla(180, 78%, 48%, 1)',
      },
      error: {
        main: 'hsla(350, 90%, 40%, 1)',
      },
      info: {
        main: 'hsla(330, 10%, 12%, 1)',
        dark: 'hsla(330, 10%, 4%, 1)',
        light: 'hsla(330, 10%, 16%, 1)',
      }
    },
  });

export const sxApp = {
    display: 'flex',
    bgcolor: 'primary.main',

}