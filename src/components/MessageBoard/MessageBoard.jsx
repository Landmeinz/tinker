
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
    sxMessageBoardContent,

} from '../sxStyles';

function MessageBoard() {

    // function handleClick() {
    //     console.log('clicked');
    // }; // handleClick

    return (

        <Box sx={sxMessageBoardContent}>
            <Typography variant='h5'>title</Typography>
            <Typography variant='body1'>their message will show here</Typography>
        </Box>

    )
}
export default MessageBoard;