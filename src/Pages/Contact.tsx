import React from 'react';
import { Typography, Grid, Paper, Stack, IconButton, Tooltip } from '@mui/material';
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';
import {LinkedInIcon, GitHubIcon} from '../Components/Icons';
import MetaTags from '../Components/MetaTags';

const Contact: React.FC = () => {
    const myEmail = "lauchieharvey@gmail.com";

    const copyEmailToClipboard = () => {
        navigator.clipboard.writeText(myEmail);
    }

    return (
        <>
        <MetaTags 
            title="Lauchie Harvey | Contact" 
            description={`Contact Lauchie Harvey. You can reach him by email, on GitHub or on LinkedIn. Email is preferred, send it to ${myEmail}. Lauchie responds within 24 hours.`}/>
        <Typography variant="h1">Contact Lauchie Harvey</Typography>
        <Paper sx={{maxWidth: {xs: '90%', sm: '80%', md: '60%', lg: '40%'}, margin: 'auto', padding: '1%'}}>
            <Grid container alignItems="center">
                <Grid item xs={12} sm={6} md={5}>
                    <Stack direction="column">
                        <Stack direction="row" alignItems="center">
                            <Tooltip title="Copy Email">
                                <IconButton sx={{color: 'primary.main'}} onClick={copyEmailToClipboard}><ContentCopyRoundedIcon/></IconButton>
                            </Tooltip>
                            <Typography variant="body1">{myEmail}</Typography>
                        </Stack>
                        <Stack direction="row" alignItems="center">
                            <LinkedInIcon/>
                            <Typography variant="body1">LinkedIn</Typography>
                        </Stack>
                        <Stack direction="row" alignItems="center">
                            <GitHubIcon/>
                            <Typography variant="body1">GitHub</Typography>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid item xs={12} sm={6} md={7}>

                    <Typography align="center" variant="body1">
                        Feel free to send me an email, I usually respond within 24 hours.
                    </Typography>
                    <Typography align="center" variant="body1">
                        I am happy to talk all things software development :)
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
        </>
    );
}

export default Contact;