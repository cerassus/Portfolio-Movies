import React from "react";
import { Link } from "react-router-dom";
import Rating from "../../containers/Rating";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles({
    flex: {
        display: "flex",
    },
    container: {
        margin: "15px",
        flexDirection: "column",
        alignItems: "center",
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
    nohover: {
        '&:hover': {
            transform: "scale(1)!important",
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
        alignItems: "center",
    },
    closeButton: {
        display: "flex",
        alignItems: "center",
        padding: "0 5px",
        height: "100%",
        cursor: "pointer",
        fontSize: "20px",
    },
    closeIconHidden: {
        width: "0px",
    },
    titleText: {
        width: "100%", 
        padding: "8px 8px",
        lineHeight: "1.4",
    },
    closeIcon: {
        width: "30px",
        height: "auto",
    },
});

const SingleMovie = ({movie}) => {
    const classes = useStyles();
    const mobile = useMediaQuery('(max-width:900px)');
    const [x, showX] = React.useState(false);
    const [deleteMovie, setDelete] = React.useState(false);
    return (
        <Card className={mobile ? `${classes.flex} ${classes.container} ${classes.nohover}` : `${classes.flex} ${classes.container}`}>
            <Paper className={`${classes.flex} ${classes.title}`}>
                <Typography variant="overline" className={classes.titleText}>{movie.Title}</Typography>
                <div className={classes.closeButton}>
                    <img className={x ? classes.closeIcon : classes.closeIconHidden} src="https://movies.cerassus.eu/images/close-icon.png" onClick={() => setDelete(!deleteMovie)}/>
                </div>
            </Paper>
                <p>{movie.Year}</p>
                <Link to={`/movie/${movie.imdbID}`}>
                    <img
                        className={classes.img}
                        src={movie.Poster == "N/A" ? "https://movies.cerassus.eu/images/no-image.jpg" : movie.Poster}
                    />
                </Link>
                <Rating key={`${movie.imdbID} - rating`} currentMovie={movie} showX={(e) => showX(e)} deleteMovie={deleteMovie}/>
        </Card>
    )
}

export default SingleMovie;