import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles({
    introSection: {
        background: '#000000',
        color: '#ffffff',
        margin: '0px'
    }
})

const Home: React.FC = () => {
    const classes = useStyles();

    return (
        <>
        {/* Intoductory description */}
        <section className={classes.introSection}>
            <h1>Lauchie Harvey</h1>
            <p>Undergraduate Software Developer at <a href="https://appliedmining.tech" target="_blank">AMT</a></p>
            <p>I am studying a Bachelor of Computer Science at the University of Queensland.</p> 
        </section>
        {/* List of skills in relevant categories with icons. */}
        <section>
        </section>
        </>
    );
}

export default Home;