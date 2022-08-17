
import React from 'react';

// import ExpandableDiv from '../ExpandableDiv/ExpandableDiv';

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
    sxDetailsContainer,
    sxBreaksH4,
    sxBreaksH5,


} from '../sxStyles';

function CardAdditionalDetails({ title, body, details }) {

    // function handleClick() {
    //     console.log('clicked');
    // }; // handleClick

    return (

        <Box>
            <Box sx={sxAccordionCenterText} >
                <Typography sx={sxBreaksH4} variant='h4'>{title}</Typography>
            </Box>

            <Box sx={sxDetailsContainer}>
                <Typography sx={sxBreaksH5} variant='h5'>{body}</Typography>
                <Typography sx={sxBreaksH5} variant='h5'>{details}</Typography>
            </Box>
        </Box>

    )
}
export default CardAdditionalDetails;