import React, { useState, useEffect, Component } from "react";
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
import RegisterPage from "../_Pages/RegisterPage";
import Loading from "../Loading/Loading";
import Communications from "../Communications/Communications";

// --- MUI --- //
import { Box } from "@mui/material";

// --- Sx Styles --- //
import { 
  theme, 
  transApp, 
  sxApp, 
  sxAppContainer } from "../sxStyles";

function App() {
  
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
    dispatch({ type: 'FETCH_CURRENT_DATE' });
    dispatch({ type: 'FETCH_MESSAGES' });
    dispatch({ type: 'SET_NEXT_MEETING_DAY' });
    // dispatch({ type: 'FETCH_ALL_USERS' });
  }, [dispatch]);

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
                    path="/loading"
                    element={<Loading />}
                  />
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
                  <Route
                    exact
                    path="/contact"
                    element={<Contact />}
                  />
                  {/* <Route
                    path="/products"
                    element={<Products />}
                  />
                    <Route
                    path="/product-details"
                    element={<ProductDetails />}
                  /> */}

                  {!user?.id &&
                    <Route
                      exact
                      path="/login"
                      element={<LoginPage />}
                    />}
                  {!user?.id &&
                    <Route
                      exact
                      path="/register"
                      element={<RegisterPage />}
                    />}
                  {user?.id &&
                    <Route
                      exact
                      path="/hub"
                      element={<Hub />}
                    />}
                  {user?.id &&
                    <Route
                      exact
                      path="/weekly-form"
                      element={<WeeklyForm />}
                    />}
                  {user?.id &&
                    <Route
                      exact
                      path="/weekly-form/results"
                      element={<WeeklyFormResults />}
                    />}
                  {user?.id &&
                    <Route
                      exact
                      path="/comms"
                      element={<Communications />}
                    />}

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
