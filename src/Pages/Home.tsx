import React from 'react';
import { Typography, Box, Paper, Link, List, ListItem, ListItemIcon, ListItemText, Stack } from '@mui/material';
import CheckBoxTwoToneIcon from '@mui/icons-material/CheckBoxTwoTone';
import MetaTags from '../Components/MetaTags';
import { useHasScrolled } from '../Components/useHasScrolled';


const Home: React.FC = () => {
    const {hasScrolled} = useHasScrolled();

    return (
        <>
        <MetaTags 
            title="Lauchie Harvey | Cyber Security" 
            description="Lauchie Harvey is a cyber security professional. Lauchie is currently employed at AMT.
             This portfolio website showcases his software projects and capabilities."/>
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
            }}>Software Engineer</Typography>
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
            <Typography variant="body1" style={{fontSize: "1.5rem", color: "#fff", filter: 'brightness(95%)', marginTop: '5%', marginBottom: '15%'}}>
                Passionate about leveraging technology to develop innovative solutions that drive user engagement and satisfaction.
            </Typography>
            {/* Intoductory self-description */}
            <Paper elevation={4} sx={{padding: '1%', maxWidth: '60%', marginBottom: '5%'}}>
                <Typography variant="h4">Context</Typography>
                <Typography variant="body1">
                    I have developed a lot of technical & communication skills, however I am most proud of my ability to learn new
                    skills quickly.
                </Typography>
                <Typography variant="body1" marginBottom="2rem">
                    This website aims to showcase my unique combination of education and experience that helps me keep people safe online.
                </Typography> 
                <Typography variant="h4">Formal Education</Typography>
                <Typography variant="body1">Bachelor of Computer Science majoring in Cyber Security from the University of Queensland.</Typography> 
                <Typography variant="body1" marginBottom="2rem">CompTIA Security+ Certification.</Typography> 
                <Typography variant="h4">Experience</Typography>
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
            <Paper elevation={1} sx={{padding: '1%', maxWidth: '60%'}}>
                <Typography variant="h4">Primary Skills</Typography>
                <List>
                    {primarySkills.map((skill: string, index: number) => (
                        <ListItem key={index}>
                            <ListItemIcon><CheckBoxTwoToneIcon sx={{color: 'primary.light', filter: 'saturate(0.8)'}}/></ListItemIcon>
                            <ListItemText>{skill}</ListItemText>
                        </ListItem>
                    ))}
                </List>
                <Typography variant="h4">Other Skills</Typography>
                <List>
                    {secondarySkills.map((skill: string, index: number) => (
                        <ListItem key={index}>
                            <ListItemIcon><CheckBoxTwoToneIcon sx={{color: 'primary.light', filter: 'saturate(0.3)'}}/></ListItemIcon>
                            <ListItemText>{skill}</ListItemText>
                        </ListItem>
                    ))}
                </List>
            </Paper>
        </Stack>
        </>
    );
}
const primarySkills = [
    'Risk Managment: Compliance with regulation, risk registers & communicating risk.',
    'Incident Response: Planning and leading response efforts.',
    'Communication & Stakeholder engagement.',
    'Penetration Testing: Reverse engineering, web exploits, buffer overflow',
    'Website Development: Over a three years of work experience with React frontend development.',
    'Access Control: Implemented Role Based Access Control and am comfortable with other methods.',
    'Software Quality Assurance: Three personal projects with over 80% code coverage. Test driven development.',
    'OpenSSL: Created and maintained an x509 Certificate Authority.',
    'UNIX & Shell: I\'m equally comfortable with UNIX as I am with Windows.',
];

const secondarySkills = [
    'Python: Cryptography (x509 & ssh certs), Matplotlib, File I/O, pygame and more.',
    'Data Structures and Algorithms: Formal study and some competitive programming.',
    'User Experience Driven Design.',
    'C programming: Concurrency, signal handling, kernel modules, interprocess communication.',
    'Version Control: Daily use of Git. Experience with SVN.',
    'Typescript: Typescript is a wonderful companion when writing React code.',
    'SQL: Database creation, modification, indexing and searching. PostgreSQL & Oracle.',
    'Web Bundlers: Experience with Webpack, Snowpack and Create React App in a workplace environment.',
];

export default Home;