import React from 'react';
import { Helmet } from "react-helmet";

// --- Components --- //
import CardProject from '../CardProject/CardProject';
import ProjectDescription from '../ProjectDescription/ProjectDescription';
import ContactButton from '../ContactButton/ContactButton';


// --- Content --- // 
import {
    swing,
    // other,

} from '../../content/Projects';


// --- MUI --- // 
import {
    Typography,
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

    return (
        <Box id="WorkSectionParent">
            <Helmet>
                <title>Tinker Our Work</title>
                <meta
                    name="description"
                    content="We've been tinkering, view our work, gallery, project photos, completed work"
                />
            </Helmet>
            <Box id="sxWorkSectionOne" sx={sxWorkSectionOne}>
                <Box id="sxHeroTextContentWork" sx={sxHeroTextContent}>
                    <Typography sx={sxWorkHeroText} variant='h1'>We've</Typography>
                    <Typography sx={sxWorkHeroText} variant='h1'>Been Tinkering</Typography>
                </Box>

                <Box id="sxProjectContainerSwing" sx={sxProjectContainer}>
                    <ProjectDescription
                        id="ProjectDescriptionSwing"
                        title={swing.title}
                        body={swing.body}
                        details={swing.details}
                    />
                    <Box id="sxCardProjectGallerySwing" sx={sxCardProjectGallery}>
                        {swing.content.map(content => (
                            <CardProject
                                key={content.id}
                                image={content.image}
                                imageCaption={content.caption}
                                alt={content.caption}
                            />
                        ))}
                    </Box>
                </Box>
                <ContactButton />
            </Box>
        </Box>
    )
}
export default Work;