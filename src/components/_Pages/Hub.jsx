import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


// --- Components --- //


// --- MUI --- //
import {
    Typography,
    Box,
    Button,

} from '@mui/material';

// --- Sx Styles --- //
import {
    trans,
    sxHeroTextContent,
    sxContactSectionOne,
    sxHubText,
    sxLogoutButton,
    sxUserSection
    // sxBreaksH5,
} from '../sxStyles';

function Hub() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(store => store.user);

    // const currentDate = useSelector((store) => store.currentDate);
    // const messageList = useSelector((store) => store.messageList);
    const [open, setOpen] = useState(false);

    const handleNav = async (path) => {
        navigate(path);
        window.scrollTo(0, 0);
    }

    const handleLogout = async () => {
        console.log('--- clicked on logout --- ');
        dispatch({ type: 'LOGOUT' })
        handleNav('/login');
    }

    return (
        <motion.div
            initial={trans.initial}
            animate={trans.animate}
            exit={trans.exit}
            style={trans.style}
            transition={trans.time}
        >
            <Box id='sxContactSectionOne' sx={sxContactSectionOne}>
                <Helmet>
                    <title>Tinker Contact</title>
                    <meta
                        name='description'
                        content='Leave a note, write a poem, drop a message, contact, email tinker.group'
                    />
                    <meta
                        name='keywords'
                        content='tinker contact, message board, email'
                    />
                    <meta
                        name='author'
                        content='tinker.group, Eric Meinzer, Chris Benner, Adam Donner'
                    />
                </Helmet>

                <Box sx={sxHeroTextContent}>
                    <Box sx={sxUserSection}>
                        <Typography
                            sx={sxHubText}
                            variant='h1'
                        >
                            Hello, {user.name}
                        </Typography>
                        <Button sx={sxLogoutButton} onClick={async () => handleLogout()} variant='contained' color='error'>Logout</Button>
                    </Box>

                    <Typography
                        sx={sxHubText}
                        variant='h1'
                        onClick={async () => handleNav('/weekly-form')}
                    >
                        Tinker Log
                    </Typography>
                    <Typography
                        sx={sxHubText}
                        variant='h1'
                        onClick={async () => handleNav('/comms')}
                    >
                        Communications
                    </Typography>
                    {/* <Typography
                        sx={sxHubText}
                        variant='h1'>
                        Another Thing
                    </Typography>
                    <Typography
                        sx={sxHubText}
                        variant='h1'>
                        Something Else
                    </Typography> */}
                </Box>

            </Box>
        </motion.div>
    );
}

export default Hub;
