import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// --- Components --- //
import ProductCard from "../ProductCard/ProductCard";
import ProductDescription from "../ProductDescription/ProductDescription";

// --- MUI --- //
import {
  // Typography,
  // CardMedia,
  Box,
} from "@mui/material";

import { sxProductContainer, sxCardProductGallery } from "../sxStyles";

function Product({ product }) {
  // const navigate = useNavigate();
  // const dispatch = useDispatch();

  return (
    <Box id="sxProductContainer" sx={sxProductContainer}>
      <ProductDescription
        id="ProductDescription"
        title={product.title}
        body={product.body}
        details={product.details}
      />
      <Box id="sxCardProductGalleryPoster" sx={sxCardProductGallery}>
        {product.content.map((content) => (
          <ProductCard
            key={content.id}
            image={content.image}
            imageCaption={content.caption}
            alt={content.alt}
          />
        ))}
      </Box>
    </Box>
  );
}
export default Product;
