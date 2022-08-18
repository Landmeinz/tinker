
import React, { useState } from 'react';

import ExpandableDiv from '../ExpandableDiv/ExpandableDiv';

import { useLocation } from 'react-router';
import { useNavigate } from 'react-router-dom';

// --- MUI --- // 
import {
    Typography,
    CardMedia,
    Box,
    Button,


} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';

import {
    sxNavContainer,
    // sxNavContent,
    sxMenuIcon,
    sxMenuList,
    sxMenuItem,
    sxTinkerNavText,
    sxBreaksH4,
    sxBreaksH5,


} from '../sxStyles';

function Nav() {

    const navigate = useNavigate();
    const location = useLocation();

    // let anchorEl = false;
    // const [openStatus, setOpenStatus] = useState(false);

    function handleNav(path) {
        navigate(path);
        window.scrollTo(0, 0);
        // setOpenStatus(false); 
    }; // handleNav

    // function openOrCloseMenu() {
    //     setOpenStatus(!openStatus);
    // }; // openOrCloseMenu

    return (

        <Box sx={sxNavContainer}>
            <Box sx={sxTinkerNavText}>
                <Typography sx={sxBreaksH4} variant='h4' onClick={() => handleNav('/about')}>Tinker</Typography>
            </Box>

            <Box sx={sxTinkerNavText}>
                <Typography sx={sxBreaksH5} variant='h5' onClick={() => handleNav('/work')}>Our Work</Typography>
            </Box>
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