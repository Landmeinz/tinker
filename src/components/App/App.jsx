import React, { useState, useEffect, Component} from "react";
import { ThemeProvider } from "@mui/material/styles";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from 'react-redux';

import {
  // BrowserRouter,
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

// --- Components --- //
import Crafts from "../_Pages/Crafts";
// import Products from "../_Pages/Products";
// import ProductDetails from "../_Pages/ProductDetails"
import About from "../_Pages/About";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import Contact from "../_Pages/Contact";
import Hub from "../_Pages/Hub";
import WeeklyForm from "../_Pages/WeeklyForm";
import WeeklyFormResults from "../_Pages/WeeklyFormResults";
import LoginPage from "../_Pages/LoginPage";

// --- MUI --- //
import { Box } from "@mui/material";

// --- Sx Styles --- //
import { theme, transApp, sxApp, sxAppContainer } from "../sxStyles";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_CURRENT_DATE' });
    dispatch({ type: 'FETCH_MESSAGES' });
    dispatch({ type: 'FETCH_USER' });
    dispatch({ type: 'FETCH_ALL_USERS' });
    // getNextMeetingDay(currentDate.current_date)
    console.log(`--- SESSION: ${sessionStorage.getItem('isLoggedIn')}`);
    checkUserAuthentication();
  }, [dispatch]);

  
  const currentDate = useSelector((store) => store.currentDate);
  const user = useSelector((store) => store.user);

  async function checkUserAuthentication() {
    // if (user == null && user.name == null) {
    //   return false;
    // }
    // return true;
    console.log('--- checkUserAuthentication');
    
    if (sessionStorage.getItem('isLoggedIn') == 'true') {
      console.log('--- storage user true');
      
    }
    else{
      console.log('--- storage user false');
      dispatch({ type: 'LOGOUT' })
    }
  }

  // async function checkLoginStatus() {
  //   try {
  //     const isAuthenticated = await checkUserAuthentication();
  //     setIsLoggedIn(isAuthenticated);
  //   } catch (error) {
  //     console.error('Failed to check authentication:', error);
  //     // Handle error appropriately
  //   }
  // }

  async function getNextMeetingDay(date = new Date()) {
    const dateCopy = new Date(date.getTime());
    const nextMeeting = new Date(
      dateCopy.setDate(
        dateCopy.getDate() + ((7 - dateCopy.getDay() + 2) % 7 || 7),
      ),
    );
    return dispatch({ type: 'SET_NEXT_MEETING_DAY', payload: nextMeeting });;
  }

  return (
    <ThemeProvider theme={theme}>
      <Box id="sxApp" sx={sxApp}>
        <Helmet>
          <title>Tinker Together</title>
          <meta
            name="description"
            content="general information and mission statement of the tinker.group along with a gallery of work."
          />
          <meta
            name="keywords"
            content="tinker together, tinker.group, welcome"
          />
          <meta
            name="author"
            content="tinker.group, Eric Meinzer, Chris Benner, Adam Donner"
          />
        </Helmet>

        <Box id="sxAppContainer" sx={sxAppContainer}>
          <Router>
            <AnimatePresence mode="wait" initial={true}>
              <motion.div
                initial={transApp.initial}
                animate={transApp.animate}
                exit={transApp.exit}
                style={transApp.style}
                transition={transApp.time}
              >
                <Nav />
                <Routes>
                  <Route path='*' element={<Navigate to='/about' />} />
                  <Route
                    exact
                    path="/"
                    element={<Navigate replace to="/about" />}
                  />
                  <Route
                    exact
                    path="/about"
                    element={<About />}
                  />
                  <Route
                    exact
                    path="/crafts"
                    element={<Crafts />}
                  />
                  {/* <Route
                    path="/products"
                    element={<Products />}
                  />
                    <Route
                    path="/product-details"
                    element={<ProductDetails />}
                  /> */}
                  <Route
                    exact
                    path="/contact"
                    element={<Contact />}
                  />
                  {user.id &&
                    <Route
                      exact
                      path="/hub"
                      element={<Hub />}
                    />}
                  {user.id &&
                    <Route
                      exact
                      path="/weekly-form"
                      element={<WeeklyForm />}
                    />}
                  {user.id &&
                    <Route
                      exact
                      path="/weekly-form/results"
                      element={<WeeklyFormResults />}
                    />}

                  <Route
                    exact
                    path="/login"
                    element={<LoginPage />}
                  />




                  {/* --- LOGIN vs REGISTER --- */}
                  {/* <Route
                    exact
                    path="/login"
                    element={<WeeklyFormResults />}
                  >
                    {user.id ?
                      // If the user is already logged in, 
                      // redirect to the /home page
                      <Redirect to="/home" />
                      :
                      // Otherwise, show the login page
                      <LoginPage />
                    }
                  </Route>

                  If none of the other routes matched, we will show a 404.
                  <Route>
                    <br />
                    <Typography variant="h1" sx={sxCenterText}>404</Typography>
                  </Route> */}

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
