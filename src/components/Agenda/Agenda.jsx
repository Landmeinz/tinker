import React, { useState, useEffect } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from 'react-redux';

// --- Components --- //


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
  RadioGroup,
  FormControlLabel,
  FormLabel,
  Radio,
  Slider,


} from "@mui/material";

// --- Sx Styles --- //
import {
  trans,
  sxDisplayResultsContainer,

  // sxBreaksH5,
} from "../sxStyles";

function Agenda() {

  const dispatch = useDispatch();
  const currentDate = useSelector((store) => store.currentDate);
  const weeklyForm = useSelector((store) => store.weeklyForm);
  console.log('weeklyform', weeklyForm);
  console.log('currentDate', currentDate);

  useEffect(() => {
    dispatch({ type: 'FETCH_WEEKLY_FORM' });
  }, [dispatch]);

  // const handleNameChange = (event, property) => {
  //     setNewMessage({
  //         ...newMessage,
  //         [property]: event.target.value,
  //     });
  // }; // handleNameChange

  // const handleSubmit = (event) => {
  //     event.preventDefault();
  //     if (newMessage.name.length <= 1 || newMessage.message.length <= 3) {
  //         return window.alert("Please be more descriptive");
  //     } else {
  //         postMessage(newMessage);
  //         setNewMessage(messageTemplate);
  //     }
  // }; // handleSubmit

  // const postMessage = (newMessage) => {
  //     dispatch({ type: "POST_MESSAGE", payload: newMessage });
  //     dispatch({ type: "FETCH_MESSAGES" });
  // }; // postMessage

  return (
    <Box sx={sxDisplayResultsContainer}>

      <Typography variant="h5">Agenda</Typography>
        {/* <Box key={form.id}>
          <Typography variant="body1">{form.name}: {form.items}</Typography>
        </Box> */}


    </Box>
  );
}
export default Agenda;
