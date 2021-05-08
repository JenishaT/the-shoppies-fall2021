import React from 'react';
import { Grid, Button } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { connect } from "react-redux";
import { submitNominations } from "../../redux/movie/movie.actions";
import MyNominationsCard from "../my-nominations-card/my-nominations-card.component";
import NominationSubmissionDialog from "../nomination-submission-dialog/nomination-submission-dialog.component";
import "./my-nominations.styles.scss";


class MyNominations extends React.Component {
    state = {
        nominations: this.props.movie.nominations,
        completeNominations: false,
        submitted: this.props.movie.submitted
    }

    submitNominations = (e) => {
        this.setState({ completeNominations: true })
    }

    closeSubmissionDialog = (openDialog) => {
        this.props.submitNominations();
        this.setState({ completeNominations: openDialog, nominations: this.props.movie.nominations });
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
                <NominationSubmissionDialog isOpen={this.state.completeNominations} closeDialog={this.closeSubmissionDialog} />

                <Grid container
                    direction="column"
                    justify="center"
                    alignItems="center"
                    spacing={1}
                >
                    <Grid item xs={12}>
                        <h1>My Nominations</h1>
                    </Grid>
                    <Grid item xs={12} id="my-nomination-alert-container">
                        {this.state.nominations && this.state.nominations.length === 5 && !this.state.submitted ?
                            <Alert severity="success" action={
                                <Button color="inherit" size="small" onClick={this.submitNominations}>
                                    Submit
                                </Button>
                            }>
                                You have added 5 nominations to your list
                            </Alert> : null} 
                            <div className="nomination-count-message">
                               { this.state.submitted ? "You have successfully nominated the following movies:" : 
                               "You have nominated" + this.state.nominations.length + "/5 movies. Go to Nominate Movies to nominate more movies"} 
                            </div>
                    </Grid>

                    <Grid item xs={12}>
                        <Grid container direction="row" alignItems="stretch" justify="center" spacing={1} >
                            {this.state.nominations && this.state.nominations.length > 0 ? (this.state.nominations.map((movie) => (
                                <Grid item xs={7} sm={4} md lg key={movie.imdbID} id="nomination-card-wrapper">
                                    <MyNominationsCard movie={movie} />
                                </Grid>
                            ))) : null}
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    movie: state.movie
});

const mapDispatchToProps = (dispatch) => ({
    submitNominations: () => dispatch(submitNominations())
});

export default connect(mapStateToProps, mapDispatchToProps)(MyNominations);