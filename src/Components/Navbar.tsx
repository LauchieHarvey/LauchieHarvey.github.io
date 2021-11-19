import React from 'react';
import { Box, Button, AppBar, Toolbar, Typography, Stack } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useLocation } from 'react-router';
import { GitHubIcon, LinkedInIcon } from './Icons';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'; 
import { useTheme, useMediaQuery } from '@mui/material'; 

const Navbar: React.FC = () => {
    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.only('xs'));
    const location = useLocation();
    console.log(location.pathname);
    return (
        <>
        <AppBar position="sticky" sx={{marginBottom: '2%'}}>
            <Toolbar variant="dense" style={{marginBottom: '0px'}}>
                <Box display="flex" flexDirection="row" justifyContent="space-evenly" width="100%" alignItems="center">
                    <Box>
                        <Button component={RouterLink} to="/contact" color={location.pathname === '/contact' ? 'secondary' : 'primary'}>
                            <EmailOutlinedIcon sx={{marginRight: '0.5rem'}}/>
                            {!isXs && 'Contact Me'}
                        </Button>
                    </Box>
                    <Box>
                        <Button component={RouterLink} to="/" color={location.pathname === '/' ? 'secondary' : 'primary'}>
                            <HomeOutlinedIcon sx={{marginRight: '0.5rem'}} />
                            {!isXs && 'Home'}
                        </Button>
                    </Box>
                    <Box>
                        <Button component={RouterLink} to="/projects" color={location.pathname === '/projects' ? 'secondary' : 'primary'}>
                            <AssignmentOutlinedIcon sx={{marginRight: '0.5rem'}}/>
                            {!isXs && 'My Projects'}
                        </Button>
                    </Box>
                </Box>
                <Stack direction={isXs ? "column" : "row"}>
                    <GitHubIcon/>
                    <LinkedInIcon/> 
                </Stack>
            </Toolbar>
        </AppBar>
        </>
    );
}

export default Navbar;