import React from "react";
import { Link } from "react-router-dom";
import Rating from "../../containers/Rating";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    flex: {
        display: "flex",
        alignItems: "center",
    },
    container: {
        margin: "15px",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "260px",
        height: "550px",
        boxShadow: "3px 3px 15px 0px rgba(0,0,0,0.75)",
        transition: "transform .2s",
        border: "3px solid #3f51b5",
        '&:hover': {
            transform: "scale(1.1)",
        }
    },
    img: {
        maxWidth: "220px",
        height: "330px",
        objectFit: "cover",
        boxShadow: "1px 1px 2px 2px rgba(0,0,0,0.75)",
    },    
    title: {
        border: "3px solid #3f51b5",
        backgroundColor: "#3f51b5",
        color: "white",
        width: "100%",
        minHeight: "60px",
        justifyContent: "center",
        borderRadius: "0px",
        fontSize: "12px",
        padding: "0 5px",
        textAlign: "center"
    },
});

const SingleMovie = ({movie}) => {
    const classes = useStyles();
    return (
        <Card className={`${classes.flex} ${classes.container}`}>
            <Paper className={`${classes.flex} ${classes.title}`}>
                <Typography variant="overline">{movie.Title}</Typography>
            </Paper>
                <p>{movie.Year}</p>
                <Link to={`/movie/${movie.imdbID}`}>
                    <img
                        className={classes.img}
                        src={movie.Poster == "N/A" ? "../images/no-image.jpg" : movie.Poster}
                    />
                </Link>
                <Rating key={`${movie.imdbID} - rating`} currentMovie={movie} />
        </Card>
    )
}

export default SingleMovie;