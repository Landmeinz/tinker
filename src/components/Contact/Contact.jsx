import React, { useState, useEffect } from 'react';
import axios from "axios";


// --- Components --- //
import MessageBoard from '../MessageBoard/MessageBoard';

// --- MUI --- // 
import {
    Typography,
    Box,
    TextField,
    Button,

} from '@mui/material';


// --- Sx Styles --- // 
import {
    sxHeroTextContent,
    sxContactSectionOne,
    sxContactText,
    sxInputText,
    sxInputContainer,
    sxPostButton,
    sxMessageBoardContainer,
    sxMessageBoardHeader,
    sxBreaksH4,
    // sxBreaksH5,

} from '../sxStyles';


function Contact({ currentDate }) {
    
    useEffect(() => {
        fetchMessageList();
    }, []);

    let messageTemplate = {
        name: '',
        message: '',
        date: 'today'
    };

    const [newMessage, setNewMessage] = useState(messageTemplate);
    const [messageList, setMessageList] = useState([]);

    const handleNameChange = (event, property) => {
        setNewMessage({
            ...newMessage,
            [property]: event.target.value
        })
    }; // handleNameChange

    const handleSubmit = (event) => {
        event.preventDefault();

        if (newMessage.name.length <= 1 || newMessage.message.length <= 3) {
            return window.alert("Please be more descriptive");
        }
        else {
            postMessage(newMessage);
            setNewMessage(messageTemplate);
        }
    }; // handleSubmit

    const postMessage = (newMessage) => {

        axios({
            method: "POST",
            url: "http://localhost:5050/api/message",
            data: newMessage,
        })
            .then((response) => {
                fetchMessageList();

            })
            .catch((error) => {
                console.log("Error on POST", error);
            });
    }; // postMessage

    const fetchMessageList = () => {

        axios
            .get("http://localhost:5050/api/message")
            .then((response) => {
                setMessageList(response.data);

            })
            .catch((err) => {
                console.log("Error on axios GET: ", err);
            });
    }; // fetchMessageList

    return (
        
        <Box id="sxContactSectionOne" sx={sxContactSectionOne}>
            <Box id="sxHeroTextContent" sx={sxHeroTextContent}>
                <Typography sx={sxContactText} variant='h1'>Leave A Note</Typography>
                <Typography sx={sxContactText} variant='h1'>Write A Poem</Typography>
                <Typography sx={sxContactText} variant='h1'>Drop A Message</Typography>
            </Box>

            <form className="formPanel" onSubmit={handleSubmit}>
                <Box id="sxInputContainer" sx={sxInputContainer}>
                    <TextField sx={sxInputText}
                        id="filled-static"
                        label="Your Name"
                        required
                        variant="filled"
                        value={newMessage.name}
                        onChange={(event) => handleNameChange(event, 'name')}
                    />
                    <TextField sx={sxInputText}
                        id="filled-multiline-static"
                        label="What's Up Buttercup?"
                        multiline
                        required
                        rows={5}
                        variant="filled"
                        value={newMessage.message}
                        onChange={(event) => handleNameChange(event, 'message')}
                    />
                    <Button sx={sxPostButton} type="submit" size="large">Post My Public Message</Button>
                </Box>
            </form>

            <Box id="sxMessageBoardContainer" sx={sxMessageBoardContainer}>
                <Box id="sxMessageBoardHeader" sx={sxMessageBoardHeader}>
                    <Typography color={'info.light'} sx={sxBreaksH4} variant="h4">See What Other's Have Said</Typography>
                </Box>

                <MessageBoard messageList={messageList} />
            </Box>
        </Box>
    )
}
export default Contact;