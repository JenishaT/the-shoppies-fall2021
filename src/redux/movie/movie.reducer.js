import MOVIE_ACTION_TYPES from "./movie.action.types";
const INITIAL_STATE = {
    movies: null,
    nominations: []
};

const movieReducer = (prevState = INITIAL_STATE, action) => {
    switch (action.type) {
        case MOVIE_ACTION_TYPES.MOVIE_SEARCH_SUCCESS:
            return {
                ...prevState,
                movies: action.payload
            };
        case MOVIE_ACTION_TYPES.RETRIEVE_MOVIE_PLOT_SHORT:
            let index = prevState.movies ? prevState.movies.findIndex(movie => movie.imdbID === action.payload.imdbID) : -1;
            if (index !== -1) prevState.movies[index].Plot = action.payload.Plot;
            return {
                ...prevState
            };
        case MOVIE_ACTION_TYPES.RETRIEVE_MOVIE_GENRES: {
            let index = prevState.movies ? prevState.movies.findIndex(movie => movie.imdbID === action.payload.imdbID) : -1;
            if (index !== -1) prevState.movies[index].Genre = action.payload.Genre.split(", ");
            return {
                ...prevState
            }
        }
        case MOVIE_ACTION_TYPES.ADD_NOMINATION_SUCCESS:
            return {
                ...prevState,
                nominations: action.payload
            }
        case MOVIE_ACTION_TYPES.REMOVE_NOMINATION_SUCCESS:
            return {
                ...prevState,
                nominations: action.payload
            }
        case MOVIE_ACTION_TYPES.RESET_SUCCESS: {
            return {
                movies: null,
                nominations: []
            }
        }
        case MOVIE_ACTION_TYPES.CLEAR_SEARCH_SUCCESS: {
            return {
                ...prevState,
                movies: null,
            }
        }
        default:
            return prevState;
    }
};

export default movieReducer;