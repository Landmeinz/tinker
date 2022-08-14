
import React from 'react';

import ExpandableDiv from '../ExpandableDiv/ExpandableDiv';
import CardProject from '../CardProject/CardProject';
import ProjectDescription from '../ProjectDescription/ProjectDescription';

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

    sxWorkSectionOne,
    sxHeroTextContent,
    sxHeroImageContent,
    sxHeroImage,
    sxBreaksH4,
    sxProjectContainer,
    sxCardProjectGallery,

} from '../sxStyles';

function Work() {

    const navigate = useNavigate();

    function handleClick(path) {
        navigate(path);
    };

    let swing = {
        title: 'Old tree, new swings',
        body: 'This is a longer description about this project',
        // details: 'noDetails',
        imageCaption1: 'optional image caption',
        imageCaption2: 'imageCaption2',
        imageCaption3: 'imageCaption3',
        imageCaption4: 'imageCaption4',
        imageCaption5: 'imageCaption5',
        imageCaption6: 'imageCaption6',

    }

    return (



        <Box>
            <Box sx={sxWorkSectionOne}>
                <Box sx={sxHeroTextContent}>
                    <Typography sx={sxHeroText} variant='h1'>We've</Typography>
                    <Typography sx={sxHeroText} variant='h1'>Been Tinkering</Typography>
                </Box>

                <Box sx={sxProjectContainer}>
                    <ProjectDescription
                        title={swing.title}
                        body={swing.body}
                        details={swing.details}
                    />
                    <Box sx={sxCardProjectGallery}>
                        <CardProject imageCaption={swing.imageCaption1} />
                        <CardProject imageCaption={swing.imageCaption2} />
                        <CardProject imageCaption={swing.imageCaption3} />
                        <CardProject imageCaption={swing.imageCaption4} />
                        <CardProject imageCaption={swing.imageCaption5} />
                        <CardProject imageCaption={swing.imageCaption6} />
                    </Box>
                </Box>
            </Box>
        </Box>

    )
}
export default Work;