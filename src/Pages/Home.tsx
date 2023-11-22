import React from 'react';
import { Typography, Box, Paper, Link, List, ListItem, ListItemIcon, ListItemText, Stack } from '@mui/material';
import CheckBoxTwoToneIcon from '@mui/icons-material/CheckBoxTwoTone';
import MetaTags from '../Components/MetaTags';
import { useHasScrolled } from '../Components/useHasScrolled';

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

const Home: React.FC = () => {
    const {hasScrolled} = useHasScrolled();

    return (
        <>
        <MetaTags 
            title="Lauchie Harvey | Software Developer" 
            description="Lauchie Harvey is a software developer. Lauchie is currently employed at AMT.
             This portfolio website showcases his software projects and developer capabilities."/>
        <Box sx={{marginTop: '30vh', marginBottom: '50vh'}}>
            <Typography variant="h1" sx={{
                color: '#fff', 
                filter: 'brightness(95%)',
                marginLeft: {xs: '0%', sm: '0%', md: '15%', lg: '25%'},
                textAlign: {xs: 'center', sm: 'center', md: 'left'}
            }}>Lauchie Harvey</Typography>
            <Typography variant="h2" sx={{
                color: '#fff',
                filter: 'brightness(75%)',
                marginLeft: {xs: '0%', sm: '5%', md: '45%', lg: '55%'},
                textAlign: {xs: 'center', sm: 'center', md: 'left'}
            }}>Cyber Security</Typography>
            <Typography variant="body1" sx={{
                visibility: hasScrolled ? 'hidden' : 'visible',
                position: 'absolute',
                margin: 'auto',
                textAlign: 'center',
                color: '#fff',
                filter: 'brightness(55%)',
                left: '0',
                right: '0',
                bottom: '2%',
                width: '100%'
                }}>Scroll down to read more...</Typography>
        </Box>
        <Stack direction="column" justifyContent="space-evenly" alignItems="center">
            <Typography variant="body1" style={{fontSize: "1.5rem", color: "#fff", filter: 'brightness(95%)', marginTop: '10%', marginBottom: '10%'}}>
                I am unwavering in my commitment to protecting people from cyber threats.
            </Typography>
            {/* Intoductory self-description */}
            <Paper elevation={4} sx={{padding: '1%', maxWidth: '60%', marginBottom: '5%'}}>
                <Typography variant="body1">
                    While I have developed a lot of technical & communication skills, I am most proud of my ability to learn new
                    skills quickly.
                </Typography>
                <Typography variant="body1" marginBottom="2rem">
                    This website aims to showcase some of my projects and the skills I have developed while building them.
                </Typography> 
                <Typography variant="h5">Formal Education</Typography>
                <Typography variant="body1">Bachelor of Computer Science majoring in Cyber Security from the University of Queensland.</Typography> 
                <Typography variant="body1" marginBottom="2rem">CompTIA Security+ Certification.</Typography> 
                <Typography variant="h5">Experience</Typography>
                <Typography variant="body1">
                    <Link href="https://appliedmining.tech" target="_blank">Applied Mining Technologies</Link> is a small company which has allowed me to take on many responsibilities.
                </Typography>
                <Typography variant="body1">
                    I am currently holding three main roles at the organisation:
                </Typography>
                <ul>
                    <li><Typography>Risk Manager</Typography></li>
                    <li><Typography>Cyber Security Manager</Typography></li>
                    <li><Typography>Software Engineer</Typography></li>
                </ul>
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
        </>
    );
}

export default Home;