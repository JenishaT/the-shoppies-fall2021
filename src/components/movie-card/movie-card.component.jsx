import React from 'react';
import Card from "@material-ui/core/Card";
import { CardContent, Button, Grid } from "@material-ui/core";
import { connect } from "react-redux";
import { getShortPlot, addNomination } from "../../redux/movie/movie.actions";
import './movie-card.styles.scss';

class MovieCard extends React.Component {
    state = {
        movie: this.props.movie,
        nominations: this.props.movieState.nominations
    }

    componentDidUpdate(prevProps) {
        const { movie } = this.props;
        if (movie.nominations !== prevProps.movie.nominations) {
            this.setState({ nominations: this.props.movie.nominations });
        }
    }

    nominateMovie(id) {
        this.props.addNomination(id);
    }

    render() {
        const { movie } = this.state;
        return (
            <Card variant="outlined" id="result-card" key={movie.imdbID}>
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                    spacing={1}
                >
                    <CardContent>
                        <Grid container direction="row" spacing={1}>
                            <Grid item>
                                {movie.Poster ? (
                                    <img id="poster" src={movie.Poster} alt={movie.Title}></img>
                                ) : null}
                            </Grid>
                            <Grid item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={1}>
                                    <Grid item>
                                        <b>{movie.Title}</b> ({movie.Year})
                                    </Grid>
                                    <Grid item xs>
                                        {movie.Plot}
                                    </Grid>
                                    <Grid item>
                                        <Grid className="movie-action-buttons" justify="flex-end" container spacing={1}>
                                            <Grid item >
                                                <Button variant="outlined" >
                                                    More Info
                                                </Button>
                                            </Grid>

                                            <Grid item >
                                                <Button variant="outlined" disabled={this.state.nominations && this.state.nominations.some(nomination => nomination.imdbID === movie.imdbID)} onClick={this.nominateMovie.bind(this, movie.imdbID)}>
                                                    Nominate
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Grid>
            </Card>
        )
    }
}

const mapStateToProps = (state) => ({
    movieState: state.movie
});

const mapDispatchToProps = (dispatch) => ({
    getShortPlot: (id) => dispatch(getShortPlot(id)),
    addNomination: (id) => dispatch(addNomination(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieCard);