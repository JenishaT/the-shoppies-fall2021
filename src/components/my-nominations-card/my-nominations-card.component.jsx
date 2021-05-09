import React from 'react';
import { withSnackbar } from 'notistack';
import { Grid, IconButton, Card, Tooltip, Slide } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import CloseIcon from '@material-ui/icons/Close';
import { connect } from "react-redux";
import { removeNomination } from "../../redux/movie/movie.actions";
import defaultPoster from "../../assets/defaultPoster.jpg";
import "./my-nominations-card.styles.scss";

class MyNominationCard extends React.Component {
    state = {
        movie: this.props.movie
    }

    addDefaultSrc(ev) {
        ev.target.src = defaultPoster;
    }

    removeNomination(id, title) {
        const closeAlert = key => (
            <IconButton onClick={() => { this.props.closeSnackbar(key) }} className="close-toast">
                <CloseIcon />
            </IconButton>
        );

        const message = 'Removed "' + title + '" from nominations';

        this.props.removeNomination(id).then(this.props.enqueueSnackbar(message, {
            anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'right',
            },
            autoHideDuration: 1500,
            TransitionComponent: Slide,
            variant: "error",
            action: closeAlert
        }));
    }


    render() {
        const { movie } = this.state;
        return (
            <Card id="nomination-card" key={movie.imdbID}>
                <Grid container direction="column" justify="center" alignItems="stretch">
                    <Grid item xs={12}>
                        {movie.Poster ? (
                            <img id="nomination-poster" src={movie.Poster} alt="Poster not available" onError={this.addDefaultSrc}></img>
                        ) : <img id="nomination-poster" src={defaultPoster} alt="Poster not available"></img>}
                    </Grid>
                    <Grid xs={12} item className="nomination-movie-title">
                        <b>{movie.Title}</b> ({movie.Year})
                    </Grid>
                </Grid>
                <div>
                    <Tooltip title="More info" placement="bottom" arrow>
                        <IconButton className="nomination-card-buttons" onClick={() => window.open("https://www.imdb.com/title/" + movie.imdbID + "/", "_blank")}>
                            <OpenInNewIcon />
                        </IconButton>
                    </Tooltip>
                    {!this.props.movies.submitted ? (
                        <Tooltip title="Remove Nomination" placement="bottom" arrow>
                            <IconButton className="nomination-card-buttons" onClick={this.removeNomination.bind(this, movie.imdbID, movie.Title)}>
                                <DeleteIcon />
                            </IconButton>
                        </Tooltip>)
                        : null}
                </div>
            </Card>
        )
    }
}

const mapStateToProps = (state) => ({
    movies: state.movie
});

const mapDispatchToProps = (dispatch) => ({
    removeNomination: (id) => dispatch(removeNomination(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(withSnackbar(MyNominationCard));