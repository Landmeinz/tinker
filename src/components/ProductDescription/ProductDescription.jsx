
import React from 'react';


// --- MUI --- // 
import {
    Typography,
    Box,

} from '@mui/material';


// --- Sx Styles --- // 
import {
    sxProductDescriptionTitle,
    sxProductDescriptionContent,
    sxBreaksH4,
    sxBreaksH5,

} from '../sxStyles';


function ProductDescription({title, body, details}) {

    return (
        <Box>
            <Box sx={sxProductDescriptionTitle} >
                <Typography sx={sxBreaksH4} variant='h4'>{title}</Typography>
            </Box>

            <Box sx={sxProductDescriptionContent}>
                <Typography sx={sxBreaksH5} variant='h5'>{body}</Typography>
                <Typography sx={sxBreaksH5} variant='h5'>{details}</Typography>
            </Box>
        </Box>
    )
}
export default ProductDescription;