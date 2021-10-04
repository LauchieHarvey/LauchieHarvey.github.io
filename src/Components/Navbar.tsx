import React from 'react';
import { Box, Button, AppBar, Toolbar } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

const Navbar: React.FC = () => {

    return (
        <AppBar position="static">
            <Toolbar variant="dense">
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
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;