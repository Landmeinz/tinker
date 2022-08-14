
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
    Card,

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
    sxCardDefineBody,
    sxCardDefineContainer,
    sxBoxColor,
    sxCircleFrame,
    sxCenterCircle,
    sxBreaksH4,
    sxBreaksH5,


} from '../sxStyles';

function CardDefineRight({ title, body, tag }) {

    // function handleClick() {
    //     console.log('clicked');
    // }; // handleClick

    return (

        <Box sx={sxCardDefineContainer}>
            <Box sx={sxTinkerDefined}>
                <Typography sx={sxBreaksH4} variant='h4'>{title}</Typography>
                <Box sx={sxCardDefineBody}>
                    <Typography sx={sxBreaksH4} variant='h4'>{body}</Typography>
                    <Typography sx={sxBreaksH5} variant='h5'>{tag}</Typography>
                </Box>
            </Box>

            <Box sx={sxBoxColor}>
                <Box sx={sxCenterCircle}>
                    <img src="https://i.giphy.com/media/xThuWbe1xJ4jv5Cszm/giphy.webp" style={sxCircleFrame} />
                </Box>
            </Box>
        </Box>
    )
}
export default CardDefineRight;