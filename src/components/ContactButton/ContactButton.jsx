
import React from 'react';
import { useLocation } from 'react-router';
import { useNavigate } from 'react-router-dom';

import ExpandableDiv from '../ExpandableDiv/ExpandableDiv';

// --- MUI --- // 
import {
    Typography,
    CardMedia,
    Box,
    Button,
    Accordion,
    AccordionSummary,
    AccordionDetails,

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
    sxContactButtonContainer,
    sxContactButton,

} from '../sxStyles';

function ContactButton() {

    const navigate = useNavigate();

    function handleNav(path) {
        navigate(path);
        window.scrollTo(0, 0);
    }; // handleNav

    return (

        <Box sx={sxContactButtonContainer}>
            <Button onClick={() => handleNav("/contact")} sx={sxContactButton}>Drop us a message</Button>
        </Box>

    )
}
export default ContactButton;