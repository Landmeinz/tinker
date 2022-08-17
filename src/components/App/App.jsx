import React, { useState, useEffect } from 'react';
import axios from "axios";
import { ThemeProvider } from '@mui/material/styles';
import logo from '../../logo.svg';
// import './App.css';
import ExpandableDiv from '../ExpandableDiv/ExpandableDiv';
import Home from '../Home/Home';
import Work from '../Work/Work';
import About from '../About/About';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import Contact from '../Contact/Contact';

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

} from '../sxStyles';

function App() {

  const [currentDate, setCurrentDate] = useState([]);

  useEffect(() => {
      fetchCurrentDate();
  }, []);

  const fetchCurrentDate = () => {
    // console.log("--- in fetchCurrentDate ---");

    axios.get('http://localhost:5050/api/date')
        .then((response) => {
            // console.log('GET /api/date RESPONSE', response);
            setCurrentDate(response.data);

        }).catch((error) => {
            console.log('GET /api/date ERROR', error);
        });
};

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
              <Route path="/about" element={<About currentDate={currentDate} />} />
              <Route path="/work" element={<Work currentDate={currentDate} />} />
              <Route path="/contact" element={<Contact currentDate={currentDate} />} />
            </Routes>
            <Footer />
          </BrowserRouter>

        </Box>
      </Box>

    </ThemeProvider >
  );
}

export default App;