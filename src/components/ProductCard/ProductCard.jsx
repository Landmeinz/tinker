import React from "react";

// --- MUI --- //
import { Typography, CardMedia, Box } from "@mui/material";

// --- Sx Styles --- //
import {
  sxProductImageContent,
  sxCardProduct,
  sxImageCaption,
} from "../sxStyles";

function ProductCard({ image, imageCaption }) {
  return (
    <Box id="sxProductImageContent" sx={sxProductImageContent}>
      <CardMedia sx={sxCardProduct} component="img" image={image} />
      <Typography sx={sxImageCaption} variant="body1">
        {imageCaption}
      </Typography>
    </Box>
  );
}
export default ProductCard
;
