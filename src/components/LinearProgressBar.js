import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
});

const LinearProgressBar = ({label, value}) => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Box display="flex" alignItems="center">
                <Box width="100%" mr={1}>
                    <Typography variant="caption">{label}</Typography>
                    <LinearProgress variant="determinate" value={value} />
                </Box>
                <Box minWidth={35}>
                    <Typography variant="body2" color="textSecondary">{`${Math.round(value,)}%`}</Typography>
                </Box>
            </Box>
        </Box>
    );
}

export default LinearProgressBar;