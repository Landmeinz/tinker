import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from 'react-redux';

// --- Components --- //
import Product from "../Product/Product"
import ContactButton from "../ContactButton/ContactButton";

// --- Content --- //
import {
  posters,
  // other,
} from "../../content/Products/Posters";

// --- MUI --- //
import { Typography, Box, CardMedia } from "@mui/material";

// --- Sx Styles --- //
import {
  trans,
  sxProductHeroText,
  sxProductSectionOne,
  sxHeroTextContent,
  sxCardProductDetail,
} from "../sxStyles";

function ProductDetails() {

  const selectedProduct = useSelector((store) => store.selectedProduct);
  console.log("--- selectedProductContent from ProductDetails: ", selectedProduct);

  return (
    <motion.div
      initial={trans.initial}
      animate={trans.animate}
      exit={trans.exit}
      style={trans.style}
      transition={trans.time}
    >
      <Box id="ProductSectionParent">
        <Helmet>
          <title>Tinker Our Work</title>
          <meta
            name="description"
            content="We've been tinkering, view our products, gallery, project photos, completed work, shop"
          />
          <meta
            name="keywords"
            content="tinker work, projects, gallery, portfolio"
          />
          <meta
            name="author"
            content="tinker.group, Eric Meinzer, Chris Benner, Adam Donner"
          />
        </Helmet>

        <Box id="sxProductSectionOne" sx={sxProductSectionOne}>
          <Box id="sxHeroTextContentWork" sx={sxHeroTextContent}>
            <Typography sx={sxProductHeroText} variant="h1">
              The Details
            </Typography>
          </Box>

          <CardMedia sx={sxCardProductDetail} component="img" image={selectedProduct.image} />

          <ContactButton />
        </Box>
        
      </Box>
    </motion.div>
  );
}
export default ProductDetails;
