import React from "react";
import { connect } from "react-redux";
import "./nominations-list.styles.scss";
import Card from "@material-ui/core/Card";
import { Grid } from "@material-ui/core";
import { addNomination, getShortPlot } from "../../redux/movie/movie.actions";
import MovieCard from "../movie-card/movie-card.component";

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
                        <h2>Nominations</h2>
                    </Grid>
                    <Grid item xs={12}>
                        <div id="result-card-container">
                            {this.state.nominations && this.state.nominations.length > 0 ? 
                            (<Grid container direction="column" justify="space-between" spacing={3}>
                                {this.state.nominations.map((movie) => (
                                    <Grid item xs={12} key={movie.imdbID}>
                                        <MovieCard movie={movie} showRemoveButton={true} />
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
