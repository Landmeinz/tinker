import React from "react";
import { Helmet } from "react-helmet";

// --- MUI --- //
import { Typography, Box } from "@mui/material";

// --- Sx Styles --- //
import { sxFooterContainer } from "../sxStyles";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <Box id="sxFooterContainer" sx={sxFooterContainer}>
      <Helmet>
        <meta
          name="description"
          content="Tinker Group 2022 located in Minneapolis, Minnesota MPLS, MN"
        />
      </Helmet>
      <Typography variant="body2">Tinker Often {currentYear}</Typography>
    </Box>
  );
}
export default Footer;
