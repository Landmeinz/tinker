import React from "react";

// --- MUI --- //
import { Typography, Box } from "@mui/material";

// --- Sx Styles --- //
import {
  sxTinkerDefined,
  sxCardDefineBody,
  sxCardDefineRightContainer,
  sxBoxColor,
  sxCenterCircle,
  sxCircleFrame,
  sxCardDefineH4,
  // sxBreaksH4,
  sxBreaksH5,
} from "../sxStyles";

function CardDefineRight({ title, body, tag }) {
  return (
    <Box id="sxCardDefineRightContainer" sx={sxCardDefineRightContainer}>
      <Box id="sxBoxColorRight" sx={sxBoxColor}>
        <Box id="sxCenterCircleRight" sx={sxCenterCircle}>
          <img
            style={sxCircleFrame}
            src="https://i.giphy.com/media/RxVpypN9Ri2Yg/giphy.webp"
            alt="Loop of hammer hitting nail"
          />
        </Box>
      </Box>

      <Box id="sxTinkerDefinedRight" sx={sxTinkerDefined}>
        <Typography sx={sxCardDefineH4} variant="h4">
          {title}
        </Typography>
        <Box id="sxCardDefineBodyRight" sx={sxCardDefineBody}>
          <Typography sx={sxCardDefineH4} variant="h4">
            {body}
          </Typography>
          <Typography sx={sxBreaksH5} variant="h5">
            {tag}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
export default CardDefineRight;
