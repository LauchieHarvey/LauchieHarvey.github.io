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
                <Navbar/>
                <Box sx={{backgroundColor: 'background.default', position: 'fixed', height: '100%', width: '100%'}}>
                    <Routes/>
                </Box>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;