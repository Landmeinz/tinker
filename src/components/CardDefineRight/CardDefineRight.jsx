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
    sxCardDefineRightContainer,
    sxBoxColor,
    sxCenterCircle,
    sxCircleFrame,
    sxBreaksH4,
    sxBreaksH5,

} from '../sxStyles';


function CardDefineRight({ title, body, tag }) {

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