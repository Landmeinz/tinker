import React, { useState, useEffect } from "react";
import axios from "axios";
import { ThemeProvider } from "@mui/material/styles";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet";
import {
  // BrowserRouter,
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

// --- Components --- //
import Work from "../Work/Work";
import About from "../About/About";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import Contact from "../Contact/Contact";

// --- MUI --- //
import { Box } from "@mui/material";

// --- Sx Styles --- //
import { theme, transApp, trans, sxApp, sxAppContainer } from "../sxStyles";

function App() {
  // axios.defaults.baseURL = 'http://localhost:5050';

  const [currentDate, setCurrentDate] = useState([]);

  useEffect(() => {
    fetchCurrentDate();
  }, []);

  const fetchCurrentDate = () => {
    axios
      .get("/api/date")
      .then((response) => {
        // console.log('GET /api/date RESPONSE', response);
        setCurrentDate(response.data);
      })
      .catch((error) => {
        console.log("GET /api/date ERROR", error);
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Box id="sxApp" sx={sxApp}>
        <Helmet>
          <title>Tinker Together</title>
          <meta
            name="description"
            content="general information and mission statement of the tinker.group along with a gallery of work."
          />
        </Helmet>
        <Box id="sxAppContainer" sx={sxAppContainer}>
          <Router>
            <AnimatePresence exitBeforeEnter initial={true}>
              <motion.div
                initial={transApp.initial}
                animate={transApp.animate}
                exit={transApp.exit}
                style={transApp.style}
                transition={transApp.time}
              >
                <Nav />
                <Routes>
                  <Route path="/" element={<Navigate to="/about" />} />
                  <Route
                    path="/about"
                    element={<About currentDate={currentDate} />}
                  />
                  <Route
                    path="/work"
                    element={<Work currentDate={currentDate} />}
                  />
                  <Route
                    path="/contact"
                    element={<Contact currentDate={currentDate} />}
                  />
                </Routes>
              </motion.div>
            </AnimatePresence>
          </Router>
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
