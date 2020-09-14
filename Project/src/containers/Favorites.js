import { connect } from "react-redux";
import Favorites from "../components/Favorites/Favorites";
import {     
    allTypeSelector, movieTypeSelector, seriesTypeSelector, episodeTypeSelector,
    wannasee, watched, sortByRatingAsc, sortByRatingDes, sortByYearAsc, sortByYearDes,
    sortByNameAZ, sortByNameZA
} from "../redux/selectors";
import { compose } from "redux";

const mapState = (state, ownProps) => {
    const { type, sort, favorite } = ownProps.match.params;
    const searchParam = ownProps.location.search.replace("?search=","");
    const selector = (search) => {
        let suspect = [];
        let helper = 0;
        (search.indexOf("+") >= 0) ? suspect = search.split("+") : suspect = search;
        if (Array.isArray(suspect)) { 
            return (
                state.movies.filter(item => {
                    helper = 0;
                    for(let i=0; i<suspect.length; i++) {
                        let regex = new RegExp(`\\w*${suspect[i]}\\w*`,`i`,`g`);
                        if(regex.test(item.Title) === true) {
                            helper++;
                        }
                    }
                    return helper>0 ? item : null; 
                })
            )
        } else {
            return (
                state.movies.filter(item => {
                    let regex = new RegExp(`\\w*${suspect}\\w*`,`i`,`g`);
                    return regex.test(item.Title) && item;
                })
            )
        }
    }
    const result = compose(
        favorite === "wannasee" ? wannasee : watched,
        sort === "az" && sortByNameAZ ||
        sort === "za" && sortByNameZA ||
        sort === "year-asc" && sortByYearAsc ||
        sort === "year-des" && sortByYearDes ||
        sort === "rating-asc" && sortByRatingAsc ||
        sort === "rating-des" && sortByRatingDes, 
        type === "all" && allTypeSelector ||
        type === "movie" && movieTypeSelector ||
        type === "series" && seriesTypeSelector ||
        type === "episode" && episodeTypeSelector  
    );     
    return ({
        movies: searchParam.length >= 3 ? result(selector(searchParam)) : result(state.movies),
        mobile: state.mobile,
    })
}

export default connect(mapState)(Favorites);