import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

// --- Components --- //
import Product from "../Product/Product"
import ContactButton from "../ContactButton/ContactButton";

// --- Content --- //
import {
  posters,
  // other,
} from "../../content/Products/Posters";

// --- MUI --- //
import { Typography, Box } from "@mui/material";

// --- Sx Styles --- //
import {
  trans,
  sxProductHeroText,
  sxProductSectionOne,
  sxHeroTextContent,
} from "../sxStyles";

function Work({ currentDate }) {
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
              We've
            </Typography>
            <Typography sx={sxProductHeroText} variant="h1">
              Been Tinkering
            </Typography>
          </Box>
          <Product product={posters} />
          {/* <Product product={mug} /> */}
          <ContactButton />
        </Box>
        
      </Box>
    </motion.div>
  );
}
export default Work;
