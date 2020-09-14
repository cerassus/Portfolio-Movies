import React from "react";
import { Typography } from "@material-ui/core";
import Paper from '@material-ui/core/Paper';
import { commonStyles } from "./Mods/styles";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    ...commonStyles,
});

const NotFound = ({ info }) => {
    const classes = useStyles();
    return (
        <>
            {info === "404" && (
                <Paper className={classes.paperField}>
                    <Typography variant="h4">There is nothing to show (404)</Typography>
                </Paper>
            )}
            {info === "fetchError" && <Typography variant="h4">Nothing was found </Typography>}
            {info === "findSomething" && <Typography variant="h4">Search for new movies!</Typography>}
            {info === "arrayEmpty" && <Typography variant="h4">No movies in selected category</Typography>}
        </>
    )
}

export default NotFound;