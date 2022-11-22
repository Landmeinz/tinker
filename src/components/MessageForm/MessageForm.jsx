import React, { useState } from "react";
import axios from "axios";

// --- MUI --- //
import { Typography, Box, TextField, Button } from "@mui/material";

// --- Sx Styles --- //
import {
  sxInputContainer,
  sxInputText,
  sxPostButton,
  sxMessageButtonContainer,
} from "../sxStyles";

function MessageForm({ fetchMessageList, setOpen }) {
  let messageTemplate = {
    name: "",
    message: "",
    date: "today",
  };

  const [newMessage, setNewMessage] = useState(messageTemplate);

  const handleNameChange = (event, property) => {
    setNewMessage({
      ...newMessage,
      [property]: event.target.value,
    });
  }; // handleNameChange

  const handleSubmit = (event) => {
    event.preventDefault();

    if (newMessage.name.length <= 1 || newMessage.message.length <= 3) {
      return window.alert("Please be more descriptive");
    } else {
      postMessage(newMessage);
      setNewMessage(messageTemplate);
    }
  }; // handleSubmit

  const postMessage = (newMessage) => {
    axios
      .post("/api/messages", newMessage)
      .then((response) => {
        fetchMessageList();
      })
      .catch((error) => {
        console.log("Error on POST", error);
      });
  }; // postMessage

  const handleEmail = () => {
    setOpen(true);
  };

  return (
    <form className="formPanel" onSubmit={handleSubmit}>
      <Box id="sxInputContainer" sx={sxInputContainer}>
        <TextField
          sx={sxInputText}
          id="filled-static"
          label="Your Name"
          required
          variant="filled"
          value={newMessage.name}
          onChange={(event) => handleNameChange(event, "name")}
        />
        <TextField
          sx={sxInputText}
          id="filled-multiline-static"
          label="What's Up Buttercup?"
          multiline
          required
          rows={5}
          variant="filled"
          value={newMessage.message}
          onChange={(event) => handleNameChange(event, "message")}
        />
        <Box sx={sxMessageButtonContainer}>
          <Button sx={sxPostButton} type="submit" size="large">
            Post My Public Message
          </Button>
          <Button sx={sxPostButton} size="large" onClick={handleEmail}>
            I'd Rather Send An Email
          </Button>
        </Box>
      </Box>
    </form>
  );
}
export default MessageForm;
