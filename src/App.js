import { ThemeProvider } from '@mui/material/styles';
import logo from './logo.svg';
import './App.css';

import {
  Typography,
  CardMedia,
  Box,

} from '@mui/material';

import {
  theme,
  sxApp,
  sxAppContainer,
  sxTopSection,
  sxLeftColumn,
  sxRightColumn,
  sxHeroTextContent,
  sxHeroText,
  sxHeroImageContent,

} from './sxStyles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={sxApp} >
        <Box sx={sxAppContainer}>

          {/* <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Some Image"
      /> */}

          <Box sx={sxTopSection}>

            <Box sx={sxLeftColumn}>
              <Box sx={sxHeroTextContent}>
                <Typography sx={sxHeroText} variant='h1'>TOGETHER</Typography>
                <Typography sx={sxHeroText} variant='h1'>WE TINKER</Typography>
              </Box>
            </Box>

            <Box sx={sxRightColumn}>
              <Box sx={sxHeroImageContent}>
                
              </Box>
            </Box>



          </Box>



        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;