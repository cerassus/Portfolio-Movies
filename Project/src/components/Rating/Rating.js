import React, { useState, useEffect } from "react";
import { Rating as RatingMUI } from '@material-ui/lab';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { makeStyles } from '@material-ui/core/styles';
import ModalPop from "../Mods/Modal";

const useStyles = makeStyles({
    ratingContainer: {
        padding: "10px 0",
        display: "flex",
        flexDirection: "column",
    }
});

const modals_info = {
    changeToWannaSee: "It seems that this movie is rated by You. +Are You sure you want to delete this rating and add movie to Wanna See list?!",
    changeToRating: "It seems that this movie is on your Wanna See list. +Are You sure you want to delete it from this list and give it a Rating?!",    
}

const Rating = ({ movies, currentMovie, removeMovie, pushMovie }) => {
    const classes = useStyles();
    const index = movies.findIndex(item => item.imdbID === currentMovie.imdbID);
    const [movie, setMovie] = useState(index === -1 ? currentMovie : movies[index]);
    const [componentDidMount, setComponentDidMount] = useState(false);
    const [showModal, setModal] = useState(false);
    const [stars, setStars] = useState(null);
    const [changeToWannaSee, setChangeToWannaSee] = useState(false);
    const [changeToRating, setChangeToRating] = useState(false);

    const handleWannaSee = (e) => {
        if(e.target.checked) {
            movie.rating ? setModal(true) : setChangeToWannaSee(true)
         } else {
             removeMovie(movie);
             setMovie({
                 ...movie,
                 wannaSee: false,
             })
         } 
    }
    const handleRating = (e) => {
        setStars(Number(e.target.value));
        movie.wannaSee ? setModal(true) : setChangeToRating(true);
    }

    useEffect(() => {
        setComponentDidMount(true)
    }, []);
    useEffect(() => {
        componentDidMount && (movie.rating || movie.wannaSee) && pushMovie(movie)
    }, [movie]);
    useEffect(() => {
        setChangeToRating(false);
        setChangeToWannaSee(false);
    }, [showModal]);
    useEffect(() => {
        changeToWannaSee && setMovie({
            ...movie,
            rating: false,
            wannaSee: true,
        })
    }, [changeToWannaSee]);
    useEffect(() => {
        changeToRating && setMovie({
            ...movie,
            rating: stars,
            wannaSee: false,
        })
    }, [changeToRating]);

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
                control={<Checkbox 
                    checked={movie.wannaSee ? true : false} 
                    onChange={handleWannaSee} 
                    id={`${movie.imdbID} - wannasee`} />}
                label="Wanna See this!"
            />
            {showModal && <ModalPop 
                type={movie.wannaSee ? "changeToRating" : "changeToWannaSee"}
                error="Are You sure?"
                info={movie.wannaSee ? modals_info.changeToRating : modals_info.changeToWannaSee} 
                close={() => setModal(false)} 
                confirmWannaSee={(value) => setChangeToWannaSee(value)}
                confirmRating={(value) => setChangeToRating(value)}
            />}
        </div>
    )
}

export default Rating;