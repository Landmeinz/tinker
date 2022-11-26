import React, { useState, useEffect } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from 'react-redux';

// --- Components --- //
import MessageForm from "../MessageForm/MessageForm";
import MessageBoard from "../MessageBoard/MessageBoard";
import EmailForm from "../EmailForm/EmailForm";

// --- MUI --- //
import {
  Typography,
  Box,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

// --- Sx Styles --- //
import {
  trans,
  sxHeroTextContent,
  sxContactSectionOne,
  sxContactText,
  sxMessageBoardContainer,
  sxMessageBoardHeader,
  sxBreaksH4,
  sxContactTitle,

  // sxBreaksH5,
} from "../sxStyles";

function Contact() {

  const [open, setOpen] = useState(false);

  // const currentDate = useSelector((store) => store.currentDate);
  // const messageList = useSelector((store) => store.messageList);

  function handleClick(input) {
    switch (input) {
      case "email":
        console.log("email");
        setOpen(true);
        break;

      case "post":
        console.log("post");
        window.scrollTo({
          top: 550,
          left: 0,
          behavior: "smooth",
        });
        break;

      default:
        break;
    }
  }

  return (
    <motion.div
      initial={trans.initial}
      animate={trans.animate}
      exit={trans.exit}
      style={trans.style}
      transition={trans.time}
    >
      <Box id="sxContactSectionOne" sx={sxContactSectionOne}>
        <Helmet>
          <title>Tinker Contact</title>
          <meta
            name="description"
            content="Leave a note, write a poem, drop a message, contact, email tinker.group"
          />
          <meta
            name="keywords"
            content="tinker contact, message board, email"
          />
          <meta
            name="author"
            content="tinker.group, Eric Meinzer, Chris Benner, Adam Donner"
          />
        </Helmet>

        <Box id="sxHeroTextContent" sx={sxHeroTextContent}>
          <Box sx={sxContactTitle}>
            <Typography
              sx={sxContactText}
              variant="h1"
              onClick={() => handleClick("email")}
            >
              Send An Email
            </Typography>
            <EmailForm open={open} setOpen={setOpen} />
          </Box>

          <Box sx={sxContactTitle} onClick={() => handleClick("post")}>
            <Typography sx={sxContactText} variant="h1">
              Leave A Note
            </Typography>
          </Box>

          <Box sx={sxContactTitle} onClick={() => handleClick("post")}>
            <Typography sx={sxContactText} variant="h1">
              Write A Poem
            </Typography>
          </Box>

          <Box sx={sxContactTitle} onClick={() => handleClick("post")}>
            <Typography sx={sxContactText} variant="h1">
              Drop A Message
            </Typography>
          </Box>
        </Box>

        <MessageForm setOpen={setOpen}/>

        <Box id="sxMessageBoardContainer" sx={sxMessageBoardContainer}>
          <Box id="sxMessageBoardHeader" sx={sxMessageBoardHeader}>
            <Typography color={"info.light"} sx={sxBreaksH4} variant="h4">
              See What Other's Have Said
            </Typography>
          </Box>

          <MessageBoard />
        </Box>
      </Box>
    </motion.div>
  );
}
export default Contact;
