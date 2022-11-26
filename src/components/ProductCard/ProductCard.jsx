import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// --- MUI --- //
import { Typography, CardMedia, Box } from "@mui/material";

// --- Sx Styles --- //
import {
  sxProductImageContent,
  sxCardProduct,
  sxImageCaption,
} from "../sxStyles";

function ProductCard({ image, imageCaption, alt }) {
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleClick(input) {
    
    const content = {
      image: image,
      imageCaption: imageCaption,
      alt: alt
    }
    dispatch({ type: 'SET_SELECTED_PRODUCT', payload: content});

    switch (input) {
      case "/product-details":
        console.log("CLICKED on the image");
        // console.log('this is the current plant from handleClick', plant);
        // dispatch({ type: 'FETCH_SELECTED_PLANT', payload: plant.id });
        handleNav("/product-details");
        break;
    }
  }

  function handleNav(path) {
    navigate(path);
    window.scrollTo(0, 0);
  } // handleNav

  return (
    <Box
      id="sxProductImageContent"
      sx={sxProductImageContent}
      onClick={() => handleClick("/product-details")}
    >
      <CardMedia sx={sxCardProduct} component="img" image={image} />
      <Typography sx={sxImageCaption} variant="body1">
        {imageCaption}
      </Typography>
    </Box>
  );
}
export default ProductCard;
