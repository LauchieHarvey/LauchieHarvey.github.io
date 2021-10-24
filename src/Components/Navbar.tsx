import React from 'react';
import { Box, Button, AppBar, Toolbar } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Navbar: React.FC = () => {

    return (
        <AppBar position="static" style={{marginBottom: '0px'}}>
            <Toolbar variant="dense" style={{marginBottom: '0px'}}>
                <Box display="flex" flexDirection="row" justifyContent="space-evenly" width="100%">
                    <Box>
                        <Button component={RouterLink} to="/" color="secondary">
                            Home
                        </Button>
                    </Box>
                    <Box>
                        <Button component={RouterLink} to="/contact" color="secondary">
                            Contact Me
                        </Button>
                    </Box>
                    <Box>
                        <Button component={RouterLink} to="/projects" color="secondary">
                            My Projects
                        </Button>
                    </Box>
                    {/* TODO: Add social links here */}
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;