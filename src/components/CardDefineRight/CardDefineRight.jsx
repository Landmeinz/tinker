
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
    sxTinkerDefined,
    sxCardDefineBody,
    sxCardDefineRightContainer,
    sxBoxColor,
    sxCenterCircle,
    sxCircleFrame,
    sxBreaksH4,
    sxBreaksH5,


} from '../sxStyles';

function CardDefineRight({ title, body, tag }) {

    // function handleClick() {
    //     console.log('clicked');
    // }; // handleClick

    return (

        <Box sx={sxCardDefineRightContainer}>

            <Box sx={sxBoxColor}>
                <Box sx={sxCenterCircle}>
                    <img style={sxCircleFrame} src="https://i.giphy.com/media/RxVpypN9Ri2Yg/giphy.webp" />
                </Box>
            </Box>

            <Box sx={sxTinkerDefined}>
                <Typography sx={sxBreaksH4} variant='h4'>{title}</Typography>
                <Box sx={sxCardDefineBody}>
                    <Typography sx={sxBreaksH4} variant='h4'>{body}</Typography>
                    <Typography sx={sxBreaksH5} variant='h5'>{tag}</Typography>
                </Box>
            </Box>

        </Box>

    )
}
export default CardDefineRight;