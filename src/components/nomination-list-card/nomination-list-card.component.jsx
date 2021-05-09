import React from "react";
import { withSnackbar } from 'notistack';
import { Grid, IconButton, Card, Tooltip, Slide } from "@material-ui/core";
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import DeleteIcon from '@material-ui/icons/Delete';
import CloseIcon from '@material-ui/icons/Close';
import { connect } from "react-redux";
import { removeNomination } from "../../redux/movie/movie.actions";
import "./nomination-list-card.styles.scss";

class NominationListCard extends React.Component {
    state = {
        movie: this.props.movie
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
            <Card id="nomination-list-card">
                <Grid container direction="row" alignItems="center">
                    <Grid item xs>
                        <b>{movie.Title}</b> ({movie.Year})
                        <Grid container spacing={1} id="nomination-tags-container">
                            {movie.Genre ? (movie.Genre.map((genre) => (
                                <Grid item key={genre}>
                                    <div className="nomination-tags">{genre}</div>
                                </Grid>)))
                                : null}
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Tooltip title="More info" placement="bottom" arrow>
                            <IconButton className="nomination-card-buttons" onClick={() => window.open("https://www.imdb.com/title/" + movie.imdbID + "/", "_blank")}>
                                <OpenInNewIcon />
                            </IconButton>
                        </Tooltip>
                    </Grid>
                    <Grid item>
                        {!this.props.movies.submitted ? (
                            <Tooltip title="Remove Nomination" placement="bottom" arrow>
                                <IconButton className="nomination-card-buttons" onClick={this.removeNomination.bind(this, movie.imdbID, movie.Title)}>
                                    <DeleteIcon />
                                </IconButton>
                            </Tooltip>)
                            : null}
                    </Grid>
                </Grid>
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

export default connect(mapStateToProps, mapDispatchToProps)(withSnackbar(NominationListCard));