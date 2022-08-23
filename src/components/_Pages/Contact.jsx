import React, { useState, useEffect } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

// --- Components --- //
import MessageForm from "../MessageForm/MessageForm";
import MessageBoard from "../MessageBoard/MessageBoard";

// --- MUI --- //
import { Typography, Box } from "@mui/material";

// --- Sx Styles --- //
import {
  trans,
  sxHeroTextContent,
  sxContactSectionOne,
  sxContactText,
  sxMessageBoardContainer,
  sxMessageBoardHeader,
  sxBreaksH4,
  // sxBreaksH5,
} from "../sxStyles";

function Contact({ currentDate }) {
  useEffect(() => {
    fetchMessageList();
  }, []);

  const [messageList, setMessageList] = useState([]);

  const fetchMessageList = () => {
    axios
      .get("/api/messages")
      .then((response) => {
        setMessageList(response.data);
      })
      .catch((err) => {
        console.log("Error on axios GET: ", err);
      });
  }; // fetchMessageList

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
            content="tinker contact, message board, "
          />
        </Helmet>

        <Box id="sxHeroTextContent" sx={sxHeroTextContent}>
          <Typography sx={sxContactText} variant="h1">
            Leave A Note
          </Typography>
          <Typography sx={sxContactText} variant="h1">
            Write A Poem
          </Typography>
          <Typography sx={sxContactText} variant="h1">
            Drop A Message
          </Typography>
        </Box>

        <MessageForm fetchMessageList={fetchMessageList} />

        <Box id="sxMessageBoardContainer" sx={sxMessageBoardContainer}>
          <Box id="sxMessageBoardHeader" sx={sxMessageBoardHeader}>
            <Typography color={"info.light"} sx={sxBreaksH4} variant="h4">
              See What Other's Have Said
            </Typography>
          </Box>

          <MessageBoard messageList={messageList} />
        </Box>
      </Box>
    </motion.div>
  );
}
export default Contact;
