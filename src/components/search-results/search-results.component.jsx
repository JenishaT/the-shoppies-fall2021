import React from "react";
import { connect } from "react-redux";
import "./search-results.styles.scss";
import Card from "@material-ui/core/Card";
import { Grid } from "@material-ui/core";

import { getShortPlot, getGenres } from "../../redux/movie/movie.actions";
import MovieCard from "../movie-card/movie-card.component";


class SearchResults extends React.Component {
    state = {
        movies: this.props.movie.movies
    }
    componentDidMount() {
        let { movies } = this.state;
        if (movies) {
            for (let i = 0; i < movies.length; i++) {
                this.props.getShortPlot(movies[i].imdbID);
                this.props.getGenres(movies[i].imdbID);
            }
        }
        this.setState({ movies: this.props.movie.movies })
    }

    componentDidUpdate(prevProps) {
        const { movie } = this.props;
        if (movie.movies !== prevProps.movie.movies) {
            let movies = this.props.movie.movies;
            if (movies) {
                for (let i = 0; i < movies.length; i++) {
                    this.props.getShortPlot(movies[i].imdbID);
                    this.props.getGenres(movies[i].imdbID);
                }
            }
            this.setState({ movies: this.props.movie.movies });
        }
    }

    render() {
        return (
            <Card id="result-container" >
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="stretch"
                    spacing={1}
                >
                    <Grid item xs={12}>
                        <h2>Search Results</h2>
                    </Grid>
                    <Grid item xs={12}>
                        <div id="result-card-container">
                            {this.state.movies && this.state.movies.length > 0 ? (
                                <Grid container direction="column" justify="space-between" spacing={3}> {this.state.movies.map((movie) => (
                                    <Grid item xs={12} key={movie.imdbID}>
                                        <MovieCard movie={movie} showNominateButton={true} />
                                    </Grid>
                                ))}
                                </Grid>) :
                                <Grid id="empty-search" container direction="column" justify="center" spacing={2}>
                                    <Grid item> No Results found </Grid>
                                </Grid>}
                        </div>
                    </Grid>
                </Grid>
            </Card>
        )
    }
}

const mapStateToProps = (state) => ({
    movie: state.movie
});

const mapDispatchToProps = (dispatch) => ({
    getShortPlot: (id) => dispatch(getShortPlot(id)),
    getGenres: (id) => dispatch(getGenres(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
