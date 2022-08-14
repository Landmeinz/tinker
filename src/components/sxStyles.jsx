// responsiveFontSizes
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        primary: {
            main: 'hsla(14, 77%, 44%, 1)',
            dark: 'hsla(14, 77%, 32%, 1)',
            light: 'hsla(14, 77%, 56%, 1)',
        },
        secondary: {
            main: 'hsla(220, 20%, 20%, 1)',
            dark: 'hsla(312, 14%, 36%, 1)',
            light: 'hsla(180, 78%, 48%, 1)',
        },
        error: {
            main: 'hsla(350, 90%, 40%, 1)',
        },
        info: {
            main: 'hsla(330, 10%, 12%, 1)',
            dark: 'hsla(330, 10%, 4%, 1)',
            light: 'hsla(330, 10%, 82%, 1)',
        }
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 640,
            md: 960,
            lg: 1280,
            xl: 1920
        },
    },
});

// export const theme = responsiveFontSizes(themeStyle);

export const sxApp = {
    bgcolor: 'secondary.main',
    height: '100%',
    m: 0,
    p: 0,

    // width: {
    //     mobile: 'values.mobile',
    //     laptop: 'values.laptop',
    //   },

}

export const sxAppContainer = {
    height: '100%',
    // overflowY: 'scroll',
    pb: 25,
}

export const sxNavContainer = {
    // border: '1px solid red',
    p: 2,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'sticky',
    top: 0,
    bgcolor: 'info.light',
    boxShadow: 3,

}

export const sxTinkerNavText = {
    color: 'secondary.main',
    cursor: 'pointer',
    "&:hover": {
        color: 'primary.light',
        transform: 'scale(1.05)',
    },
}

// export const sxNavContent = {
// border: '1px solid red',
// display: 'flex',

// }

export const sxMenuIcon = {
    // border: '1px solid blue',
    cursor: 'pointer',
}

export const sxMenuList = {
    // border: '1px solid blue',
    display: 'flex',
    m: 0,
    p: 0,
    gap: 2,
}

export const sxMenuItem = {
    // border: '1px solid green',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    m: 0,
    p: 0,
}

export const sxAboutSectionOne = {
    // border: '1px solid red',
    // width: '100%',
    // height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    // alignItems: 'center',`
    justifyContent: 'center',
    gap: 17,
    mt: 12,

}

export const sxWorkSectionOne = {
    // border: '1px solid red',
    // width: '100%',
    // height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    // alignItems: 'center',`
    justifyContent: 'center',
    gap: 17,
    mt: 12,

}

export const sxProjectContainer = {
    // border: '1px solid blue',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 2,

}

export const sxCardProjectGallery = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 3,
    
}

export const sxProjectImageContent = {
    display: 'flex',
    flexDirection: 'column',
}

export const sxImageCaption = {
    color: 'info.light',
}

export const sxCardProject = {
    width: '20rem',
    height: '20rem',
    mb: 1,
    borderRadius: 2,

}


export const sxLeftColumn = {
    // border: '1px solid blue',
    width: '50%',

}
export const sxRightColumn = {
    // border: '1px solid green',
    width: '50%',

}


export const sxHeroTextContent = {
    wordWrap: 'break-word',

}
export const sxHeroText = {
    color: 'primary.light',
    fontWeight: 'bold', // normal, bold, light
    textAlign: 'center',

    [theme.breakpoints.down('xl')]: {
        fontSize: '7.4rem'
    },
    [theme.breakpoints.down('lg')]: {
        fontSize: '6rem'
    },
    [theme.breakpoints.down('md')]: {
        fontSize: '4rem'
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '2.5rem'
    }

}

export const sxWorkHeroText = {
    color: 'primary.light',
    fontWeight: 'bold', // normal, bold, light
    textAlign: 'center',

    [theme.breakpoints.down('xl')]: {
        fontSize: '7.4rem'
    },
    [theme.breakpoints.down('lg')]: {
        fontSize: '6rem'
    },
    [theme.breakpoints.down('md')]: {
        fontSize: '4rem'
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '2.5rem'
    }
}

export const sxBreaksH4 = {
    [theme.breakpoints.down('xl')]: {
        fontSize: '2rem'
    },
    [theme.breakpoints.down('lg')]: {
        fontSize: '2rem'
    },
    [theme.breakpoints.down('md')]: {
        fontSize: '1.5rem'
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '1.25rem'
    }
}

export const sxBreaksH5 = {
    [theme.breakpoints.down('xl')]: {
        fontSize: '1.5rem'
    },
    [theme.breakpoints.down('lg')]: {
        fontSize: '1.5rem'
    },
    [theme.breakpoints.down('md')]: {
        fontSize: '1rem'
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '1rem'
    }
}

export const sxCardDefineContainer = {
    // border: '1px solid red',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // height: '100%',
    // width: '100%',
    bgcolor: 'primary.light',
    borderRadius: 6,

}

export const sxBoxColor = {
    // border: '1px solid purple',
    // bgcolor: 'info.light',

    display: 'flex',
    justifyContent: 'center',
    flex: 1,
    // height: '100%',

}

export const sxCircleFrame = {
    borderRadius: '50%',
    height: '18rem',
    width: '18rem',
    objectFit: 'cover',

}

export const sxCenterCircle = {
    display: 'flex',
    alignItems: 'center',

}

export const sxTinkerDefined = {
    // border: '1px solid green',
    p: 5,
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
    width: '60%',
    height: 'inherit',
    bgcolor: 'info.light',
    

}

export const sxCardDefineBody = {
    display: 'flex',
    flexDirection: 'column',
    gap: 2,

    [theme.breakpoints.down('xl')]: {
        fontSize: '7.4rem'
    },
    [theme.breakpoints.down('lg')]: {
        fontSize: '6rem'
    },
    [theme.breakpoints.down('md')]: {
        fontSize: '4rem'
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '2.5rem'
    }

}




export const sxHeroImageContent = {
    // border: '1px solid red',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,

}
export const sxHeroImage = {
    // border: '1px solid red',
    height: '12rem',
    width: '12rem',
    borderRadius: '50%',

}

export const sxSectionTwo = {
    // border: '1px solid blue',
    mt: '10rem',
    display: 'flex',
    justifyContent: 'center',

}

export const sxSectionTwoContent = {
    // border: '1px solid blue',
    textAlign: 'center',
    mx: 25,
    display: 'flex',
    flexDirection: 'column',
    gap: 5,
}


export const sxSectionThree = {
    mt: '10rem',
    display: 'flex',
    justifyContent: 'center',

}

export const sxSectionThreeContent = {
    // border: '1px solid red',
    textAlign: 'center',
    mx: 25,
    display: 'flex',
    flexDirection: 'column',
    gap: 5,

}


export const sxSectionFour = {
    mt: '10rem',
    display: 'flex',
    justifyContent: 'center',

}

export const sxSectionFourContent = {
    textAlign: 'center',
    mx: 25,
    display: 'flex',
    flexDirection: 'column',
    gap: 5,

}



export const newClass = {

}

// ***** ExpandableDiv ***** //
// ***** ExpandableDiv ***** //
// ***** ExpandableDiv ***** //
// ***** ExpandableDiv ***** //
// ***** ExpandableDiv ***** //
export const sxExpandContainer = {
    border: '1px solid blue',
    m: 0,
    p: 0,
}

export const sxAccordion = {
    bgcolor: 'primary.main',
}

export const sxAccordionCenterText = {
    // border: '1px solid red',
    textAlign: 'center',
    mx: 12,
    lineHeight: '1',
    color: 'info.light',
    mb: 2,
}

export const sxWorkContainer = {
    height: '100%',
    minHeight: '100vh',
}

export const sxDetailsContainer = {
    display: 'flex',
    flexDirection: 'column',
    gap: 1,
    color: 'info.light',
    px: 10,
}
