import { createTheme, responsiveFontSizes } from '@mui/material';

const CustomTheme = responsiveFontSizes(createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#22c9dc', // Blue.
        },
        secondary: {
            main: '#EE85F3', // Pinkish
        },
        tonalOffset: 0.4,
    },
    typography: {
        fontFamily: '"Times New Roman", "sans-serif", Arial',
        h1: {
            color: '#fff',
            filter: 'brightness(95%)',
            textAlign: 'center'
        },
        button: {
            textTransform: 'none',
            fontSize: '1.3rem',
        },
    },
}));

export default CustomTheme;