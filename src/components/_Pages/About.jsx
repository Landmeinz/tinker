import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

// --- Components --- //
import CardDefineRight from "../CardDefineRight/CardDefineRight";
import CardDefineLeft from "../CardDefineLeft/CardDefineLeft";
import CardAdditionalDetails from "../CardAdditionalDetails/CardAdditionalDetails";
import ContactButton from "../ContactButton/ContactButton";

// --- Content --- //
import { DefineTextNoun } from "../../content/DefineTextNoun";
import { DefineTextVerb } from "../../content/DefineTextVerb";
import {
  addDetailsOne,
  addDetailsTwo,
  addDetailsThree,
} from "../../content/AdditionalDetails";

// --- MUI --- //
import { Typography, Box, Button } from "@mui/material";

// --- Sx Styles --- //
import {
  trans,
  sxAboutSectionOne,
  sxHeroTextContent,
  sxHeroText,
  sxNavLoginPage,

} from "../sxStyles";

function About() {
  const navigate = useNavigate();

  const currentDate = useSelector((store) => store.currentDate);

  function handleNav(path) {
    navigate(path);
    window.scrollTo(0, 0);
  } // handleNav

  return (
    <motion.div
      initial={trans.initial}
      animate={trans.animate}
      exit={trans.exit}
      style={trans.style}
      transition={trans.time}
    >
      <Box>
        <Helmet>
          <title>Tinker About</title>
          <meta
            name="description"
            content="Tinker is made up of a close group of entrepreneurs, designers, architects, engineers, developers, and people who are just plain creative."
          />
          <meta
            name="keywords"
            content="tinker about, tinker.group, who, mission, create"
          />
          <meta
            name="author"
            content="tinker.group, Eric Meinzer, Chris Benner, Adam Donner"
          />
        </Helmet>

        <Box id="sxAboutSectionOne" sx={sxAboutSectionOne}>
          <Box id="sxHeroTextContent" sx={sxHeroTextContent}>
            <Typography sx={sxHeroText} variant="h1">
              Together
            </Typography>
            <Typography sx={sxHeroText} variant="h1">
              We Tinker
            </Typography>
          </Box>
          <Button
            sx={sxNavLoginPage}
            size="large"
            variant="contained"
            onClick={() => handleNav("/login")}
          >
            Go To Login
          </Button>
          <CardAdditionalDetails title={addDetailsOne.title} />
          <CardAdditionalDetails title={addDetailsThree.title} />
          <CardDefineRight
            title={DefineTextNoun.title}
            body={DefineTextNoun.body}
            tag={DefineTextNoun.tag}
          />
          <CardDefineLeft
            title={DefineTextVerb.title}
            body={DefineTextVerb.body}
            tag={DefineTextVerb.tag}
          />
          <CardAdditionalDetails title={addDetailsTwo.title} />
          <ContactButton />
        </Box>
      </Box>
    </motion.div>
  );
}
export default About;
