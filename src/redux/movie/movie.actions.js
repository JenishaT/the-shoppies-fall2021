import MOVIE_ACTION_TYPES from "./movie.action.types";
import axios from "axios";

export const searchMovies = (query, page) => async (dispatch) => {
    const path = "https://www.omdbapi.com/?apikey=2ae73c8e&type=movie&s=" + query + "&page=" + page;
    const { data } = await axios.get(path);

    // Filtering search results due to API bug returning duplicates
    const result = data.Search ?  data.Search.filter((value, index, self) => {
        return self.findIndex(v => v.imdbID === value.imdbID) === index;
      }) : [];
    const {totalResults} = data;
    dispatch({ type: MOVIE_ACTION_TYPES.MOVIE_SEARCH_SUCCESS, payload: {result, totalResults, page}});
}

export const getShortPlot = (id) => async (dispatch) => {
    const path = "https://www.omdbapi.com/?apikey=2ae73c8e&plot=short&i=" + id;
    const { data } = await axios.get(path);
    dispatch({ type: MOVIE_ACTION_TYPES.RETRIEVE_MOVIE_PLOT_SHORT, payload: data });
}

export const getGenres = (id) => async (dispatch) => {
    const path = "https://www.omdbapi.com/?apikey=2ae73c8e&plot=short&i=" + id;
    const { data } = await axios.get(path);
    dispatch({ type: MOVIE_ACTION_TYPES.RETRIEVE_MOVIE_GENRES, payload: data })
}

export const addNomination = (id) => async (dispatch, getState) => {
    let nominations = getState().movie.nominations;
    if (!nominations.some(nomination => nomination.imdbID === id) || nominations.length === 0) {
        const path = "https://www.omdbapi.com/?apikey=2ae73c8e&plot=short&i=" + id;
        const { data } = await axios.get(path);
        data.Genre = data.Genre.split(", ");
        nominations.push(data);
        dispatch({ type: MOVIE_ACTION_TYPES.ADD_NOMINATION_SUCCESS, payload: nominations });
    }
}

export const removeNomination = (id) => async (dispatch, getState) => {
    let nominations = getState().movie.nominations;
    let deleteIndex = nominations.findIndex(nomination => nomination.imdbID === id);
    nominations.splice(deleteIndex, 1);
    dispatch({ type: MOVIE_ACTION_TYPES.REMOVE_NOMINATION_SUCCESS, payload: nominations });
}

export const submitNominations = () => async (dispatch) => {
    dispatch({ type: MOVIE_ACTION_TYPES.SUBMIT_NOMINATION_SUCCESS});
}

export const clearSearch = () => async (dispatch) => {
    dispatch({ type: MOVIE_ACTION_TYPES.CLEAR_SEARCH_SUCCESS});
}
