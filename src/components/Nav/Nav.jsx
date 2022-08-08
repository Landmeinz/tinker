
import React, { useState } from 'react';

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
    Menu,
    MenuList,
    MenuItem,
    Button,


} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';

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

    sxNavContainer,
    // sxNavContent,
    sxMenuIcon,
    sxMenuList,
    sxMenuItem,
    sxTinker,


} from '../sxStyles';

function Nav() {

    const navigate = useNavigate();

    let anchorEl = false;
    const [openStatus, setOpenStatus] = useState(false);

    function handleNav(path) {
        navigate(path);
        setOpenStatus(false);
    }; // handleNav

    // function openOrCloseMenu() {
    //     setOpenStatus(!openStatus);
    // }; // openOrCloseMenu

    return (

        <Box sx={sxNavContainer}>
            <Typography sx={sxTinker} variant='h4' onClick={() => handleNav('/about')}>Tinker</Typography>
            <Typography sx={sxTinker} variant='h5' onClick={() => handleNav('/work')}>Our Work</Typography>
        </Box>

    )
}
export default Nav;

// {openStatus &&
//                     <MenuList sx={sxMenuList}>
//                         <MenuItem sx={sxMenuItem} onClick={() => handleNav('/about')}>About</MenuItem>
//                         <MenuItem sx={sxMenuItem} onClick={() => handleNav('/work')}>Work</MenuItem>
//                     </MenuList>
//                 }

//                 <Button
//                     id="basic-button"
//                     aria-controls={openStatus ? 'basic-menu' : undefined}
//                     aria-haspopup="true"
//                     aria-expanded={openStatus ? 'true' : undefined}
//                     onClick={() => openOrCloseMenu()}
//                 >
//                     <MenuIcon sx={sxMenuIcon} />
//                 </Button>