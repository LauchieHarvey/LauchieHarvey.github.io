import React from 'react';
import {Paper, Typography} from '@mui/material';

interface ContainerProps {
    label?: string,
}

const FormContainer: React.FC<ContainerProps> = ({label, children}: React.PropsWithChildren<ContainerProps>) => {

    return (
        <Paper>
            {label && <Typography variant="h2">{label}</Typography>}
            {children}
        </Paper>
    );
}

export default FormContainer;