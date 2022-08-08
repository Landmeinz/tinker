
import React from 'react';

import ExpandableDiv from '../ExpandableDiv/ExpandableDiv';

import {
    useNavigate,
} from 'react-router-dom';


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
  sxWorkContainer,
  sxHeroText,

  sxSectionOne,
  sxHeroTextContent,
  sxHeroImageContent,
  sxHeroImage,

} from '../sxStyles';

function Work() {

    const navigate = useNavigate();

        function handleClick(path) {
      navigate(path);
    }; 

    return (

        <Box sx={sxWorkContainer}>
            <Typography sx={sxHeroText} variant='h1'>We've Been Tinkering</Typography>

            <Box sx={sxSectionOne}>
                <Box sx={sxHeroTextContent}>
                    <Typography sx={sxHeroText} variant='h1'>Work</Typography>
                    <Typography sx={sxHeroText} variant='h1'>Work</Typography>
                </Box>

                <Box sx={sxHeroImageContent} onClick={() => handleClick('/home')}>
                    <CardMedia sx={sxHeroImage}
                        component="img"
                        // height="194"
                        image="/images/tools1.jpg"
                    // alt="Some Image"
                    />
                    <CardMedia sx={sxHeroImage}
                        component="img"
                        // height="194"
                        image="/images/tools2.jpg"
                    // alt="Some Image"
                    />
                    <CardMedia sx={sxHeroImage}
                        component="img"
                        // height="194"
                        image="/images/notes.jpg"
                    // alt="Some Image"
                    />
                </Box>
            </Box>

        </Box>

    )
}
export default Work;