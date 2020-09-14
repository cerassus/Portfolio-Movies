const REMOVE_MOVIE = "REMOVE_MOVIE";
const PUSH_MOVIE = "PUSH_MOVIE";
const RESPONSE = "RESPONSE";
const SWITCH_LOADER = "SWITCH_LOADER";

const removeMovie = (movie) => ({
    type: REMOVE_MOVIE,
    movie
})

const pushMovie = (movie) => ({
    type: PUSH_MOVIE,
    movie,
})

const returnResponse = (response) => ({
    type: RESPONSE,
    response
})

const switchLoader = () => ({
    type: SWITCH_LOADER
})

function fetchSearch(input) {
    return async function (dispatch) {
        try {
            const response = await fetch(`http://www.omdbapi.com/?s=${input}&apikey=2c51327`);
            const jason = await response.json();
            setTimeout(function() {
                Array.isArray(jason.Search) ? dispatch(returnResponse(jason.Search)) : dispatch(returnResponse([]));
                dispatch(switchLoader())}, 1000)
        }
        catch(error) {
            console.error(error);
        }
    }
}

export { removeMovie, REMOVE_MOVIE, PUSH_MOVIE, pushMovie,
        returnResponse, RESPONSE, fetchSearch, 
        switchLoader, SWITCH_LOADER,  };