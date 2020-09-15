import React from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    modalContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalPaper: {
        backgroundColor: "#ebeeff",
        border: '3px solid #3f51b5',
        minWidth: "350px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px",
    },
    infoContainer: {
        margin: "40px 15px",
        textAlign: "center",
    },
    modalButton: {
        borderBottom: "3px solid #3f51b5",
        textAlign: "center",
        color: "#3f51b5",
        padding: "15px",
        "&:hover": {
            backgroundColor: "#3f51b5",
            color: "white",
            cursor: "pointer",
        }
    },
    modalOkButton: {
        width: "100%",
    },
    modalChooseButton: {
        width: "70%",
        marginBottom: "15px",
    },
    modalH5: {
        textTransform: "uppercase",
        color: "#3f51b5",
        marginBottom: "15px",
    },
});

const buttons_text = {
    changeToRating: {
        yes: "Rate this movie!",
        no: "Oops, not yet!",
    },
    changeToWannaSee: {
        yes: "Delete my rating!",
        no: "Leave it!",        
    },
};

const ModalPop = ({ info, close, error, type, confirmWannaSee, confirmRating }) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const handleClose = () => {
        close();
        setOpen(false);
    };
    const handleConfirmChangeRating = () => {
        confirmRating(true);
        handleClose();
    }
    const handleConfirmChangeWannaSee = () => {
        confirmWannaSee(true);
        handleClose();
    }
    const handleEnter = (e) => {
        (e.keyCode == 13 && open) && handleClose();
    }
    return (
        <Modal
            className={classes.modalContainer}
            open={open}
            onClose={handleClose}
            onKeyUp={handleEnter}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={open}>
                <div className={classes.modalPaper}>
                    <Typography variant="h5" className={classes.modalH5}>
                        {error}
                    </Typography>
                    <div className={classes.infoContainer}>
                        {info.split("+").map((x,i) => <p key={i}>{x}</p>)}
                    </div>
                    {type === "info" ? (
                        <Paper onClick={handleClose} className={`${classes.modalButton} ${classes.modalOkButton}`}>
                            <Typography variant="h5">OK!</Typography>
                        </Paper>
                    ) : (
                        <>
                            <Paper 
                                onClick={type === "changeToRating" ? handleConfirmChangeRating : handleConfirmChangeWannaSee} 
                                className={`${classes.modalButton} ${classes.modalChooseButton}`}>
                                <Typography variant="h5">
                                    {type === "changeToRating" ? buttons_text.changeToRating.yes : buttons_text.changeToWannaSee.yes}
                                </Typography>
                            </Paper>
                            <Paper 
                                onClick={handleClose} 
                                className={`${classes.modalButton} ${classes.modalChooseButton}`}>
                                <Typography variant="h5">
                                    {type === "changeToRating" ? buttons_text.changeToRating.no : buttons_text.changeToWannaSee.no}
                                </Typography>
                            </Paper>
                        </>
                    )}
                </div>
            </Fade>
        </Modal>
    );
}

export default ModalPop;