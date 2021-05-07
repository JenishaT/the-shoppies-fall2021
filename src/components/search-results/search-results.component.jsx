import React from "react";
import { Grid, IconButton, Card } from "@material-ui/core";
import FirstPageRoundedIcon from '@material-ui/icons/FirstPageRounded';
import ChevronLeftRoundedIcon from '@material-ui/icons/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@material-ui/icons/ChevronRightRounded';
import LastPageRoundedIcon from '@material-ui/icons/LastPageRounded';
import { connect } from "react-redux";
import { getShortPlot, getGenres, searchMovies } from "../../redux/movie/movie.actions";
import MovieCard from "../movie-card/movie-card.component";
import "./search-results.styles.scss";

class SearchResults extends React.Component {
    state = {
        movies: this.props.movie.movies,
        totalResults: this.props.movie.totalResults,
        currentPage: this.props.movie.currentSearchPage,
        totalPages: this.props.movie.totalSearchPages
    }

    componentDidMount() {
        let { movies } = this.state;
        if (movies) {
            for (let i = 0; i < movies.length; i++) {
                this.props.getShortPlot(movies[i].imdbID);
                this.props.getGenres(movies[i].imdbID);
            }
        }
        this.setState({
            movies: this.props.movie.movies,
            totalResults: this.props.movie.totalResults,
            currentPage: this.props.movie.currentSearchPage,
            totalPages: this.props.movie.totalSearchPages
        })
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
            this.setState({
                movies: this.props.movie.movies,
                totalResults: this.props.movie.totalResults,
                currentPage: this.props.movie.currentPage,
                totalPages: this.props.movie.totalSearchPages
            });
        }
    }

    handlePageForward = (event) => {
        this.props.searchMovies(this.props.query, this.props.movie.currentSearchPage + 1);
        this.setState({ currentPage: this.props.movie.currentSearchPage + 1 });
    }

    handlePageBack = (event) => {
        this.props.searchMovies(this.props.query, this.props.movie.currentSearchPage - 1);
        this.setState({ currentPage: this.props.movie.currentSearchPage - 1 });
    }

    toFirstPage = (event) => {
        this.props.searchMovies(this.props.query, 1);
        this.setState({ currentPage: 1 });
    }

    toLastPage = (event) => {
        this.props.searchMovies(this.props.query, this.props.movie.totalSearchPages);
        this.setState({ currentPage: this.props.movie.totalSearchPages });
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
                        {this.state.totalResults ?
                            <div className="search-results-total"> Found {this.state.totalResults} results for "{this.props.query}"</div>
                            : null}

                        {this.state.movies && this.state.movies.length > 0 ?
                            (<div className="pagination-controls">
                                <IconButton onClick={this.toFirstPage} disabled={this.props.movie.currentSearchPage === 1}>
                                    <FirstPageRoundedIcon />
                                </IconButton>
                                <IconButton onClick={this.handlePageBack} disabled={this.props.movie.currentSearchPage === 1}>
                                    <ChevronLeftRoundedIcon />
                                </IconButton>
                                {this.props.movie.currentSearchPage}/{this.state.totalPages}
                                <IconButton onClick={this.handlePageForward} disabled={this.props.movie.currentSearchPage === this.state.totalPages}>
                                    <ChevronRightRoundedIcon />
                                </IconButton>
                                <IconButton onClick={this.toLastPage} disabled={this.props.movie.currentSearchPage === this.state.totalPages}>
                                    <LastPageRoundedIcon />
                                </IconButton>
                            </div>) : null}
                    </Grid>
                    <Grid item xs={12}>
                        <div id="result-card-container">
                            {this.state.movies && this.state.movies.length > 0 ? (
                                <Grid container direction="column" justify="space-between" spacing={3}> {this.state.movies.map((movie) => (
                                    <Grid item xs={12} key={movie.imdbID}>
                                        <MovieCard movie={movie} />
                                    </Grid>
                                ))}
                                </Grid>) :
                                <Grid id="empty-search" container direction="column" justify="center" spacing={2}>
                                    <Grid item> No Results found for "{this.props.query}"</Grid>
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
    getGenres: (id) => dispatch(getGenres(id)),
    searchMovies: (query, page) => dispatch(searchMovies(query, page))

});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
