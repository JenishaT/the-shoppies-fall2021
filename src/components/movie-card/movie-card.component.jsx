import React from 'react';
import Card from "@material-ui/core/Card";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import CloseIcon from '@material-ui/icons/Close';
import { CardContent, Button, Grid, Hidden, IconButton } from "@material-ui/core";
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import { connect } from "react-redux";
import { getShortPlot, addNomination } from "../../redux/movie/movie.actions";
import defaultPoster from "../../assets/defaultPoster.jpg";
import { withSnackbar } from 'notistack';
import Slide from '@material-ui/core/Slide';
import './movie-card.styles.scss';

class MovieCard extends React.Component {
    state = {
        movie: this.props.movie,
        nominations: this.props.movies.nominations
    }

    componentDidUpdate(prevProps) {
        const { movies } = this.props;
        if (movies.nominations !== prevProps.movies.nominations) {
            this.setState({ nominations: this.props.movies.nominations });
        }
    }

    nominateMovie(id, title) {
        const closeAlert = key => (
            <IconButton onClick={() => { this.props.closeSnackbar(key)}} className="close-toast">
                <CloseIcon />
            </IconButton>
        );

        const message = 'Successfully nominated "' + title + '"';

        this.props.addNomination(id).then(this.props.enqueueSnackbar(message, {
            anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'right',
            },
            autoHideDuration: 1000,
            TransitionComponent: Slide,
            variant: "success",
            action: closeAlert
        }));
    }

    addDefaultSrc(ev) {
        ev.target.src = defaultPoster;
    }

    render() {
        const { movie } = this.state;
        return (
            <Card variant="outlined" id="result-card" key={movie.imdbID}>
                <Grid
                    container
                    direction="column"
                    justify="flex-start"
                    alignItems="center"
                    spacing={1}
                >
                    <CardContent>
                        <Grid container direction="row" spacing={2}>
                            <Grid item>
                                {movie.Poster ? (
                                    <img id="poster" src={movie.Poster} alt="Poster not available" onError={this.addDefaultSrc}></img>
                                ) : null}
                            </Grid>
                            <Grid item xs sm container>
                                <Grid item xs container direction="column" spacing={1}>
                                    <Grid item>
                                        <b>{movie.Title}</b> ({movie.Year})
                                    </Grid>
                                    <Grid item>
                                        {movie.Plot}
                                    </Grid>
                                    <Grid item xs id="tags-container">
                                        <Grid container spacing={1}>
                                            {movie.Genre ? (movie.Genre.map((genre) => (
                                                <Grid item key={genre}>
                                                    <div className="tags">{genre}</div>
                                                </Grid>
                                            ))
                                            ) : null}
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <Grid className="movie-action-buttons" justify="flex-end" container spacing={1}>
                                            <Grid item>
                                                <Hidden xsDown>
                                                    <Button variant="outlined" id="fullsize-button" onClick={() => window.open("https://www.imdb.com/title/"+ movie.imdbID +"/", "_blank")}>
                                                        Info <OpenInNewIcon />
                                                    </Button>
                                                </Hidden>
                                                <Hidden smUp>
                                                    <IconButton onClick={() => window.open("https://www.imdb.com/title/"+ movie.imdbID +"/", "_blank")}>
                                                        <OpenInNewIcon />
                                                    </IconButton>
                                                </Hidden>
                                            </Grid>

                                            <Grid item>
                                                <div>
                                                    <Hidden xsDown>
                                                        <Button id="fullsize-button" variant="outlined" disabled={this.state.nominations && (this.state.nominations.some(nomination => nomination.imdbID === movie.imdbID) || this.state.nominations.length === 5)} onClick={this.nominateMovie.bind(this, movie.imdbID, movie.Title)}>
                                                            Nominate
                                                            </Button>
                                                    </Hidden>
                                                    <Hidden smUp>
                                                        <IconButton disabled={this.state.nominations && (this.state.nominations.some(nomination => nomination.imdbID === movie.imdbID) || this.state.nominations.length === 5)} onClick={this.nominateMovie.bind(this, movie.imdbID, movie.Title)}>
                                                            <AddCircleOutlineIcon />
                                                        </IconButton>
                                                    </Hidden>
                                                </div>
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
    movies: state.movie
});

const mapDispatchToProps = (dispatch) => ({
    getShortPlot: (id) => dispatch(getShortPlot(id)),
    addNomination: (id) => dispatch(addNomination(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(withSnackbar(MovieCard));