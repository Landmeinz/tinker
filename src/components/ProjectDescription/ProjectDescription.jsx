
import React from 'react';


// --- MUI --- // 
import {
    Typography,
    CardMedia,
    Box,

} from '@mui/material';


// --- Sx Styles --- // 
import {
    sxProjectDescriptionTitle,
    sxProjectDescriptionContent,
    sxBreaksH4,
    sxBreaksH5,

} from '../sxStyles';


function ProjectDescription({title, body, details}) {

    return (
        <Box>
            <Box sx={sxProjectDescriptionTitle} >
                <Typography sx={sxBreaksH4} variant='h4'>{title}</Typography>
            </Box>

            <Box sx={sxProjectDescriptionContent}>
                <Typography sx={sxBreaksH5} variant='h5'>{body}</Typography>
                <Typography sx={sxBreaksH5} variant='h5'>{details}</Typography>
            </Box>
        </Box>
    )
}
export default ProjectDescription;