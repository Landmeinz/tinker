
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

} from '../sxStyles';

function MessageBoard({messageList}) {

    // function handleClick() {
    //     console.log('clicked');
    // }; // handleClick

    let listMessages;

    return (

        <Box sx={sxMessageBoardContent}>
            <Typography variant='h5'>title</Typography>
            <Typography variant='body1'>their message will show here</Typography>

            {messageList.map(message => (
                <Box key={message.id}>
                    <Typography><span>{message.name}</span></Typography>
                    <Typography><span>{message.message}</span></Typography>
                    <br />
                </Box>
            ))}

        </Box>

    )
}
export default MessageBoard;