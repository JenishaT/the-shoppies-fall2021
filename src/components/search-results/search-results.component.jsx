import React from "react";
import { connect } from "react-redux";
import "./search-results.styles.scss";
import Card from "@material-ui/core/Card";
import { Grid } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';

import { getShortPlot, addNomination } from "../../redux/movie/movie.actions";
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
                            <Grid container direction="column" justify="space-between" spacing={3}>
                                {this.state.movies ? (this.state.movies.map((movie) => (
                                    <Grid item xs={12} key={movie.imdbID}>
                                        <MovieCard movie={movie} />
                                    </Grid>
                                ))
                                ) : null}
                            </Grid>
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
    addNomination: (id) => dispatch(addNomination(id))
});


export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
