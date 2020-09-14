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
        backgroundColor: "white",
        border: '3px solid #3f51b5',
        minWidth: "350px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        height: "300px",
        padding: "20px",
    },
    modalButton: {
        borderBottom: "3px solid #3f51b5", 
        textAlign: "center", 
        color: "#3f51b5", 
        width: "100%",
        padding: "15px",
        "&:hover": {
            backgroundColor: "#3f51b5",
            color: "white",
            cursor: "pointer",
        }
    },
    modalH5: {
        textTransform: "uppercase",
        color: "#3f51b5", 
    },
});

const ModalPop = (props) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const handleClose = () => {
        setOpen(false);
        props.close();
    };
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
                    <Typography variant="h5" className={classes.modalH5}>typing error</Typography>
                    <p>{props.info}</p>
                    <Paper onClick={handleClose} className={classes.modalButton}>
                        <Typography variant="h5">OK</Typography>
                    </Paper>
                </div>
            </Fade>
        </Modal>
    );
}

export default ModalPop;