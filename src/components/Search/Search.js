import React, { useState, useEffect } from "react";
import SingleMovie from "../Movie/SingleMovie";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import NotFound from "../NotFound";
import Paper from '@material-ui/core/Paper';
import Loader from "../Mods/Loader";
import ModalPop from "../Mods/Modal";
import { commonStyles } from "../Mods/styles";
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles({
    ...commonStyles,
    searchTextField: {
        width: "70%",
    },
    favoritesTextField: {
        width: "40%", 
    },
    searchList: {
        display: "flex",
        width: "100%",
        justifyContent: "center",
        flexFlow: "row wrap",
        margin: "2px 0",
        padding: "20px 0",
        textAlign: "center",
    },
    searchButton: {
        height: "40px", 
        marginLeft: "10px",
        width: "30%",
    },
});

const Search = ({ switchLoader, fetchSearch, fetched, loader }) => {
    const classes = useStyles();
    const mobile = useMediaQuery('(max-width:650px)');
    const [input, setInput] = useState("");
    const [helper, setHelper] = useState("");
    const [error, switchError] = useState(false);
    const [modal, setModal] = useState(false);
    const searchMovies = (e) => {
        (e.target.innerText === "SEARCH" || e.keyCode == 13) && (
            /[a-z]{3,}/i.test(input) ? fetch_start() : setModal(true)
        )
    }
    const fetch_start = () => {
        switchLoader();
        fetchSearch(input);
    }
    const inputChange = (e) => {
        /^.{1,2}$/.test(e.target.value) ? setHelper("Type at least 3 characters") : setHelper("");;
        setInput(e.target.value);
    }
    const closeModal = () => {
        setModal(false);
    }
    useEffect(() => {
        helper ? switchError(true) : switchError(false)
    }, [helper]);
    return (
        <>
            <Paper className={mobile ? classes.formMobile : classes.formStandard}>
                <TextField
                    id="outlined-basic"
                    size="small"
                    label="Search for movies"
                    variant="outlined"
                    className={mobile ? classes.inputMobile : classes.searchTextField}
                    onKeyUp={searchMovies}
                    onChange={inputChange}
                    error={error}
                    helperText={helper}
                />
                <Button
                    variant="outlined"
                    color="primary"
                    className={mobile ? classes.inputMobile : classes.searchButton}
                    onClick={searchMovies}
                >
                    Search
                </Button>
            </Paper>
            {loader ? <Loader /> : (
                <Paper className={classes.paperField}>
                    <div className={classes.searchList}>
                        {fetched === "no-result" && <NotFound info="findSomething" />}
                        {fetched.length === 0 && <NotFound info="fetchError" />}
                        {Array.isArray(fetched) && fetched.map(fetchitem => <SingleMovie key={fetchitem.imdbID} movie={fetchitem} />)}
                    </div>
                </Paper> )}
            {modal && <ModalPop type="info" error="typing error" info="Type at least 3 characters!" close={closeModal}/>}
        </>
    )
}

export default Search;