import { connect } from "react-redux";
import Movie from "../components/Movie/Movie";

const mapState = state => ({
    fetched: state.fetched,
})

export default connect(mapState)(Movie);