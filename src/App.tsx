import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Routes from './Components/Routes';
import { ThemeProvider, Box } from '@mui/material';
import CustomTheme from './Components/Theme';

const App = () => {

    return (
        <BrowserRouter>
            <ThemeProvider theme={CustomTheme}>
                <Box sx={{backgroundColor: 'background.default', minHeight: '100vh', width: '100%', paddingBottom: '5%'}}>
                    <Navbar/>
                    <Routes/>
                </Box>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;