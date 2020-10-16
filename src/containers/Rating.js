import { connect } from "react-redux";
import Rating from "../components/Rating/Rating";
import { removeMovie, pushMovie } from "../redux/actions";

const mapStateToProps = state => ({
    movies: state.movies,
})

const mapDispatchToProps = dispatch => ({
    removeMovie: (obj) => dispatch(removeMovie(obj)),
    pushMovie: (obj) => dispatch(pushMovie(obj)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Rating);
