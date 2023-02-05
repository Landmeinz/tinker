import React, { useState, useEffect } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from 'react-redux';

// --- Components --- //
import DisplayResults from '../DisplayResults/DisplayResults';
import Agenda from '../Agenda/Agenda';

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
    sxHeroTextContent,
    sxContactSectionOne,
    sxContactText,
    sxMessageBoardContainer,
    sxMessageBoardHeader,
    sxBreaksH4,
    sxContactTitle,
    sxInputContainer,
    sxInputText,
    sxMessageButtonContainer,
    sxPostButton,
    sxWeeklyFormContainer,
    sxFormSectionOne,
    sxInputTextWeekly,
    sxWeeklyFormDate,
    sxWeeklySliderContent,
    sxWeeklySlider,
    sxSliderText,
    sxSliderTextContent,
    sxSubmitButton,
    sxWeeklyResultsContainer,
    sxHeroText,



    // sxBreaksH5,
} from "../sxStyles";

function WeeklyForm() {

    const dispatch = useDispatch();
    const currentDate = useSelector((store) => store.currentDate);
    const weeklyForm = useSelector((store) => store.weeklyForm);
    console.log('weeklyform', weeklyForm);
    console.log('currentDate', currentDate);

    useEffect(() => {
        dispatch({ type: 'FETCH_WEEKLY_FORM' });
    }, [dispatch]);

    let messageTemplate = {
        name: "",
        message: "",
        date: "today",
    };

    const [newMessage, setNewMessage] = useState(messageTemplate);
    const [show, setShow] = useState(false);

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
        dispatch({ type: "POST_MESSAGE", payload: newMessage });
        dispatch({ type: "FETCH_MESSAGES" });
    }; // postMessage

    function handleClick(input) {
        // event.preventDefault();
        // if (newMessage.name.length <= 1 || newMessage.message.length <= 3) {
        //   return window.alert("Please be more descriptive");
        // } else {
        //   postMessage(newMessage);
        //   setNewMessage(messageTemplate);
        // }
        setShow(input);
        console.log(input);

    }; // handleClcik

    return (
        <motion.div
            initial={trans.initial}
            animate={trans.animate}
            exit={trans.exit}
            style={trans.style}
            transition={trans.time}
        >
            <Box sx={sxWeeklyResultsContainer}>
                <Typography sx={sxHeroText} variant="h1">Together Again</Typography>
                {/* <Agenda /> */}
                <DisplayResults />
            </Box>
        </motion.div>
    );
}
export default WeeklyForm;
