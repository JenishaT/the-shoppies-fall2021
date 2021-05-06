import React from "react";
import { connect } from "react-redux";
import "./nominations-list.styles.scss";
import Card from "@material-ui/core/Card";
import { Grid, Button } from "@material-ui/core";
import { addNomination, getShortPlot, resetNominations } from "../../redux/movie/movie.actions";
import NominationListCard from "../nomination-list-card/nomination-list-card.component";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import { Alert } from "@material-ui/lab";

class NominationsList extends React.Component {
    state = {
        nominations: this.props.movie.nominations,
        completeNominations: false
    }

    submitNominations = (e) => {
        this.setState({ completeNominations: true })
    }

    resetNominations = (e) => {
        this.props.resetNominations();
        this.setState({ completeNominations: false });
    }

    componentDidUpdate(prevProps) {
        const { movie } = this.props;
        if (movie.nominations !== prevProps.movie.nominations) {
            this.setState({ nominations: this.props.movie.nominations });
        }
    }

    render() {
        return (
            <div>
                <Dialog
                    open={this.state.completeNominations}
                    fullWidth={true}
                    maxWidth="sm"
                    style={{ backgroundColor: "transparent" }}
                >
                    <DialogContent>
                        <h3>
                            You have submitted your nominations! Below are your nominations:
                        </h3>
                        <Grid container direction="column">
                            {this.state.nominations ? (this.state.nominations.map((movie) => (
                                <Grid item xs={12}>
                                    <b>{movie.Title}</b> ({movie.Year})
                                </Grid>
                            ))) : null
                            }
                        </Grid>
                        <Grid justify="flex-end" container spacing={1}>
                            <Button variant="outlined" onClick={this.resetNominations}>
                                Nominate More Movies
                            </Button>
                        </Grid>
                    </DialogContent>
                </Dialog>
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
                            {this.state.nominations && this.state.nominations.length === 5 ?
                                <Alert severity="success" action={
                                    <Button color="inherit" size="small" onClick={this.submitNominations}>
                                        Submit
                                </Button>
                                }>
                                    You have added 5 nominations to your list
                            </Alert> : null}
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
    resetNominations: () => dispatch(resetNominations())
});

export default connect(mapStateToProps, mapDispatchToProps)(NominationsList);
