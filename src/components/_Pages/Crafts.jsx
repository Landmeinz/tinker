import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

// --- Components --- //
import Project from "../Project/Project";
import ContactButton from "../ContactButton/ContactButton";

// --- Content --- //
import {
  swing,
  // other,
} from "../../content/Projects";

// --- MUI --- //
import { Typography, Box } from "@mui/material";

// --- Sx Styles --- //
import {
  trans,
  sxCraftsHeroText,
  sxCraftsSectionOne,
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
      <Box id="CraftsSectionParent">
        <Helmet>
          <title>Tinker Our Work</title>
          <meta
            name="description"
            content="We've been tinkering, view our work, gallery, project photos, completed work"
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

        <Box id="sxCraftsSectionOne" sx={sxCraftsSectionOne}>
          <Box id="sxHeroTextContentWork" sx={sxHeroTextContent}>
            <Typography sx={sxCraftsHeroText} variant="h1">
              We've
            </Typography>
            <Typography sx={sxCraftsHeroText} variant="h1">
              Been Tinkering
            </Typography>
          </Box>
          <Project project={swing} />
          <ContactButton />
        </Box>
      </Box>
    </motion.div>
  );
}
export default Work;
