import React from 'react';
import { Grid, IconButton, Card, Tooltip } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
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

    removeNomination(id) {
        this.props.removeNomination(id);
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