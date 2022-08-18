
import React, { useState, useEffect } from 'react';
import axios from "axios";

import ExpandableDiv from '../ExpandableDiv/ExpandableDiv';

// --- MUI --- // 
import {
    Typography,
    CardMedia,
    Box,

} from '@mui/material';


import {
    sxMessageBoardContent,
    sxMessageBoardText,

} from '../sxStyles';

function MessageBoard({messageList}) {

    // function handleClick() {
    //     console.log('clicked');
    // }; // handleClick

    let listMessages;

    return (

        <Box sx={sxMessageBoardContent}>
            {messageList.map(message => (
                <Box sx={sxMessageBoardText} key={message.id}>
                    <Typography variant='body1'><span>{message.date.split('T', [1])}</span></Typography>
                    <Typography variant='h5'><span>{message.name}</span></Typography>
                    <Typography variant='h6'><span>{message.message}</span></Typography>
                    <Typography variant='body1'><span>{message.likes}</span></Typography>
                </Box>
            ))}

        </Box>

    )
}
export default MessageBoard;