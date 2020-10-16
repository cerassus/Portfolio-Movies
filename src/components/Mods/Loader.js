import React from "react";
import CircularProgress from '@material-ui/core/CircularProgress';
import Paper from '@material-ui/core/Paper';
import { commonStyles } from "../Mods/styles";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    ...commonStyles,
});

const Loader = () => {
    const classes = useStyles();
    return (
        <Paper className={classes.paperField}>
            <CircularProgress />
        </Paper>
    )
}

export default Loader;