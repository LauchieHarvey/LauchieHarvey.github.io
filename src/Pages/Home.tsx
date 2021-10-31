import React from 'react';
import { Typography, Paper, Link, List, ListItem, ListItemIcon, ListItemText, Stack } from '@mui/material';
import CheckBoxTwoToneIcon from '@mui/icons-material/CheckBoxTwoTone';

const Home: React.FC = () => {

    const skillDescriptions = [
        'Version Control: Daily use of Git. Experience with SVN.',
        'Data Structures and Algorithms: Competitive programming and formal study.',
        'C programming: Concurrency, signal handling, kernel modules, interprocess communication.',
        'ReactJS Development: Over a year of work experience with React frontend development.',
        'Typescript: Typescript is a wonderful companion when writing React code.',
        'Web Bundlers: Experience with Webpack, Snowpack and Create React App in a workplace environment.',
        'UNIX & Shell: I run Linux mint as my daily OS. I\'m most comfortable in a UNIX environment.',
        'SQL: Database creation, modification, indexing and searching. PostgreSQL & Oracle.',
        'Cyber Security: Studied cyber security courses in university.',
        'Web Design: Doesn\'t this website look fabulous?',
        'Unit Testing: Three personal projects with over 80% code coverage. Test driven development.',
        'Python: Matplotlib, File I/O, pygame and more.',
    ];

    return (
        <Stack direction="column" justifyContent="space-evenly" alignItems="center">
            {/* Intoductory self-description */}
            <Paper elevation={4} sx={{padding: '1%', maxWidth: '60%', marginBottom: '5%'}}>
                <Typography variant="body1">
                    Undergraduate Software Developer at <Link href="https://appliedmining.tech" target="_blank">Applied Mining Technologies</Link>.
                </Typography>
                <Typography variant="body1" marginBottom="2rem">Studying a Bachelor of Computer Science at the University of Queensland.</Typography> 
                <Typography variant="body1">
                    This website aims to showcase some of my projects and the skills I have developed building them.
                </Typography> 
                <Typography variant="body1">
                    While I have developed a lot of technical skills, I have also cultivated the ability to learn new
                    skills quickly.
                </Typography>
            </Paper>
            {/* List of skills in relevant categories with icons. */}
            <Paper elevation={1}>
                <List>
                    {skillDescriptions.map((skill: string, index: number) => (
                        <ListItem key={index}>
                            <ListItemIcon><CheckBoxTwoToneIcon sx={{color: 'primary.light', filter: 'saturate(0.8)'}}/></ListItemIcon>
                            <ListItemText>{skill}</ListItemText>
                        </ListItem>
                    ))}
                </List>
            </Paper>
        </Stack>
    );
}

export default Home;