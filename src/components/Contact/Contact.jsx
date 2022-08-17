
import React, { useState, useEffect } from 'react';
import axios from "axios";

import ExpandableDiv from '../ExpandableDiv/ExpandableDiv';
import MessageBoard from '../MessageBoard/MessageBoard';

// --- MUI --- // 
import {
    Typography,
    CardMedia,
    Box,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    TextField,
    Button,

} from '@mui/material';


import {
    sxExpandContainer,
    sxAccordionCenterText,

    theme,
    sxApp,
    sxAppContainer,
    sxSectionOne,
    sxLeftColumn,
    sxRightColumn,
    sxHeroTextContent,
    sxHeroText,
    sxHeroImageContent,
    sxHeroImage,

    sxSectionTwo,
    sxSectionTwoContent,

    sxSectionThree,
    sxSectionThreeContent,

    sxSectionFour,
    sxSectionFourContent,

    sxContactSectionOne,
    sxContactText,
    sxInputText,
    sxInputContainer,
    sxPostButton,
    sxMessageBoardContainer,



} from '../sxStyles';

function Contact({currentDate}) {

    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [messageList, setMessageList] = useState([]);

    useEffect(() => {
        fetchMesageList();
    }, []);

    const messageObject = {
        name,
        message,
    };

    const postMessage = (event) => {
        console.log("post message clicked");
        console.log(`${name}, ${message}`);
        event.preventDefault();
        setName = '';
        setMessage = '';
        console.log(`${name}, ${message}`);

        // dispatch({
        //   type: 'REGISTER',
        //   payload: {
        //     username: username,
        //     password: password,
        //   },
        // });
        // dispatch({ type: 'FETCH_PLANTS' });
        // dispatch({ type: 'FETCH_PHOTOS' });

    }; // postMessage

    const fetchMesageList = () => {
        console.log("in fetchMesageList");
        axios
          .get("http://localhost:5050/api/message")
          .then((response) => {
            console.log("GET /api/message RESPONSE': ", response);
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

            <form className="formPanel" onSubmit={postMessage}>
                <Box sx={sxInputContainer}>
                    <TextField sx={sxInputText}
                        id="filled-static"
                        label="Name"
                        required
                        variant="filled"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                    <TextField sx={sxInputText}
                        id="filled-multiline-static"
                        label="What's Up Buttercup?"
                        multiline
                        required
                        rows={5}
                        variant="filled"
                        value={message}
                        onChange={(event) => setMessage(event.target.value)}
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