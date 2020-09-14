import { connect } from "react-redux";
import Search from "../components/Search/Search";
import { fetchSearch, switchLoader } from "../redux/actions";

const mapState = state => ({
    fetched: state.fetched,
    movies: state.movies,
    loader: state.loader,
    mobile: state.mobile,
})

const mapDispatch = dispatch => ({
    fetchSearch: (input) => dispatch(fetchSearch(input)),
    switchLoader: () => dispatch(switchLoader()),
})

export default connect(mapState, mapDispatch)(Search);