import React from "react";

// --- MUI --- //
import { Typography, Box } from "@mui/material";

// --- Sx Styles --- //
import {
  sxTinkerDefined,
  sxCardDefineBody,
  sxCardDefineLeftContainer,
  sxBoxColor,
  sxCircleFrame,
  sxCenterCircle,
  sxCardDefineH4,
  // sxBreaksH4,
  sxBreaksH5,
} from "../sxStyles";

function CardDefineRight({ title, body, tag }) {
  return (
    <Box id="sxCardDefineLeftContainer" sx={sxCardDefineLeftContainer}>
      <Box id="sxTinkerDefinedLeft" sx={sxTinkerDefined}>
        <Typography sx={sxCardDefineH4} variant="h4">
          {title}
        </Typography>
        <Box id="sxCardDefineBodyLeft" sx={sxCardDefineBody}>
          <Typography sx={sxCardDefineH4} variant="h4">
            {body}
          </Typography>
          <Typography sx={sxBreaksH5} variant="h5">
            {tag}
          </Typography>
        </Box>
      </Box>

      <Box id="sxBoxColorLeft" sx={sxBoxColor}>
        <Box id="sxCenterCircleLeft" sx={sxCenterCircle}>
          <img
            src="../images/aboutPage/process-2.jpg"
            style={sxCircleFrame}
            alt="Loop animation of a Rube Goldberg esque machine"
          />
        </Box>
      </Box>
    </Box>
  );
}
export default CardDefineRight;
