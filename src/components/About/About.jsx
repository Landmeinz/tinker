
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
    sxExpandContainer,
    sxAccordionCenterText,

    theme,
    sxApp,
    sxAppContainer,
    sxSectionOne,
    sxLeftColumn,
    sxRightColumn,
    sxHeroTextContent,
    sxHeroText,
    sxHeroImageContent,
    sxHeroImage,

    sxSectionTwo,
    sxSectionTwoContent,

    sxSectionThree,
    sxSectionThreeContent,

    sxSectionFour,
    sxSectionFourContent,

} from '../sxStyles';

function About() {

    const navigate = useNavigate();

    function handleClick(path) {
        navigate(path);
    };

    return (

        <Box>
            <Box sx={sxSectionOne}>
                <Box sx={sxHeroTextContent}>
                    <Typography sx={sxHeroText} variant='h1'>TOGETHER</Typography>
                    <Typography sx={sxHeroText} variant='h1'>WE TINKER</Typography>
                </Box>

                <Box>
                    <Typography variant=''>
                        Tinker (v.)

                        1590s, "to work as a tinker," from tinker (n.). Meaning "work imperfectly, keep busy in a useless way," is first found 1650s. Related: Tinkered; tinkering.
                    </Typography>
                </Box>
                {/* 
                <Box sx={sxHeroImageContent} onClick={() => handleClick('/work')}>
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
                </Box> */}
            </Box>
        </Box>

    )
}
export default About;