import React from 'react';
import Grid from '@material-ui/core/Grid';
import footerStyles from '../assets/jss/footerStyle';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(footerStyles);
const Footer = () => {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Grid container justify="center" alignItems="center">
                <Grid item>
                    Contact: rchaidez.dev@gmail.com
                </Grid>
            </Grid>
        </footer>
    )
}

export default Footer;