import React from "react";
import { Grid, Button, Card } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { connect } from "react-redux";
import { addNomination, getShortPlot, submitNominations } from "../../redux/movie/movie.actions";
import NominationListCard from "../nomination-list-card/nomination-list-card.component";
import NominationSubmissionDialog from "../nomination-submission-dialog/nomination-submission-dialog.component";
import "./nominations-list.styles.scss";

class NominationsList extends React.Component {
    state = {
        nominations: this.props.movie.nominations,
        completeNominations: false,
        submitted: this.props.movie.submitted
    }

    submitNominations = (e) => {
        this.props.submitNominations();
        this.setState({ completeNominations: true })
    }

    closeSubmissionDialog = (openDialog) => {
        this.setState({ completeNominations: openDialog, nominations: this.props.movie.nominations, submitted: this.props.movie.submitted });
    }

    componentDidUpdate(prevProps) {
        const { movie } = this.props;
        if (movie.nominations !== prevProps.movie.nominations || movie.submitted !== prevProps.movie.submitted) {
            this.setState({ nominations: this.props.movie.nominations, submitted: this.props.movie.submitted });
        }
    }

    render() {
        return (
            <div>
                <NominationSubmissionDialog isOpen={this.state.completeNominations} closeDialog={this.closeSubmissionDialog} />

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
                            <h3 className="nomination-count">({this.state.nominations.length}/5)</h3>
                        </Grid>
                        <Grid item xs={12} id="alert-container">
                            {this.state.nominations && this.state.nominations.length === 5 && !this.state.submitted ?
                                <Alert severity="success" action={
                                    <Button color="inherit" size="small" onClick={this.submitNominations}>
                                        Submit
                                </Button>
                                }>
                                    You have added 5 nominations to your list
                            </Alert> : null}

                            {this.state.submitted ? <Alert severity="info"> You have successfully nominated the following movies: </Alert> : null}
                        </Grid>
                        <Grid item xs={12}>
                            <div id="nomination-card-container">
                                <div id={this.state.nominations && this.state.nominations.length === 5 ? "alert-shown" : "no-alert"}>
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
                            </div>
                        </Grid>
                    </Grid>
                </Card >
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    movie: state.movie
});

const mapDispatchToProps = (dispatch) => ({
    getShortPlot: (id) => dispatch(getShortPlot(id)),
    addNomination: (id) => dispatch(addNomination(id)),
    submitNominations: () => dispatch(submitNominations())
});

export default connect(mapStateToProps, mapDispatchToProps)(NominationsList);
