
import React from 'react';

import ExpandableDiv from '../ExpandableDiv/ExpandableDiv';
import RevealDiv from '../RevealDiv/RevealDiv';

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

function Home() {

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
                </Box>
            </Box>

            <RevealDiv />

            <Box sx={sxSectionTwo}>
                <Box>
                    <Box sx={sxSectionTwoContent}>

                        {/* <Typography variant='h3'>We're a creative group of entrepreneurs, designers, architects, engineers, developers, researchers, and more</Typography>
          <Typography variant='h3'>There's a lot of good ideas out there that have the potential to be great, but in order to take those products to the next level, they may just need a bit of tinkering.</Typography> */}

                        <ExpandableDiv
                            title="We're a creative group of entrepreneurs, designers, architects, engineers, developers, and researchers."

                            details="There's a lot of good ideas out there that have the potential to be great, but in order to take those products to the next level, they may just need a bit of tinkering."

                            detailsTwo=""
                        />

                    </Box>
                </Box>
            </Box>

            <Box sx={sxSectionThree}>
                <Box>
                    <Box sx={sxSectionThreeContent}>
                        {/* <Typography variant='h3'>Tinkering requires dreaming up some wild ideas, taking the time to prototype and test, and being willing to fail early and often.</Typography>
          <Typography variant='h3'>To tinker properly the designer's perspective embraces empathy, optimism, iteration, creativity, and ambiguity.</Typography>
          <Typography variant='h3'>All the while using design thinking and first principle to keep people at the center of every design decision during the process.</Typography> */}

                        <ExpandableDiv
                            title="Tinkering requires dreaming up some wild ideas, taking the time to prototype and test, and being willing to fail early and often."

                            details="To tinker properly the designer's perspective embraces empathy, optimism, iteration, creativity, and ambiguity."

                            detailsTwo="All the while using design thinking and first principle to keep people at the center of every design decision during the process."
                        />

                    </Box>
                </Box>
            </Box>

            <Box sx={sxSectionFour}>
                <Box>
                    <Box sx={sxSectionFourContent}>
                        {/* <Typography variant='h3'>We help clients and customers around the world build the capacity and outcomes required to navigate today’s complexity and lead their markets.</Typography>
          <Typography variant='h3'>As problem solvers, we drive change, build new ventures, and design digital and tangible experiences for business, social, and governmental sectors through co-creation with our clients.</Typography>
          <Typography variant='h3'>As teachers, we help individuals, teams and organizations cultivate the confidence they need to step into the future with optimism and creativity.</Typography> */}

                        <ExpandableDiv
                            title="We help clients and customers around the world build the capacity and outcomes required to navigate today’s complexity and lead their markets."

                            details="As problem solvers, we drive change, build new ventures, and design digital and tangible experiences for business, social, and governmental sectors through co-creation with our clients."

                            detailsTwo="As teachers, we help individuals, teams and organizations cultivate the confidence they need to step into the future with optimism and creativity."
                        />

                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
export default Home;