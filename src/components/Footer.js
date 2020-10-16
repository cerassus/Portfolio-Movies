import React from "react";
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    footer: {
        backgroundColor: "#3f51b5",
        padding: "20px",
        textAlign: "center",
        color: "white",
    },
});

const Footer = () => {
    const classes = useStyles();
    return (
        <Paper className={classes.footer}>
            <Typography variant="overline" >
                Michał Wiśniewski Portfolio Project 2020
        </Typography>
        </Paper>
    )
}

export default Footer;
