
import React, { useState, useEffect } from 'react';
import axios from "axios";

import MessageBoard from '../MessageBoard/MessageBoard';

// --- MUI --- // 
import {
    Typography,
    CardMedia,
    Box,
    TextField,
    Button,

} from '@mui/material';


import {
    sxHeroTextContent,
    sxContactSectionOne,
    sxContactText,
    sxInputText,
    sxInputContainer,
    sxPostButton,
    sxMessageBoardContainer,


} from '../sxStyles';

function Contact({ currentDate }) {

    let messageTemplate = {
        name: '',
        message: '',
        date: 'today'
    };

    const [newMessage, setNewMessage] = useState(messageTemplate);
    const [messageList, setMessageList] = useState([]);

    useEffect(() => {
        fetchMesageList();
    }, []);



    const handleNameChange = (event, property) => {
        console.log(`--- handleNameChange: ${event.target.value}`);
        setNewMessage({
            ...newMessage,
            [property]: event.target.value
        })
    } // handleNameChange


    const handleSubmit = (event) => {
        event.preventDefault();

        console.log('--- CLICKED --- hit handleSubmit ');

        console.log('-- the newMessage:', newMessage);

        postMessage(newMessage);
        console.log('-- called postMessage() --');

        setNewMessage(messageTemplate);
        console.log('-- setNewMessage back to empty --');
    } // handleSubmit



    const postMessage = (newMessage) => {
        console.log(`--- newMessage in postMessage: ${newMessage.name}, ${newMessage.message}, ${newMessage.date} ---`);
        axios({
            method: "POST",
            url: "http://localhost:5050/api/message",
            data: newMessage,
        })
            .then((response) => {
                console.log("--- postMessage Response is", response);
                fetchMesageList();
                console.log(`--- refresh message list after POST`);
            })
            .catch((error) => {
                console.log("Error on POST", error);
            });
    };

    const fetchMesageList = () => {
        // console.log("--- in fetchMesageList ---");
        axios
            .get("http://localhost:5050/api/message")
            .then((response) => {
                // console.log("GET /api/message RESPONSE': ", response);
                setMessageList(response.data);

            })
            .catch((err) => {
                console.log("Error on axios GET: ", err);
            });
    };



    return (

        <Box sx={sxContactSectionOne}>
            <Box sx={sxHeroTextContent}>
                <Typography sx={sxContactText} variant='h1'>Leave A Note</Typography>
                <Typography sx={sxContactText} variant='h1'>Write A Poem</Typography>
                <Typography sx={sxContactText} variant='h1'>Drop A Message</Typography>
            </Box>

            <form className="formPanel" onSubmit={handleSubmit}>
                <Box sx={sxInputContainer}>
                    <TextField sx={sxInputText}
                        id="filled-static"
                        label="Name"
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
                    <Button sx={sxPostButton} type="submit" size="large">Post My Message</Button>
                </Box>
            </form>

            <Box sx={sxMessageBoardContainer}>
                <Typography variant="h4">Message Board {currentDate[0]?.current_date.split('T', [1])}</Typography>
                <MessageBoard messageList={messageList} />
            </Box>

        </Box>
    )
}
export default Contact;