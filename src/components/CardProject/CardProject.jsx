
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

    sxCardProjectContainer,
    sxProjectImageContent,
    sxCardProject,
    sxImageCaption,

} from '../sxStyles';

function CardProject({image, imageCaption}) {

    // function handleClick() {
    //     console.log('clicked');
    // }; // handleClick

    return (

            <Box sx={sxProjectImageContent}>
                <CardMedia
                    sx={sxCardProject}
                    component="img"
                    image={image} />
                <Typography sx={sxImageCaption} variant='body1'>{imageCaption}</Typography>
            </Box>            

    )
}
export default CardProject;