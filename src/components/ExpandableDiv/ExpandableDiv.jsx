import React from 'react';

// --- MUI --- // 
import {
    Typography,
    // CardMedia,
    Box,
    Accordion,
    AccordionSummary,
    AccordionDetails,

} from '@mui/material';


import {
    sxExpandContainer,
    sxAccordionCenterText,


} from '../sxStyles';

function ExpandableDiv({ title, details, detailsTwo }) {

    function handleClick() {
        console.log('clicked');
    }; // handleClick

    return (
        <Box sx={sxExpandContainer} onClick={() => handleClick()}>
            <Accordion>
                <AccordionSummary
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography sx={sxAccordionCenterText} variant='h3'>
                        {title}
                    </Typography>
                </AccordionSummary>

                <AccordionDetails>
                    <Typography variant='h5'>
                        {details}
                    </Typography>
                    <br />
                    <Typography variant='h5'>
                        {detailsTwo}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    );
}
export default ExpandableDiv;
