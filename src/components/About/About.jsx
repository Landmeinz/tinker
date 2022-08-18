
import React from 'react';

import ExpandableDiv from '../ExpandableDiv/ExpandableDiv';
import CardDefineRight from '../CardDefineRight/CardDefineRight';
import CardDefineLeft from '../CardDefineLeft/CardDefineLeft';
import CardAdditionalDetails from '../CardAdditionalDetails/CardAdditionalDetails';
import ContactButton from '../ContactButton/ContactButton';

import { useLocation } from 'react-router';
import { useNavigate } from 'react-router-dom';

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
    sxAboutSectionOne,
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
    sxTinkerDefined,
    sxCardDefineContainer,
    sxBoxColor,

    sxTransitionStyles,


} from '../sxStyles';

function About({currentDate}) {

    // const navigate = useNavigate();

    let titleOne = `Tinker (noun)`;
    let bodyOne = `"Mender of kettles, pots, pans, etc.," mid-13c. (as a surname), of uncertain origin. Some connect the word with the sound made by light hammering on metal.  A person who travels from place to place mending metal utensils as a way of making a living.`;
    let tagOne = `Tinkerers had a reputation for free and casual use of profanity.`;

    let titleTwo = `Tinker (verb)`;
    let bodyTwo = `1590s, "to work as a tinker," from tinker (n.)  Meaning "work imperfectly, keep busy in a useless way," is first found 1650s. Attempt to repair or improve something in a casual or desultory way, often to no useful effect.`;
    let tagTwo = `Related: tinkered, tinkering`;

    let titleThree = `Tinkering requires dreaming up some wild ideas, taking the time to prototype and test, and being willing to fail early and often.`;
    let titleFour = `To tinker properly the designer's perspective embraces empathy, optimism, iteration, creativity, and ambiguity.`;
    let titleFive = "We're a creative group of entrepreneurs, designers, architects, engineers, developers, and researchers";

    return (

        <Box>
            <Box sx={sxAboutSectionOne}>
                <Box sx={sxHeroTextContent}>
                    <Typography sx={sxHeroText} variant='h1'>Together</Typography>
                    <Typography sx={sxHeroText} variant='h1'>We Tinker</Typography>
                </Box>

                <CardDefineRight title={titleOne} body={bodyOne} tag={tagOne} />
                <CardDefineLeft title={titleTwo} body={bodyTwo} tag={tagTwo} />

                <CardAdditionalDetails title={titleFive} />
                <CardAdditionalDetails title={titleThree} />
                <CardAdditionalDetails title={titleFour} />

                <ContactButton />
            </Box>
        </Box>

    )
}
export default About;