
import React, { useState } from 'react';

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

function Contact() {

    const [message, setMessage] = useState('');

    const postMessage = (event) => {
        console.log("post message clicked");
        event.preventDefault();
    
        // dispatch({
        //   type: 'REGISTER',
        //   payload: {
        //     username: username,
        //     password: password,
        //   },
        // });
        // dispatch({ type: 'FETCH_PLANTS' });
        // dispatch({ type: 'FETCH_PHOTOS' });
        // window.location.reload(false);
      }; // postMessage

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
                <Typography variant="h4">Message Board</Typography>
                <MessageBoard />
            </Box>

        </Box>
    )
}
export default Contact;