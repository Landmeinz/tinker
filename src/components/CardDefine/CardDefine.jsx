
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

    sxNavContainer,
    sxNavContent,
    sxMenuIcon,
    sxMenuList,
    sxMenuItem,
    sxTinker,
    sxTinkerDefined,

} from '../sxStyles';

function CardDefine({title, body, tag}) {

    // function handleClick() {
    //     console.log('clicked');
    // }; // handleClick

    return (

        <Box>
            <Box sx={sxTinkerDefined}>
                <Typography variant='h4'>{title}</Typography>
                <Box>
                    <Typography variant='h4'>{body}</Typography>
                    <br />
                    <Typography variant='h5'>{tag}</Typography>
                </Box>
            </Box>
        </Box>

    )
}
export default CardDefine;