
import React from 'react';
import { useLocation } from 'react-router';
import { useNavigate } from 'react-router-dom';

import ExpandableDiv from '../ExpandableDiv/ExpandableDiv';

// --- MUI --- // 
import {
    Typography,
    CardMedia,
    Box,
    Button,

} from '@mui/material';


import {
    sxContactButtonContainer,
    sxContactButton,
    sxBreaksH4,

} from '../sxStyles';

function ContactButton() {

    const navigate = useNavigate();

    function handleNav(path) {
        navigate(path);
        window.scrollTo(0, 0);
    }; // handleNav

    return (

        <Typography variant='h4' sx={sxContactButtonContainer}>
            <Button onClick={() => handleNav("/contact")} sx={sxContactButton}>Drop us a message</Button>
        </Typography>

    )
}
export default ContactButton;