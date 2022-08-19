
import React from 'react';
import { useNavigate } from 'react-router-dom';


// --- MUI --- // 
import {
    Typography,
    Button,

} from '@mui/material';


// --- Sx Styles --- // 
import {
    sxContactButtonContainer,
    sxContactButton,
    // sxBreaksH4,

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