import React, { useState, useEffect } from 'react';


// --- MUI --- // 
import {
    Typography,
    CardMedia,
    Box,

} from '@mui/material';


// --- Sx Styles --- //
import {
    sxMessageBoardContent,
    sxMessageBoardText,
    sxMsgBoardCardHeader,
    sxMsgBoardCardBody,
    sxMsgBoardCardBodyText,
    sxBreaksH4,
    sxBreaksH5,

} from '../sxStyles';


function MessageBoard({ messageList }) {

    return (
        <Box id="sxMessageBoardContent" sx={sxMessageBoardContent}>
            {messageList.map(message => (
                <Box id="sxMessageBoardText" sx={sxMessageBoardText} key={message.id}>
                    {/* <Typography variant='body1'><span>{message.likes}</span></Typography> */}
                    <Box sx={sxMsgBoardCardHeader}>
                        <Typography sx={sxBreaksH5} variant='h5'><span>{message.name}</span></Typography>
                        <Typography sx={sxMsgBoardCardBodyText} variant='body1'><span>{message.date.split('T', [1])}</span></Typography>
                    </Box>
                    <Box sx={sxMsgBoardCardBody}>
                        <Typography sx={sxMsgBoardCardBodyText} variant='h6'><span>{message.message}</span></Typography>
                    </Box>
                </Box>
            ))}
        </Box>
    )
}
export default MessageBoard;