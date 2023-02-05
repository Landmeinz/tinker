import React, { useState, useEffect } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

// --- Components --- //
import WeeklyForm from "./WeeklyForm";

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

function Hub() {
    const navigate = useNavigate();

    function handleNav(path) {
        navigate(path);
        window.scrollTo(0, 0);
    } // handleNav

    const [open, setOpen] = useState(false);

    // const currentDate = useSelector((store) => store.currentDate);
    // const messageList = useSelector((store) => store.messageList);

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

                <Typography
                    sx={sxContactText}
                    variant="h1"
                    onClick={() => handleNav("/weekly-form")}
                >
                    Tinker Log
                </Typography>
                <Typography
                    sx={sxContactText}
                    variant="h1">
                    Connect on Slack
                </Typography>

            </Box>
        </motion.div>
    );
}
export default Hub;
