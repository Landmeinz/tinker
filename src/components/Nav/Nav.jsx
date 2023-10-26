import React from 'react';

import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// --- MUI --- //
import { Typography, Box } from '@mui/material';

// --- Sx Styles --- //
import {
  sxNavContainer,
  sxTinkerNavText,
  sxTinkerSubText,

  sxBreaksH4,
  sxBreaksH5,
  sxBreaksH6,
  sxNavH6,

} from '../sxStyles';

function Nav() {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const hubLogin = user.id != null ? '/hub' : '/login'

  const handleNav = async (path) => {
    navigate(path);
    window.scrollTo(0,0);
  }

  return (
    <Box id='sxNavContainer' sx={sxNavContainer}>
      <Box id='sxTinkerNavTextAbout' sx={sxTinkerNavText}>

        <Typography
          sx={sxBreaksH4}
          variant='h4'
          onClick={async () => handleNav('/about')}
        >
          Tinker
        </Typography>
      </Box>

      <Box id='sxTinkerNavTextWork' sx={sxTinkerSubText}>
          <Typography
            sx={sxNavH6}
            variant='h6'
            onClick={async () => handleNav(hubLogin)}
          >
            Hub
          </Typography>

        <Typography
          sx={sxNavH6}
          variant='h6'
          onClick={async () => handleNav('/crafts')}
        >
          Crafts
        </Typography>

        {/* <Typography
          sx={sxNavH6}
          variant='h6'
          onClick={() => handleNav('/products')}
        >
          Products
        </Typography> */}

        <Typography
          sx={sxNavH6}
          variant='h6'
          onClick={async () => handleNav('/contact')}
        >
          Contact
        </Typography>
      </Box>
    </Box>
  );
}
export default Nav;
