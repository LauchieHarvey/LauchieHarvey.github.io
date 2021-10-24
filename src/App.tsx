import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Routes from './Components/Routes';
import { ThemeProvider } from '@mui/material';
import CustomTheme from './Components/Theme';

const App = () => {

    return (
        <BrowserRouter>
            <ThemeProvider theme={CustomTheme}>
                <Navbar/>
                <Routes/>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;