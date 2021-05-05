import React from "react";
import { connect } from "react-redux";
import "./nominations-list.styles.scss";
import Card from "@material-ui/core/Card";
import { Grid, IconButton } from "@material-ui/core";
import { addNomination, getShortPlot } from "../../redux/movie/movie.actions";
import DeleteIcon from '@material-ui/icons/Delete';
import InfoIcon from '@material-ui/icons/Info';
import MovieCard from "../movie-card/movie-card.component";
import Tooltip from '@material-ui/core/Tooltip';
import NominationListCard from "../nomination-list-card/nomination-list-card.component";

class NominationsList extends React.Component {
    state = {
        nominations: this.props.movie.nominations
    }

    componentDidUpdate(prevProps) {
        const { movie } = this.props;
        if (movie.nominations !== prevProps.movie.nominations) {
            this.setState({ nominations: this.props.movie.nominations });
        }
    }

    render() {
        return (
            <Card id="nominations-container" >
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="stretch"
                    spacing={1}
                >
                    <Grid item xs={12}>
                        <h2>Nominations </h2>
                        <h3 id="nomination-count">({this.state.nominations.length}/5)</h3>
                    </Grid>
                    <Grid item xs={12}>
                        <div id="nomination-card-container">
                            {this.state.nominations && this.state.nominations.length > 0 ?
                                (<Grid container direction="column" spacing={1}>
                                    {this.state.nominations.map((movie) => (
                                        <Grid item key={movie.imdbID}>
                                            <NominationListCard movie={movie} />
                                        </Grid>
                                    ))}
                                </Grid>) :
                                <Grid id="empty-nominations" container direction="column" justify="center" spacing={2}>
                                    <Grid item> Nominations are empty!</Grid>
                                    <Grid item> Search for movies and click NOMINATE to add a nomination </Grid>
                                </Grid>}
                        </div>
                    </Grid>
                </Grid>
            </Card >

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

export default connect(mapStateToProps, mapDispatchToProps)(NominationsList);
