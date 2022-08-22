import React, { useState, useEffect } from 'react';
import axios from "axios";
import { ThemeProvider } from '@mui/material/styles';
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';

// --- Components --- //
import Work from '../Work/Work';
import About from '../About/About';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import Contact from '../Contact/Contact';


// --- MUI --- //
import {
  Box,

} from '@mui/material';


// --- Sx Styles --- //
import {
  theme,
  sxApp,
  sxAppContainer,

} from '../sxStyles';


function App() {
  // axios.defaults.baseURL = 'http://localhost:5050';

  const [currentDate, setCurrentDate] = useState([]);

  useEffect(() => {
    fetchCurrentDate();
  }, []);

  const fetchCurrentDate = () => {

    axios
      .get('/api/date')
      .then((response) => {
        // console.log('GET /api/date RESPONSE', response);
        setCurrentDate(response.data);

      }).catch((error) => {
        console.log('GET /api/date ERROR', error);
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Box id="sxApp" sx={sxApp} >
        <Box id="sxAppContainer" sx={sxAppContainer}>
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