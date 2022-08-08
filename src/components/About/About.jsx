
import React from 'react';

import ExpandableDiv from '../ExpandableDiv/ExpandableDiv';
import CardDefine from '../CardDefine/CardDefine';

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
    sxTinkerDefined,

} from '../sxStyles';

function About() {

    const navigate = useNavigate();

    let titleN = `Tinker (n.)`;
    let bodyN = `"Mender of kettles, pots, pans, etc.," mid-13c. (as a surname), of uncertain origin. Some connect the word with the sound made by light hammering on metal.  A person who travels from place to place mending metal utensils as a way of making a living.`;
    let tagN = `Tinkers' had a reputation for free and casual use of profanity`;

    let titleV = `Tinker (v.)`;
    let bodyV = `1590s, "to work as a tinker," from tinker (n.)  Meaning "work imperfectly, keep busy in a useless way," is first found 1650s. Attempt to repair or improve something in a casual or desultory way, often to no useful effect.`;
    let tagV = `Related: tinkered, tinkering`;


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

                <CardDefine title={titleN} body={bodyN} tag={tagN}/>

                <CardDefine title={titleV} body={bodyV} tag={tagV}/>

                {/* <Box sx={sxTinkerDefined}>
                    <Typography variant='h4'>Tinker (n.)</Typography>
                    <Box>
                        <Typography variant='h4'>
                        "Mender of kettles, pots, pans, etc.," mid-13c. (as a surname), of uncertain origin. Some connect the word with the sound made by light hammering on metal.
                        </Typography>
                        <br/>
                        <Typography variant='h5'>
                        Tinkers' had a reputation for free and casual use of profanity
                        </Typography>
                    </Box>

                    <br/>

                    <Typography variant='h4'>Tinker (v.)</Typography>
                    <Box>
                        <Typography variant='h4'>
                            1590s, "to work as a tinker," from tinker (n.)  Meaning "work imperfectly, keep busy in a useless way," is first found 1650s. 
                        </Typography>
                        <br/>
                        <Typography variant='h5'>
                        Related: tinkered, tinkering
                        </Typography>
                    </Box>


                </Box> */}
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