import React from 'react';


// --- MUI --- // 
import {
    Typography,
    CardMedia,
    Box,

} from '@mui/material';


// --- Sx Styles --- // 
import {
    sxTinkerDefined,
    sxCardDefineBody,
    sxCardDefineLeftContainer,
    sxBoxColor,
    sxCircleFrame,
    sxCenterCircle,
    sxBreaksH4,
    sxBreaksH5,

} from '../sxStyles';


function CardDefineRight({ title, body, tag }) {

    return (
        <Box sx={sxCardDefineLeftContainer}>
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