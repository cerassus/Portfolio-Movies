import React, { Fragment, useEffect, useState } from "react";
import Rating from "../../containers/Rating";
import SingleMovieFamiliar from "./SingleMovieFamiliar";
import Loader from "../Mods/Loader";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles({
    movieDetailTitle: {
        borderBottom: "3px solid #3f51b5", 
        padding: "20px", 
        textAlign: "center", 
        marginTop: "5px", 
        color: "#3f51b5",
    },
    movieDetailContainer: {
        margin: "1px auto", 
        display: "flex", 
        alignItems: "flex-start", 
        padding: "30px 20px",
        flexWrap: "wrap",
    },
    movieDetailImgContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "20px",
    },
    movieDetailImg: {
        objectFit: "cover",
        height: "450px",
        boxShadow: "#3f51b5 3px 3px 10px",
        marginBottom: "10px",
    },
    movieDetailDescription: {
        display: "flex",
        flexDirection: "column", 
        padding: "20px", 
        fontSize: "16px", 
        width: "400px",
        alignItems: "flex-start", 
        justifyContent: "flex-start",
    },
    movieDetailDescriptionStory: {
        padding: "0 20px",
        minWidth: "100%",
    },
    movieDetailSimilarContainer: {
        display: "flex", 
        height: "240px", 
        flexWrap: "wrap", 
        justifyContent: "space-between", 
        alignItems: "center", 
        padding: "25px", 
        overflow: "hidden",
    },
});

const Movie = ({ fetched, match }) => {
    const classes = useStyles();
    const mobile = useMediaQuery('(max-width:700px)');
    const [title, setTitle] = useState("Similiar Movies:");
    const [movie, setMovie] = useState("");
    const [loader, setLoader] = useState(true);

    const [x, showX] = React.useState(false);
    const [deleteMovie, setDelete] = React.useState(false);
    
    const titleToShow = (title) => {
        setTitle(title)
    }
    useEffect(() => {
        async function fetchDataForNewMovie() {
            try {
                setLoader(true);
                const apiShot = await fetch(`https://www.omdbapi.com/?i=${match.params.movieID}&plot=full&apikey=2c51327`);
                const jason = await apiShot.json();
                setMovie(jason);
                setLoader(false);
                console.log(jason);
            }
            catch (error) {
                console.error(error);
            }
        }
        fetchDataForNewMovie();
    }, [match.params.movieID]);

    return loader ? <Loader /> : (
        <Fragment>
            <Paper className={classes.movieDetailTitle}>
                <Typography variant="h5" >{movie.Title}</Typography>
            </Paper>
            <Paper className={classes.movieDetailContainer}>
                <div className={classes.movieDetailImgContainer}>
                    <img 
                        className={classes.movieDetailImg} 
                        src={movie.Poster === "N/A" ? "https://movies.cerassus.eu/images/no-image.jpg" : movie.Poster} 
                    />
                </div>
                <div className={classes.movieDetailDescription}>
                    <p><span>Year: </span> {movie.Released}</p>
                    <p><span>Country: </span> {movie.Country}</p>
                    <p><span>Runtime: </span>  {movie.Runtime}</p>
                    <p><span>Genre: </span> {movie.Genre}</p>
                    <p><span>Director:</span>  {movie.Director}</p>
                    <p><span>Actors:</span></p>
                    {movie.Actors && movie.Actors.split(",").map((x, i) => <p key={i}>{x}</p>)}
                    <p><span>IMDB users rating:</span>  {movie.imdbRating} based on {movie.imdbVotes} votes.</p>
                    <p><span>Your Rating:</span></p>
                    <Rating 
                        key={`${movie.imdbID} - rating`} 
                        currentMovie={movie} showX={(e) => showX(e)} deleteMovie={deleteMovie}
                    />
                </div>
                <div className={classes.movieDetailDescriptionStory}> 
                    <p><span>Story:</span></p>  
                    <p>{movie.Plot}</p>
                </div>
            </Paper>
            <Paper className={classes.movieDetailTitle}>
                <Typography variant="h5" >{title}</Typography>
            </Paper>
            <Paper className={classes.movieDetailSimilarContainer}>
                {fetched && fetched.map((item, i) => {
                    if (item.imdbID !== movie.imdbID) return (
                        <SingleMovieFamiliar key={i + 1000} movie={item} titleToShow={titleToShow} />
                    )
                }
                )}
            </Paper>
        </Fragment>
    )
}

export default Movie;