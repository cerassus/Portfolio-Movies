import React, { useState } from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import IconButton from '@material-ui/core/IconButton';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import HelpPopUp from "../components/Mods/Help";

const useStyles = makeStyles({
    tab: {
        minWidth: "30%",
        fontWeight: "600",
    },
    menuVisible: {
        height: "48px",
    },
    menuVisibleMobile: {
        height: "144px",
    },
    menuHidden: {
        height: "0px",
    },
    root: {
        minHeight: "0px",
    },
    indicatorBig: {
        width: "8px",
    },
    toolbar: {
        justifyContent:"space-between",
    },
    menuButton: {
        display:"flex",
        alignItems: "center",
    },
    helpButton: {
        "&:hover": {
            transform: "scale(1.6)",
            cursor: "pointer",
        }
    },
});

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

const Navi = () => {
    const classes = useStyles();
    const mobile = useMediaQuery('(max-width:700px)');
    const [value, setValue] = useState(0);
    const [menu, setMenu] = useState(true);
    const [modal, setModal] = useState(false);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleMenuClick = () => {
        setMenu(!menu)
    }
    return (
        <>
            <AppBar position="static" color="primary">
                <Toolbar className={classes.toolbar}>
                    <div className={classes.menuButton}> 
                        <IconButton
                            edge="start"
                            style={{ marginRight: "10px" }}
                            color="inherit"
                            aria-label="menu"
                            onClick={handleMenuClick}>
                            <MenuIcon />
                        </IconButton>
                        <Typography type="h2">Favourite Movie Database</Typography>
                    </div>
                    <HelpOutlineIcon className={classes.helpButton} onClick={() => setModal(true)}/>
                </Toolbar>
            </AppBar>
            <Tabs
                classes={{
                    flexContainer: menu ? (
                        mobile ? classes.menuVisibleMobile : classes.menuVisible
                    ) : classes.menuHidden,
                    root: classes.root,
                    indicator: mobile && classes.indicatorBig,
                }}
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
                    />)}
            </Tabs>
            {modal && <HelpPopUp close={() => setModal(false)}/>}
        </>
    )
}

export default Navi;