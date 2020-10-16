import { combineReducers } from "redux";
import { REMOVE_MOVIE, RESPONSE, PUSH_MOVIE, SWITCH_LOADER } from "./actions";

const movies = (state = [], action) => {
  switch (action.type) {
    case REMOVE_MOVIE: return ([
      ...state.filter(movie => {
        if (movie.imdbID !== action.movie.imdbID) return movie;
      })
    ])
    case PUSH_MOVIE: return state.some(item => item.imdbID === action.movie.imdbID) ?
      ([
        ...state.map(item => item.imdbID === action.movie.imdbID ? 
          {...action.movie} : 
          item)
      ]) :
      ([
        ...state,
        action.movie,
      ])
    default: return state;
  }
}

const fetched = (state = "no-result", action) => action.type === RESPONSE ? ([...action.response]) : state;

const loader = (state = false, action) => action.type === SWITCH_LOADER ? !state : state;

export default combineReducers({
  movies, fetched, loader
})