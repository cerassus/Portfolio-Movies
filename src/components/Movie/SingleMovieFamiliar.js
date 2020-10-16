import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles({
    container: {
        margin: "0 15px 50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "120px",
        height: "170px",
        boxShadow: "3px 3px 15px 0px rgba(0,0,0,0.75)",
        transition: "transform .2s",
        border: "3px solid #3f51b5",
        '&:hover': {
            transform: "scale(1.1)",
        }
    },
    img: {
        width: "100px",
        height: "150px",
        objectFit: "cover",
        boxShadow: "1px 1px 2px 0px rgba(0,0,0,0.75)",
    },    
});

const SingleMovieFamiliar = ({movie, titleToShow}) => {
    const classes = useStyles();
    return (
        <Card className={classes.container} 
            onMouseEnter={() => titleToShow(movie.Title)}
            onMouseLeave={() => titleToShow("Similiar Movies:")} >
            <Link to={`/movie/${movie.imdbID}`}>
                <img className={classes.img} src={movie.Poster === "N/A" ? "../images/no-image.jpg" : movie.Poster} />
            </Link>
        </Card>
    )
}

export default SingleMovieFamiliar;