import React from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles({
    modalContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalPaper: {
        backgroundColor: "#ebeeff",
        border: '3px solid #3f51b5',
        minWidth: "300px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px",
        maxWidth: "800px",
        height: "90vh",
    },
    modalButton: {
        borderBottom: "3px solid #3f51b5",
        textAlign: "center",
        backgroundColor: "#FFFFFF",
        padding: "15px",
        width: "100%",
        "&:hover": {
            backgroundColor: "#3f51b5",
            color: "white",
            cursor: "pointer",
        }
    },
    helpContainer: {
        margin: "15px 0",
        overflow: "scroll",
        overflowX: "hidden",
        lineHeight: "2.5",
        textAlign: "justify",
    },

});

const HelpPopUp = ({ close }) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const handleClose = () => {
        close();
        setOpen(false);
    };
    const mobile = useMediaQuery('(max-width:700px)');
    return (
        <Modal
            className={classes.modalContainer}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={open}>
                <div className={mobile ? `${classes.modalPaper} ` : classes.modalPaper}>
                    <h1>Movies</h1>
                    <div className={classes.helpContainer}>
                        <h3>Movie Database App</h3>
                        <p>
                            This is an app that allows You to search for movies in database and rate them or save on 'wanna see' list.
                            You can switch between the lists and search on top menu. You can always click on every movie to see its
                            detailed information. This app has been prepared for my Junior Portfolio.
                        </p>
                        <h3>Capabilities</h3>
                        <p>Click on the tabs on top menu and switch between movie lists and search menu.</p>
                        <h3>Search for movies</h3>
                        <p>
                            Type desired movie title and press ENTER or click Search button.
                            App will show You the list of movies based on your query.
                            You can rate these movies by clicking on stars or add them to your 'wanna see' list.
                            If You wish to change your choice You can click desired change.
                            App will ask You to confirm the change or refuse it.
                            </p>
                        <h3>Favorites List and Wanna See List</h3>
                        <p>
                            If You rated or added to list, at least one movie, it will appear on one of that lists.
                            Remember that You can change movie rating anytime You want.
                            You can also delete movie from both of lists by clicking the 'X' button, which is near the movie title.
                            If u deselect 'wanna see' button the movie will be automatically deleted from both of lists.
                            You can filter your movies by clicking 'Filter' dropdown menu i choose bewtween 'Movie', 'Series', 'Episode' and 'All'.
                            App also allows you to sort your favs by clicking 'Sort' drodown menu and choose between alphabetical order,
                            year and rating.
                            </p>
                        <h3>Movie details</h3>
                        <p>
                            Click on specific Movie to see its details. You can also add to 'wanna see' list and rate movies, but
                            You can't delete movie from here. Below the details You will find posters of similar movies.
                            </p>
                        <h3>Author</h3>
                        <p>Copyright 2020 Cerassus - Michał Wiśniewski</p>
                        <a href="https://github.com/cerassus/Portfolio-Movies" target="_blank" rel="noopener noreferrer">View source code on Github</a>
                    </div>
                    <div onClick={handleClose} className={classes.modalButton}>Close</div>
                </div>
            </Fade>
        </Modal>
    );
}

export default HelpPopUp;