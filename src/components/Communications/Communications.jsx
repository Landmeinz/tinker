import React from "react";

// --- MUI --- //
import {
  Typography,
  CardMedia,
  Box,
} from "@mui/material";

import {
  sxHubText,
  sxHeroTextContent,
  sxContactSectionOne,
  
} from "../sxStyles";

function Communications() {
  // function handleClick() {
  //     console.log('clicked');
  // }; // handleClick

  return (
    <Box id="sxContactSectionOne" sx={sxContactSectionOne}>
      <Box sx={sxHeroTextContent}>
        <Typography
          sx={sxHubText}
          variant="h1"
        // onClick={() => handleNav("/weekly-form")}
        >
          Slack Channel
        </Typography>
      </Box>
    </Box>
  );
}
export default Communications;
