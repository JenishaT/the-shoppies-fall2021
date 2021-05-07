import React from 'react';
import "./my-nominations.styles.scss";
import { connect } from "react-redux";
import { Grid,  Button } from "@material-ui/core";
import { resetNominations } from "../../redux/movie/movie.actions";
import { Alert } from "@material-ui/lab";
import MyNominationsCard from "../my-nominations-card/my-nominations-card.component";
import NominationSubmissionDialog from "../nomination-submission-dialog/nomination-submission-dialog.component";



class MyNominations extends React.Component {
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

    closeSubmissionDialog = (openDialog) => {
        this.props.resetNominations();
        this.setState({ completeNominations: openDialog, nominations: this.props.movie.nominations});
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
                <NominationSubmissionDialog isOpen={this.state.completeNominations} closeDialog={this.closeSubmissionDialog}/>
            
                <Grid container
                    id="my-nominations-container"
                    direction="column"
                    justify="center"
                    alignItems="center"
                    spacing={1}
                >
                    <Grid item xs={12}>
                        <h1>My Nominations</h1>
                    </Grid>
                    <Grid item xs={12} id="my-nomination-alert-container">
                        {this.state.nominations && this.state.nominations.length === 5 ?
                            <Alert severity="success" action={
                                <Button color="inherit" size="small" onClick={this.submitNominations}>
                                    Submit
                                </Button>
                            }>
                                You have added 5 nominations to your list
                            </Alert> :
                            <div className="nomination-count-message">
                                You have nominated {this.state.nominations.length}/5 movies. Go to "Nominate Movies" to nominate more movies
                        </div>}
                    </Grid>

                    <Grid item xs={12} id="my-nomination-container">
                        <Grid container direction="row" alignItems="stretch" justify="center" spacing={1} >
                            {this.state.nominations && this.state.nominations.length > 0 ? (this.state.nominations.map((movie) => (
                                <Grid item xs={12} sm={4} md lg key={movie.imdbID} id="nomination-card-wrapper">
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
    resetNominations: () => dispatch(resetNominations())
});

export default connect(mapStateToProps, mapDispatchToProps)(MyNominations);