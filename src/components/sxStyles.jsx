// responsiveFontSizes
import { createTheme } from '@mui/material/styles';


// ----- App ----- //
// ----- App ----- //
// ----- App ----- //
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

export const sxApp = {
    bgcolor: 'secondary.main',
    height: '100%',
    m: 0,
    p: 0,

}

export const sxAppContainer = {
    height: '100%',
    pb: 25,
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
        fontSize: '1.1rem'
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '1.1rem'
    }
}
// ----- App ----- //
// ----- App ----- //
// ----- App ----- //




// ----- Nav ----- //
// ----- Nav ----- //
// ----- Nav ----- //
export const sxNavContainer = {
    // border: '1px solid red',
    py: 1,
    px: 2,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'sticky',
    top: 0,
    bgcolor: 'info.light',
    boxShadow: 3,
    zIndex: 1000,

}

export const sxTinkerNavText = {
    color: 'secondary.main',
    cursor: 'pointer',
    "&:hover": {
        color: 'primary.light',
        transform: 'scale(1.05)',
    },
}
// ----- Nav ----- //
// ----- Nav ----- //
// ----- Nav ----- //




// ----- Shared On All Pages ----- //
// ----- Shared On All Pages ----- //
// ----- Shared On All Pages ----- //
export const sxHeroTextContent = {
    wordWrap: 'break-word',

}
// ----- Shared On All Pages ----- //
// ----- Shared On All Pages ----- //
// ----- Shared On All Pages ----- //




// ----- About ----- //
// ----- About ----- //
// ----- About ----- //
export const sxAboutSectionOne = {
    // border: '1px solid red',
    display: 'flex',
    flexDirection: 'column',
    // alignItems: 'center',`
    justifyContent: 'center',
    gap: 17,
    mt: 12,

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
        fontSize: '4rem'
    }

}
// ----- About ----- //
// ----- About ----- //
// ----- About ----- //




// ----- CardsAdditionalDetails ----- //
// ----- CardsAdditionalDetails ----- //
// ----- CardsAdditionalDetails ----- //
export const sxAdditionalDetailsTitle = {
    // border: '1px solid red',
    textAlign: 'center',
    mx: 21,
    lineHeight: '1',
    color: 'info.light',
    mb: 2,

    [theme.breakpoints.down('xl')]: {
        mx: 21,
    },
    [theme.breakpoints.down('lg')]: {
        mx: 13,
    },
    [theme.breakpoints.down('md')]: {
        mx: 8,
    },
    [theme.breakpoints.down('sm')]: {
        mx: 5,
    }
}

export const sxDetailsContainer = {
    display: 'flex',
    flexDirection: 'column',
    gap: 1,
    color: 'info.light',
    px: 10,
}
// ----- CardsAdditionalDetails ----- //
// ----- CardsAdditionalDetails ----- //
// ----- CardsAdditionalDetails ----- //




// ----- CardDefineLeft --- //
// ----- CardDefineLeft --- //
// ----- CardDefineLeft --- //
export const sxCardDefineLeftContainer = {
    // border: '1px solid red',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    bgcolor: 'primary.light',
    borderRadius: 6,
    minWidth: '350px',
    mr: '8vw',

    [theme.breakpoints.down('xl')]: {
        flexDirection: 'row',
    },
    [theme.breakpoints.down('lg')]: {
        flexDirection: 'row',
    },
    [theme.breakpoints.down('md')]: {
        flexDirection: 'row',
    },
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        display: 'flex',
        gap: 2,
        m: 0,
        pb: 2,

    }
}
// ----- CardDefineLeft --- //
// ----- CardDefineLeft --- //
// ----- CardDefineLeft --- //




// ----- CardDefineRight --- //
// ----- CardDefineRight --- //
// ----- CardDefineRight --- //
export const sxCardDefineRightContainer = {
    // border: '1px solid red',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    bgcolor: 'primary.light',
    borderRadius: 6,
    ml: '8vw',

    [theme.breakpoints.down('xl')]: {
        flexDirection: 'row',
    },
    [theme.breakpoints.down('lg')]: {
        flexDirection: 'row',
    },
    [theme.breakpoints.down('md')]: {
        flexDirection: 'row',
    },
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        display: 'flex',
        gap: 2,
        m: 0,
        pt: 2,

    }
}
// ----- CardDefineRight --- //
// ----- CardDefineRight --- //
// ----- CardDefineRight --- //




// ----- CardDefine SHARED --- //
// ----- CardDefine SHARED --- //
// ----- CardDefine SHARED --- //
export const sxTinkerDefined = {
    // border: '1px solid green',
    px: 5,
    py: 3,
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

export const sxBoxColor = {
    // border: '1px solid purple',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
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
// ----- CardDefine SHARED --- //
// ----- CardDefine SHARED --- //
// ----- CardDefine SHARED --- //




// ----- CardProject --- //
// ----- CardProject --- //
// ----- CardProject --- //
export const sxProjectImageContent = {
    display: 'flex',
    flexDirection: 'column',
}

export const sxCardProject = {
    width: '20rem',
    height: '20rem',
    mb: 1,
    borderRadius: 2,

}

export const sxImageCaption = {
    color: 'info.light',
}
// ----- CardProject --- //
// ----- CardProject --- //
// ----- CardProject --- //




// ----- Contact --- //
// ----- Contact --- //
// ----- Contact --- //
export const sxContactSectionOne = {
    display: 'flex',
    flexDirection: 'column',
    // alignItems: 'center',`
    justifyContent: 'center',
    alignItems: 'center',
    gap: 17,
    mt: 12,

}

export const sxContactText = {
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
        fontSize: '3rem'
    }
}

export const sxInputText = {
    // border: '1px solid red',
    bgcolor: 'info.light',
    color: 'secondary.main',
    borderRadius: 3,
    width: '100%',

}

export const sxInputContainer = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 3,
    minWidth: '60vw',

    [theme.breakpoints.down('xl')]: {
        minWidth: '70vw',
    },
    [theme.breakpoints.down('lg')]: {
        minWidth: '75vw',
    },
    [theme.breakpoints.down('md')]: {
        minWidth: '80vw',
    },
    [theme.breakpoints.down('sm')]: {
        minWidth: '90vw',
    }
}

export const sxPostButton = {
    bgcolor: 'secondary.main',
    color: 'primary.main',
    width: '40vw',
    height: '8vh',
    border: 1,
    borderColor: 'info.light',
    fontWeight: 'bold',
    transition: '.25s',

    "&:hover": {
        bgcolor: 'primary.light',
        color: 'secondary.main',
        transform: 'scale(1.05)',
        transition: '.25s',
    },

    [theme.breakpoints.down('xl')]: {
        fontSize: '1.618rem',
        width: '60vw',
    },
    [theme.breakpoints.down('lg')]: {
        fontSize: '1.25rem',
        width: '60vw',
    },
    [theme.breakpoints.down('md')]: {
        fontSize: '1rem',
        width: '75vw',
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '1rem',
        width: '80vw',
    }
}

export const sxMessageBoardContainer = {
    // border: '1px solid red',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

}

export const sxMessageBoardHeader = {
    // border: '1px solid green',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    py: 1.618,


}
// ----- Contact --- //
// ----- Contact --- //
// ----- Contact --- //




// ----- ContactButton --- //
// ----- ContactButton --- //
// ----- ContactButton --- //
export const sxContactButtonContainer = {
    display: 'flex',
    justifyContent: 'center',
}

export const sxContactButton = {
    bgcolor: 'secondary.main',
    color: 'primary.main',
    width: '40vw',
    height: '8vh',
    border: 1,
    borderColor: 'info.light',
    fontWeight: 'bold',
    transition: '.25s',

    "&:hover": {
        bgcolor: 'primary.light',
        color: 'secondary.main',
        transform: 'scale(1.05)',
        transition: '.25s',
    },

    [theme.breakpoints.down('xl')]: {
        fontSize: '1.618rem',
        width: '60vw',
    },
    [theme.breakpoints.down('lg')]: {
        fontSize: '1.25rem',
        width: '60vw',
    },
    [theme.breakpoints.down('md')]: {
        fontSize: '1rem',
        width: '75vw',
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '1rem',
        width: '80vw',
    }

}
// ----- ContactButton --- //
// ----- ContactButton --- //
// ----- ContactButton --- //




// ----- Footer ----- //
// ----- Footer ----- //
// ----- Footer ----- //
export const sxFooterContainer = {
    // border: '1px solid red',
    position: 'fixed',
    bottom: 0,
    height: '1.25rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    bgcolor: 'info.light',
    color: 'secondary.main',

}
// ----- Footer ----- //
// ----- Footer ----- //
// ----- Footer ----- //




// ----- MessageBoard ----- //
// ----- MessageBoard ----- //
// ----- MessageBoard ----- //
export const sxMessageBoardContent = {
    // border: '1px solid blue',
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
    bgcolor: 'primary.light',
    p: 2,
    borderRadius: 4,
    width: '75vw',
}

export const sxMessageBoardText = {
    bgcolor: 'info.light',
    color: 'secondary.main',
    borderRadius: 3,
    p: '1rem',
}

export const sxMsgBoardCardHeader = {
    // border: '1px solid green',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '3vw',
}

export const sxMsgBoardCardBody = {
    display: 'flex',
    lineHeight: 4,
}

export const sxMsgBoardCardBodyText = {
    lineHeight: 1.1,

    [theme.breakpoints.down('xl')]: {
        fontSize: '1.25rem'
    },
    [theme.breakpoints.down('lg')]: {
        fontSize: '1.25rem'
    },
    [theme.breakpoints.down('md')]: {
        fontSize: '1rem'
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '.9rem'
    }
}
// ----- MessageBoard ----- //
// ----- MessageBoard ----- //
// ----- MessageBoard ----- //




// ----- ProjectDescription ----- //
// ----- ProjectDescription ----- //
// ----- ProjectDescription ----- //
export const sxProjectDescriptionTitle = {
    // border: '1px solid red',
    display: 'flex',
    justifyContent: 'center',
    px: 8,
    py: 1.5,
    color: 'info.light',

    [theme.breakpoints.down('xl')]: {
        px: 8,
    },
    [theme.breakpoints.down('lg')]: {
        px: 8,
    },
    [theme.breakpoints.down('md')]: {
        px: 5,
    },
    [theme.breakpoints.down('sm')]: {
        px: 3,
    }
}

export const sxProjectDescriptionContent = {
    // border: '1px solid red',
    display: 'flex',
    flexDirection: 'column',
    gap: 1,
    color: 'info.light',
    px: 8,

    [theme.breakpoints.down('xl')]: {
        px: 8,
    },
    [theme.breakpoints.down('lg')]: {
        px: 8,
    },
    [theme.breakpoints.down('md')]: {
        px: 5,
    },
    [theme.breakpoints.down('sm')]: {
        px: 3,
    }
}
// ----- ProjectDescription ----- //
// ----- ProjectDescription ----- //
// ----- ProjectDescription ----- //




// ----- Work ----- //
// ----- Work ----- //
// ----- Work ----- //
export const sxWorkSectionOne = {
    // border: '1px solid red',
    display: 'flex',
    flexDirection: 'column',
    // alignItems: 'center',
    justifyContent: 'center',
    gap: 17,
    mt: 12,
    mx: 'auto',

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
        fontSize: '4rem'
    }
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
// ----- Work ----- //
// ----- Work ----- //
// ----- Work ----- //

