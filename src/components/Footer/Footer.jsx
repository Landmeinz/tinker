import React from 'react';

import ExpandableDiv from '../ExpandableDiv/ExpandableDiv';

// --- MUI --- // 
import {
    Typography,
    CardMedia,
    Box,
    Accordion,
    AccordionSummary,
    AccordionDetails,

} from '@mui/material';


import {
    sxFooterContainer,


} from '../sxStyles';

function Footer() {

    // function handleClick() {
    //     console.log('clicked');
    // }; // handleClick

    return (

        <Box sx={sxFooterContainer}>
            <Typography variant='body2'>Tinker 2022</Typography>
        </Box>

    )
}
export default Footer;