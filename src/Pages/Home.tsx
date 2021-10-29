import React from 'react';
import { Typography, Paper, Link, List, ListItem } from '@mui/material';

const Home: React.FC = () => {

    return (
        <>
        {/* Intoductory self-description */}
        <Paper>
            <Typography variant="body1">
                Undergraduate Software Developer at <Link href="https://appliedmining.tech" target="_blank">AMT</Link>
            </Typography>
            <Typography variant="body1">I am studying a Bachelor of Computer Science at the University of Queensland.</Typography> 
        </Paper>
        {/* List of skills in relevant categories with icons. */}
        <Paper>
            <List>
                <ListItem>Skill 1</ListItem>
                <ListItem>Skill 2</ListItem>
            </List>
        </Paper>
        </>
    );
}

export default Home;