import React from 'react';
import { Typography, Paper, Stack, IconButton, Tooltip } from '@mui/material';
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';
import {LinkedInIcon, GitHubIcon} from '../Components/Icons';

const Contact: React.FC = () => {
    const myEmail = "lauchieharvey@gmail.com";

    const copyEmailToClipboard = () => {
        navigator.clipboard.writeText(myEmail);
    }

    return (
        <Paper sx={{maxWidth: '50%', margin: 'auto', padding: '1%'}}>
            <Typography variant="h3" sx={{color: 'primary.main', filter: 'saturate(0.6)'}}>Contact Me</Typography>
            <Typography align="center" variant="body1">
                Feel free to send me an email, I usually respond within 24 hours.
            </Typography>
            <Typography align="center" variant="body1">
                I am happy to talk all things software development :)
            </Typography>
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
        </Paper>
    );
}

export default Contact;