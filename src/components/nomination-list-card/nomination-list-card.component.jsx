import React from "react";
import { connect } from "react-redux";
import "./nomination-list-card.styles.scss";
import { Grid, IconButton, Card } from "@material-ui/core";
import { removeNomination } from "../../redux/movie/movie.actions";
import DeleteIcon from '@material-ui/icons/Delete';
import InfoIcon from '@material-ui/icons/Info';
import Tooltip from '@material-ui/core/Tooltip';

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
                                </Grid>
                            ))
                            ) : null}
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Tooltip title="More info" placement="bottom" arrow>
                            <IconButton className="nomination-card-buttons">
                                <InfoIcon />
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