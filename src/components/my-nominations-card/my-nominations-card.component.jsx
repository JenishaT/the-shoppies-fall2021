import React from 'react';
import "./my-nominations-card.styles.scss";
import { connect } from "react-redux";
import defaultPoster from "../../assets/defaultPoster.jpg";
import { Grid, IconButton, Card } from "@material-ui/core";
import { removeNomination } from "../../redux/movie/movie.actions";
import DeleteIcon from '@material-ui/icons/Delete';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import Tooltip from '@material-ui/core/Tooltip';


class MyNominationCard extends React.Component {
    state = {
        movie: this.props.movie
    }

    addDefaultSrc(ev) {
        ev.target.src = defaultPoster;
    }

    removeNomination(id) {
        this.props.removeNomination(id);
    }

    render() {
        const { movie } = this.state;
        return (
            <Card id="nomination-card" key={movie.imbdID}>
                <Grid container direction="column" justify="center" alignItems="stretch">
                    <Grid item xs={12}>
                        {movie.Poster ? (
                            <img id="nomination-poster" src={movie.Poster} alt="Poster not available" onError={this.addDefaultSrc}></img>
                        ) : null}
                    </Grid>
                    <Grid xs={12} item className="movie-title">
                        <b>{movie.Title}</b> ({movie.Year})
                    </Grid>
                </Grid>
                <div className="buttons">
                    <Tooltip title="More info" placement="bottom" arrow>
                        <IconButton className="nomination-card-buttons">
                            <OpenInNewIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Remove Nomination" placement="bottom" arrow>
                        <IconButton className="nomination-card-buttons" onClick={this.removeNomination.bind(this, movie.imdbID)}>
                            <DeleteIcon />
                        </IconButton>
                    </Tooltip>
                </div>
            </Card>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    removeNomination: (id) => dispatch(removeNomination(id))
});

export default connect(null, mapDispatchToProps)(MyNominationCard);