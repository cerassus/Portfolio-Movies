import React, { useState, useEffect } from "react";
import { Rating as RatingMUI } from '@material-ui/lab';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    ratingContainer: {
        padding: "10px 0",
        display: "flex",
        flexDirection: "column",
    }
});

const Rating = ({ movies, currentMovie, removeMovie, pushMovie }) => {
    const classes = useStyles();
    const [didMount, setDidMount] = useState(false);
    const index = movies.findIndex(item => item.imdbID === currentMovie.imdbID);
    const [movie, setMovie] = useState(index === -1 ? currentMovie : movies[index]);
    const handleCheckbox = (e) => {
        e.target.checked ?
            setMovie({
                ...movie,
                rating: false,
                wannaSee: true,
            }) :
            removeMovie(movie);
    }
    const handleRating = (e) => {
        const stars = Number(e.target.value);
        setMovie({
            ...movie,
            rating: stars,
            wannaSee: false,
        })
    }
    useEffect(() => setDidMount(true), []);
    useEffect(() => {
        didMount && pushMovie(movie)
    }, [movie]);
    return (
        <div className={classes.ratingContainer}>
            <RatingMUI
                name={`${movie.imdbID} - rating`}
                onChange={handleRating}
                value={movie.rating ? movie.rating : 0}
                precision={0.5}
                size="large"
                emptyIcon={<StarBorderIcon fontSize="inherit" />}
            />
            <FormControlLabel
                control={<Checkbox checked={movie.wannaSee ? true : false} onChange={handleCheckbox} id={`${movie.imdbID} - wannasee`} />}
                label="Wanna See this!"
            />
        </div>
    )
}

export default Rating;