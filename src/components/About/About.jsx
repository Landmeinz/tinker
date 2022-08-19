import React from 'react';

// --- Components --- //
import CardDefineRight from '../CardDefineRight/CardDefineRight';
import CardDefineLeft from '../CardDefineLeft/CardDefineLeft';
import CardAdditionalDetails from '../CardAdditionalDetails/CardAdditionalDetails';
import ContactButton from '../ContactButton/ContactButton';


// --- Content --- //
import { DefineTextNoun } from '../../content/DefineTextNoun';
import { DefineTextVerb } from '../../content/DefineTextVerb';
import { addDetailsOne, addDetailsTwo, addDetailsThree } from '../../content/AdditionalDetails';


// --- MUI --- // 
import {
    Typography,
    Box,

} from '@mui/material';


// --- Sx Styles --- //
import {
    sxAboutSectionOne,
    sxHeroTextContent,
    sxHeroText,

} from '../sxStyles';


function About({ currentDate }) {
    return (
        <Box>
            <Box id="sxAboutSectionOne" sx={sxAboutSectionOne}>
                <Box id="sxHeroTextContent" sx={sxHeroTextContent}>
                    <Typography sx={sxHeroText} variant='h1'>Together</Typography>
                    <Typography sx={sxHeroText} variant='h1'>We Tinker</Typography>
                </Box>

                <CardAdditionalDetails title={addDetailsOne.title} />

                <CardDefineRight
                    title={DefineTextNoun.title}
                    body={DefineTextNoun.body}
                    tag={DefineTextNoun.tag} />

                <CardDefineLeft
                    title={DefineTextVerb.title}
                    body={DefineTextVerb.body}
                    tag={DefineTextVerb.tag} />
               
                <CardAdditionalDetails title={addDetailsTwo.title} />
                <CardAdditionalDetails title={addDetailsThree.title} />

                <ContactButton />
            </Box>
        </Box>
    )
}
export default About;