import { ThemeProvider } from '@mui/material/styles';
import logo from './logo.svg';
import './App.css';
import ExpandableDiv from './components/ExpandableDiv/ExpandableDiv';
import Home from './components/Home/Home';
import Work from './components/Work/Work';
import About from './components/About/About';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';

import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  useNavigate,
} from 'react-router-dom';

import {
  Typography,
  CardMedia,
  Box,

} from '@mui/material';

import {
  theme,
  sxApp,
  sxAppContainer,
  sxSectionOne,
  sxLeftColumn,
  sxRightColumn,
  sxHeroTextContent,
  sxHeroText,
  sxHeroImageContent,
  sxHeroImage,

  sxSectionTwo,
  sxSectionTwoContent,

  sxSectionThree,
  sxSectionThreeContent,

  sxSectionFour,
  sxSectionFourContent,

} from './components/sxStyles';

function App() {

  function handleClick() {
    console.log('clicked');
  }; // handleClick

  return (
    <ThemeProvider theme={theme}>

      <Box sx={sxApp} >
        <Box sx={sxAppContainer}>

          <BrowserRouter>
            <Nav />
            <Routes>
              <Route path="/" element={<Navigate to="/about" />} />
              {/* <Route path="/home" element={<Home />} /> */}
              <Route path="/about" element={<About />} />
              <Route path="/work" element={<Work />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
          </BrowserRouter>

        </Box>
      </Box>

    </ThemeProvider >
  );
}

export default App;