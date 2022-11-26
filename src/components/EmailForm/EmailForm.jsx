import React, { useState, useRef } from "react";
import axios from "axios";
import emailjs from "@emailjs/browser";

import {
  emailTinker,
  emailConfirmation
} from "../../services/emailJsService";

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
  sxInputContainer,
  sxInputText,
  sxPostButton,
  sxDialogContainer,
} from "../sxStyles";

function EmailForm({ open, setOpen }) {
  let emailTemplate = {
    email: "",
    message: "",
  };

  const form = useRef();
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
  }; // handleClose

  const handleSubmit = (event) => {
    event.preventDefault();

    if (newEmail.message.length <= 10) {
      return window.alert("Please be more descriptive");
    } else {
      postEmail();
      console.log("message sent");
      setNewEmail(emailTemplate);
    }
    console.log(`email ${newEmail.email}: ${newEmail.message}`);
  }; // handleSubmit

  const postEmail = (newEmail) => {
    console.log("--- clicked on send ---");
    emailTinker(form.current);
    emailConfirmation(form.current);
  }; // postEmail

  return (
    <Dialog open={open} onClose={handleClose} maxWidth={"md"} fullWidth={true}>
      <form ref={form} className="formPanel" onSubmit={handleSubmit}>
        <DialogTitle>Email tinker.group</DialogTitle>
        <DialogContent>
          <DialogContentText>
            📬 Send us an email and we will get back to you
          </DialogContentText>
          <br />
          <TextField
            autoFocus
            required
            margin="dense"
            id="email"
            name="from_name"
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
            name="message"
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
