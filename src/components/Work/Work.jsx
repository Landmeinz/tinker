
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
    sxWorkHeroText,
    sxWorkSectionOne,
    sxHeroTextContent,
    sxHeroImageContent,
    sxHeroImage,
    sxBreaksH4,
    sxProjectContainer,
    sxCardProjectGallery,

} from '../sxStyles';

function Work({currentDate}) {

    const navigate = useNavigate();

    function handleClick(path) {
        navigate(path);
    };

    let swing = {
        title: 'New House, Old Tree, Two Swings For Newlyweds',
        body: 'Owners of a new house were gifted with two handmade wooden teak swings hung and supported with 1" twisted manilla rope. Swings were designed in two collaboration sessions and were completely finished in three wood shop visits. ',
        // details: 'noDetails',

        imagePath1: '/images/swing/process1.jpg',
        imageCaption1: 'sketches and tinkering',

        imagePath2: '/images/swing/process2.jpg',
        imageCaption2: 'teak wood breakdown',

        imagePath3: '/images/swing/process3.jpg',
        imageCaption3: 'making em smooth',

        imagePath4: '/images/swing/finished1.jpg',
        imageCaption4: 'linseed oil finish, ropes spliced in',

        imagePath5: '/images/swing/finished2.jpg',
        imageCaption5: 'finished product',

        imagePath6: '/images/swing/finished3.jpg',
        imageCaption6: 'swings installed',
    }

    let other = {
        title: 'New Project Title Goes Here',
        body: 'This is a longer description about this project',
        // details: 'noDetails',
        imagePath1: '/images/tools1.jpg',
        imageCaption1: 'optional image caption',

        imagePath2: '/images/tools1.jpg',
        imageCaption2: 'imageCaption2',

        imagePath3: '/images/tools1.jpg',
        imageCaption3: 'imageCaption3',

        imagePath4: '/images/tools1.jpg',
        imageCaption4: 'imageCaption4',

        imagePath5: '/images/tools1.jpg',
        imageCaption5: 'imageCaption5',

        imagePath6: '/images/tools1.jpg',
        imageCaption6: 'imageCaption6',
    }

    return (



        <Box>
            <Box sx={sxWorkSectionOne}>
                <Box sx={sxHeroTextContent}>
                    <Typography sx={sxWorkHeroText} variant='h1'>We've</Typography>
                    <Typography sx={sxWorkHeroText} variant='h1'>Been Tinkering</Typography>
                </Box>

                <Box sx={sxProjectContainer}>
                    <ProjectDescription
                        title={swing.title}
                        body={swing.body}
                        details={swing.details}
                    />
                    <Box sx={sxCardProjectGallery}>
                        <CardProject image={swing.imagePath1} imageCaption={swing.imageCaption1} />
                        <CardProject image={swing.imagePath2} imageCaption={swing.imageCaption2} />
                        <CardProject image={swing.imagePath3} imageCaption={swing.imageCaption3} />
                        <CardProject image={swing.imagePath4} imageCaption={swing.imageCaption4} />
                        <CardProject image={swing.imagePath5} imageCaption={swing.imageCaption5} />
                        <CardProject image={swing.imagePath6} imageCaption={swing.imageCaption6} />
                    </Box>
                </Box>

                <Box sx={sxProjectContainer}>
                    <ProjectDescription
                        title={other.title}
                        body={other.body}
                        details={other.details}
                    />
                    <Box sx={sxCardProjectGallery}>
                        <CardProject image={other.imagePath1} imageCaption={other.imageCaption1} />
                        <CardProject image={other.imagePath2} imageCaption={other.imageCaption2} />
                        <CardProject image={other.imagePath3} imageCaption={other.imageCaption3} />
                        <CardProject image={other.imagePath4} imageCaption={other.imageCaption4} />
                        <CardProject image={other.imagePath5} imageCaption={other.imageCaption5} />
                        <CardProject image={other.imagePath6} imageCaption={other.imageCaption6} />
                    </Box>
                </Box>

            </Box>
        </Box>

    )
}
export default Work;