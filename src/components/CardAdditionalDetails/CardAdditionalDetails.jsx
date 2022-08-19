import React from 'react';


// --- MUI --- // 
import {
    Typography,
    Box,

} from '@mui/material';


// --- Sx Styles --- // 
import {
    sxAdditionalDetailsTitle,
    sxDetailsContainer,
    sxBreaksH4,
    sxBreaksH5,

} from '../sxStyles';


function CardAdditionalDetails({ title, body, details }) {

    return (
        <Box>
            <Box id="sxAdditionalDetailsTitle" sx={sxAdditionalDetailsTitle} >
                <Typography sx={sxBreaksH4} variant='h4'>{title}</Typography>
            </Box>

            <Box id="sxDetailsContainer" sx={sxDetailsContainer}>
                <Typography sx={sxBreaksH5} variant='h5'>{body}</Typography>
                <Typography sx={sxBreaksH5} variant='h5'>{details}</Typography>
            </Box>
        </Box>
    )
}
export default CardAdditionalDetails;