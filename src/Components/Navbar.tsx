import React from 'react';
import { Box, Button, AppBar, Toolbar, Typography, Stack } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { GitHubIcon, LinkedInIcon } from './Icons';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'; 

const Navbar: React.FC = () => {
    return (
        <>
        <AppBar position="sticky" sx={{marginBottom: '2%'}}>
            <Toolbar variant="dense" style={{marginBottom: '0px'}}>
                <Box display="flex" flexDirection="row" justifyContent="space-evenly" width="100%" alignItems="center">
                    <Box>
                        <Button component={RouterLink} to="/contact">
                            <EmailOutlinedIcon sx={{marginRight: '0.5rem'}}/>
                            Contact Me
                        </Button>
                    </Box>
                    <Box>
                        <Button component={RouterLink} to="/">
                            <HomeOutlinedIcon sx={{marginRight: '0.5rem'}}/>
                            Home
                        </Button>
                    </Box>
                    <Box>
                        <Button component={RouterLink} to="/projects">
                            <AssignmentOutlinedIcon sx={{marginRight: '0.5rem'}}/>
                            My Projects
                        </Button>
                    </Box>
                </Box>
                <Stack direction="row">
                    <GitHubIcon/>
                    <LinkedInIcon/> 
                </Stack>
            </Toolbar>
        </AppBar>
        </>
    );
}

export default Navbar;