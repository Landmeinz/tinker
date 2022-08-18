import React from 'react';


// --- MUI --- // 
import {
    Typography,
    CardMedia,
    Box,

} from '@mui/material';


// --- Sx Styles --- // 
import {
    sxFooterContainer,

} from '../sxStyles';


function Footer() {

    return (
        <Box id="sxFooterContainer" sx={sxFooterContainer}>
            <Typography variant='body2'>Tinker Often 2022</Typography>
        </Box>
    )
}
export default Footer;