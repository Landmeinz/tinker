import React from "react";

import { useNavigate } from "react-router-dom";

// --- MUI --- //
import { Typography, Box } from "@mui/material";

// --- Sx Styles --- //
import {
  sxNavContainer,
  sxTinkerNavText,
  sxBreaksH4,
  sxBreaksH5,
} from "../sxStyles";

function Nav() {
  const navigate = useNavigate();

  function handleNav(path) {
    navigate(path);
    window.scrollTo(0, 0);
  } // handleNav

  return (
    <Box id="sxNavContainer" sx={sxNavContainer}>
      <Box id="sxTinkerNavTextAbout" sx={sxTinkerNavText}>
        <Typography
          sx={sxBreaksH4}
          variant="h4"
          onClick={() => handleNav("/about")}
        >
          Tinker
        </Typography>
      </Box>

      <Box id="sxTinkerNavTextWork" sx={sxTinkerNavText}>
        <Typography
          sx={sxBreaksH5}
          variant="h5"
          onClick={() => handleNav("/work")}
        >
          Our Work
        </Typography>
      </Box>
    </Box>
  );
}
export default Nav;
