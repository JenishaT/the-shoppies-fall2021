import React from "react";
import { Grid, IconButton, Card, Tooltip } from "@material-ui/core";
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import DeleteIcon from '@material-ui/icons/Delete';
import { connect } from "react-redux";
import { removeNomination } from "../../redux/movie/movie.actions";
import "./nomination-list-card.styles.scss";

class NominationListCard extends React.Component {
    state = {
        movie: this.props.movie
    }

    removeNomination(id) {
        this.props.removeNomination(id);
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
                        <Tooltip title="Remove Nomination" placement="bottom" arrow>
                            <IconButton className="nomination-card-buttons" onClick={this.removeNomination.bind(this, movie.imdbID)}>
                                <DeleteIcon />
                            </IconButton>
                        </Tooltip>
                    </Grid>
                </Grid>
            </Card>
        )
    }
}
const mapDispatchToProps = (dispatch) => ({
    removeNomination: (id) => dispatch(removeNomination(id))
});

export default connect(null, mapDispatchToProps)(NominationListCard);