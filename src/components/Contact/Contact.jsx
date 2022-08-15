
import React from 'react';

import ExpandableDiv from '../ExpandableDiv/ExpandableDiv';

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


} from '../sxStyles';

function Contact() {

    let value = ''
    function handleClick() {
        console.log('clicked');
    }; // handleClick

    return (

        <Box sx={sxContactSectionOne}>
            <Box sx={sxHeroTextContent}>
                <Typography sx={sxContactText} variant='h1'>Leave A Note</Typography>
                <Typography sx={sxContactText} variant='h1'>Write A Poem</Typography>
                <Typography sx={sxContactText} variant='h1'>Drop A Message</Typography>
            </Box>

            <Box sx={sxInputContainer}>
                <TextField sx={sxInputText}
                    id="filled-multiline-static"
                    label="What's Up Buttercup?"
                    multiline
                    rows={5}
                    // placeholder="Hey, this is my feedback"
                    variant="filled"
                />
                <Button sx={sxPostButton}>Post Message</Button>
            </Box>
            
        </Box>
    )
}
export default Contact;