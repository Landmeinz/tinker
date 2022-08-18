import React from 'react';


// --- MUI --- // 
import {
    Typography,
    CardMedia,
    Box,

} from '@mui/material';


// --- Sx Styles --- // 
import {
    sxProjectImageContent,
    sxCardProject,
    sxImageCaption,

} from '../sxStyles';


function CardProject({image, imageCaption}) {

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