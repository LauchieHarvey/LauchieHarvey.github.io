import React from 'react';
import { Box, Button, AppBar, Toolbar, Typography, IconButton, Tooltip } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Navbar: React.FC = () => {
    return (
        <AppBar position="static">
            <Typography variant="h1" sx={{width: '100%', marginLeft: '25%'}}>Lauchie Harvey</Typography>
            <Typography variant="h2" sx={{marginLeft: '50%'}}>Software Developer</Typography>
            <Toolbar variant="dense" style={{marginBottom: '0px'}}>
                <Box display="flex" flexDirection="row" justifyContent="space-evenly" width="100%">
                    <Box>
                        <Button component={RouterLink} to="/contact">
                            Contact Me
                        </Button>
                    </Box>
                    <Box>
                        <Button component={RouterLink} to="/">
                            Home
                        </Button>
                    </Box>
                    <Box>
                        <Button component={RouterLink} to="/projects">
                            My Projects
                        </Button>
                    </Box>
                    {/* TODO: align the social icons to the right. */}
                    <Box>
                        <Tooltip title="GitHub">
                            <IconButton sx={{color: 'primary.main'}} target="_blank" href="https:/github.com/LauchieHarvey">
                                <GitHubIcon/>
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="LinkedIn">
                            <IconButton sx={{color: 'primary.main'}} target="_blank" href="https://linkedin.com/in/lauchie-harvey">
                                <LinkedInIcon/>
                            </IconButton>
                        </Tooltip>
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;