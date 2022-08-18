import React from 'react';
import { useNavigate } from 'react-router-dom';


// --- Components --- //
import CardProject from '../CardProject/CardProject';
import ProjectDescription from '../ProjectDescription/ProjectDescription';
import ContactButton from '../ContactButton/ContactButton';


// --- Content --- // 
import {
    swing,
    other,

} from '../../content/Projects';


// --- MUI --- // 
import {
    Typography,
    CardMedia,
    Box,

} from '@mui/material';


// --- Sx Styles --- //
import {
    sxWorkHeroText,
    sxWorkSectionOne,
    sxHeroTextContent,
    sxProjectContainer,
    sxCardProjectGallery,

} from '../sxStyles';


function Work({ currentDate }) {

    const navigate = useNavigate();

    function handleClick(path) {
        navigate(path);
    };

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
                <ContactButton />
            </Box>
        </Box>
    )
}
export default Work;