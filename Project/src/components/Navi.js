import React, { useState } from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles({
    tab: {
        minWidth: "30%",
        fontWeight: "600",
    },
});

const Navi = () => {
    const classes = useStyles();
    // const mediaQuery = window.matchMedia("only screen and and (max-device-width: 700px)");
    const mobile = useMediaQuery('(max-width:700px)');
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const tabs = [
        {
            label: "Search database for movies",
            url: "/"
        },
        {
            label: "Favourites movies",
            url: "/favorites/all/az/watched",
        }, 
        {
            label: "Movies You wanna see",
            url: "/favorites/all/az/wannasee",
        },
    ];
    // mediaQuery.addListener((w) => w.matches ? switchMobile(true) : switchMobile(false));
    return (
        <>
            <AppBar position="static" color="primary">
                <Toolbar >
                    <Typography type="h2">Favourite Movie Database</Typography>
                </Toolbar>
            </AppBar>
            <Paper>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    orientation={mobile ? 'vertical' : 'horizontal'}
                    centered={true}
                    variant={mobile ? 'fullWidth' : 'standard'}
                >
                {tabs.map((tab, i) => 
                    <Tab 
                        key={i + 800} 
                        label={tab.label} 
                        component={Link} 
                        to={tab.url} 
                        className={classes.tab}
                    /> )}
                </Tabs>
            </Paper>
        </>
    )
}
export default Navi;