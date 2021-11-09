import React from 'react';
import {Tooltip, IconButton} from '@mui/material';
import GitHubMaterialIcon from '@mui/icons-material/GitHub';
import LinkedInMaterialIcon from '@mui/icons-material/LinkedIn';

export const LinkedInIcon = () => {
    return (
        <Tooltip title="LinkedIn">
            <IconButton sx={{color: 'primary.main', filter: 'saturate(2)'}} target="_blank" href="https://linkedin.com/in/lauchie-harvey">
                <LinkedInMaterialIcon/>
            </IconButton>
        </Tooltip>
    )
}

export const GitHubIcon = () => {
    return (
        <Tooltip title="GitHub">
            <IconButton sx={{color: 'primary.main', filter: 'saturate(2)'}} target="_blank" href="https://github.com/LauchieHarvey">
                <GitHubMaterialIcon/>
            </IconButton>
        </Tooltip>
    )
}

