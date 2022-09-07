import React, { useState } from "react";
import axios from "axios";

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
import { sxInputContainer, sxInputText, sxPostButton } from "../sxStyles";

function EmailForm({ open, setOpen }) {
  let emailTemplate = {
    email: "",
    message: "",
  };

  const [newEmail, setNewEmail] = useState(emailTemplate);

  const handleNameChange = (event, property) => {
    setNewEmail({
      ...newEmail,
      [property]: event.target.value,
    });
  }; // handleNameChange

  const handleClose = () => {
    console.log("handleClose");
    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (newEmail.message.length <= 5) {
      return window.alert("Please be more descriptive");
    } else {
      // postMessage(newMessage);
      console.log("message sent");
      setNewEmail(emailTemplate);
    }
    console.log(`email ${newEmail.email}: ${newEmail.message}`);
  }; // handleSubmit

  return (
    <Dialog open={open} onClose={handleClose}>
      <form className="formPanel" onSubmit={handleSubmit}>
        <DialogTitle>Email tinker.group</DialogTitle>
        <DialogContent>
          <DialogContentText>
            📬 Send us an email and we will get back to you
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="email"
            label="Your Email Address"
            type="email"
            fullWidth
            variant="filled"
            value={newEmail.email}
            onChange={(event) => handleNameChange(event, "email")}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="message"
            label="Message"
            type="text"
            fullWidth
            variant="filled"
            multiline
            rows={5}
            value={newEmail.message}
            onChange={(event) => handleNameChange(event, "message")}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Send It</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
export default EmailForm;
