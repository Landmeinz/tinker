import React from "react";

// --- MUI --- //
import {
  Typography,
  CardMedia,
  Box,
} from "@mui/material";

import {
  sxLoginHeader,

} from "../sxStyles";

function Loading() {
  // function handleClick() {
  //     console.log('clicked');
  // }; // handleClick

  return (
    <Box>
      <Typography sx={sxLoginHeader} variant='h5'>-- LOADING! --</Typography>
    </Box>
  );
}
export default Loading;
