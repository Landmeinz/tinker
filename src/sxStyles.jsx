import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        primary: {
            main: 'hsla(14, 77%, 44%, 1)',
            dark: 'hsla(14, 77%, 32%, 1)',
            light: 'hsla(14, 77%, 56%, 1)',
        },
        secondary: {
            main: 'hsla(16, 100%, 48%, 1)',
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
            mobile: 0,
            tablet: 640,
            laptop: 1024,
            desktop: 1280,
        },
    },
});

export const sxApp = {
    bgcolor: 'info.light',
    m: 0,
    p: 0,

    // width: {
    //     mobile: 'values.mobile',
    //     laptop: 'values.laptop',
    //   },

}

export const sxAppContainer = {
    height: '100vh',
    overflowY: 'scroll',

}

export const sxTopSection = {
    border: '1px solid red',
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',

}

export const   sxLeftColumn = {
    border: '1px solid blue',
    width: '50%',

}
export const sxRightColumn = {
    border: '1px solid green',
    width: '50%',

}


export const sxHeroTextContent = {
    wordWrap: 'break-word',

}

export const sxHeroText = {
    fontWeight: 'bold', // normal, bold, light
    fontSize: '7.4rem',
    textAlign: 'center',

}


export const sxHeroImageContent = {
    
}