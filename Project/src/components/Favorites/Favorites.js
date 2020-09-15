import React, { Fragment, useEffect, useState } from "react";
import TextField from '@material-ui/core/TextField';
import SingleMovie from "../Movie/SingleMovie";
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import NotFound from "../NotFound";
import Paper from '@material-ui/core/Paper';
import ModalPop from "../Mods/Modal";
import { commonStyles } from "../Mods/styles";
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles({
    ...commonStyles,
    formStandard: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        width: "100%",
        padding: "30px 20px 10px",
        margin: "1px auto",
        height: "100px",
    },
    favoritesFormControl: {
        marginTop: "-7px", 
        marginLeft: "40px", 
        width: "15%", 
    },
    favoritesSearchButton: {
        height: "40px", 
        marginLeft: "10px", 
        width: "15%",
    },
    favoritesSearchList: {
        display: "flex",
        width: "100%",
        justifyContent: "center",
        flexFlow: "row wrap",
        margin: "2px 0",
        padding: "20px 0",
        textAlign: "center",
    },
    formMobile: {
        padding: "20px 20px 10px",
        flexWrap: "wrap",
    },
    favoritesTextField: {
        width: "40%", 
    },
    inputMobile: {
        width: "100%",
        height: "40px", 
        marginBottom: "15px",
    },
    paperField: {
        width: "100%", 
        minHeight: "60vh", 
        margin: "1px auto", 
        display: "flex", 
        alignItems: "center",
        justifyContent: "center",
    },
});

const Favorites = ({ history, match, location, movies }) => {
    const classes = useStyles();
    const mobile = useMediaQuery('(max-width:700px)');
    const [input, setInput] = useState("");
    const [error, switchError] = useState(false);
    const [helper, setHelper] = useState("");
    const [sort, setSort] = useState("az");
    const [type, setType] = useState("all");
    const [modal, switchModal] = useState(false);
    const [searchStart, startSearching] = useState(0);
    const search = input ? `?search=${input.trim().replace(/\s{1,}/g, "+")}` : "";    // `?search=${input}`
    const url = `/favorites/${type}/${sort}/${match.params.favorite}${search}`
    const handleSort = (e) => {
        setSort(e.target.value);
    }
    const handleType = (e) => {
        setType(e.target.value)
    }
    const searchMovies = (e) => {
        (e.target.innerText === "SEARCH" || e.keyCode == 13) && (
            (input.length < 3 && input.length) ? switchModal(true) : startSearching(searchStart + 1)
        )
    }
    const handleInputChange = (e) => {
        /^.{1,2}$/.test(e.target.value) ? setHelper("Type at least 3 characters") : setHelper("");
        setInput(e.target.value);
    }
    const closeModal = () => {
        switchModal(false);
    }

    useEffect(() => history.push(url),[sort, type, searchStart]);
    useEffect(() => {
        helper ? switchError(true) : switchError(false)
    }, [helper]);
    return (
        <Fragment>
            <Paper className={mobile ? classes.formMobile : classes.formStandard}>
                <TextField 
                    id="outlined-basic" 
                    size="small" 
                    label="Search in your Favourites"
                    variant="outlined" 
                    className={mobile ? classes.inputMobile : classes.favoritesTextField}
                    onChange={handleInputChange}
                    onKeyUp={searchMovies}
                    error={error}
                    helperText={helper} />
                <Button 
                    variant="outlined" 
                    color="primary"
                    className={mobile ? classes.inputMobile : classes.favoritesSearchButton} 
                    onClick={searchMovies}>
                    Search
                </Button>
                <FormControl className={mobile ? classes.inputMobile : classes.favoritesFormControl} >
                    <InputLabel htmlFor="uncontrolled-native">Filter:</InputLabel>
                    <NativeSelect defaultValue="all" onChange={handleType} >
                        <option value="all">All</option>
                        <option value="movie" >Movie</option>
                        <option value="series" >Series</option>
                        <option value="episode" >Episode</option>
                    </NativeSelect>
                </FormControl>
                <FormControl className={mobile ? classes.inputMobile : classes.favoritesFormControl} >
                    <InputLabel htmlFor="uncontrolled-native">Sort by:</InputLabel>
                    <NativeSelect defaultValue="az" onChange={handleSort}>
                        <option value="az" >{`Title A -> Z`}</option>
                        <option value="za" >{`Title Z -> A`}</option>
                        <option value="year-asc" >Year ascending</option>
                        <option value="year-des" >Year descending</option>
                        {match.params.favorite === "watched" && (
                            <>
                                <option value="rating-asc" >Rating ascending</option>
                                <option value="rating-des" >Rating descending</option>
                            </>
                        )}
                    </NativeSelect>
                </FormControl>
            </Paper>
            <Paper className={classes.paperField} >
                <div className={classes.favoritesSearchList}>
                    {movies.length > 0 ?
                        movies.map((item, i) => <SingleMovie key={item.imdbID} movie={item} />) :
                        location.search.length > 8 ? <NotFound info="fetchError" /> : <NotFound info="arrayEmpty" />}
                </div>
            </Paper>
            {modal && <ModalPop type="info" error="typing error" info="Type at least 3 characters!" close={closeModal} confirm=""/>}
        </Fragment>
    )
}

export default Favorites;