import React from 'react';


// --- MUI --- // 
import {
    Typography,
    CardMedia,
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
            <Box sx={sxAdditionalDetailsTitle} >
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