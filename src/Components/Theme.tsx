import { createTheme, responsiveFontSizes } from '@mui/material';

const CustomTheme = responsiveFontSizes(createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#87B8F0',//'#13011f',
        },
        secondary: {
            main: '#EE85F3',//'#ff7676',
        },
        tonalOffset: 0.4,
    },
    typography: {
        fontFamily: '"Times New Roman", "sans-serif", Arial',
        button: {
            textTransform: 'none'
        },
    },
    components: {
        MuiLink: {
            defaultProps: {
                color: 'secondary.light'
            }
        },
    } 
}));

export default CustomTheme;