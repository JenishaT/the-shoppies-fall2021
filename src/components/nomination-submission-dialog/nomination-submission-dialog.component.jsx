import React from "react";
import { Grid, Button, Dialog, DialogContent } from "@material-ui/core";
import { connect } from "react-redux";
import "./nomination-submission-dialog.styles.scss";

class NominationSubmissionDialog extends React.Component {
    state = {
        nominations: this.props.movie.nominations
    }

    closeSubmissionDialog = (e) => {
        this.props.closeDialog(false);
    }

    render() {
        return (
            <Dialog
                open={this.props.isOpen}
                fullWidth={true}
                maxWidth="sm"
            >
                <DialogContent>
                    <h3> You have submitted your nominations! Below are your nominations: </h3>
                    <Grid container direction="column">
                        {this.state.nominations ? (this.state.nominations.map((movie) => (
                            <Grid item xs={12} key={movie.imdbID}>
                                <b>{movie.Title}</b> ({movie.Year})
                            </Grid>)))
                            : null}
                        <Grid item xs={12}>
                           <br/> You can continue to use the site to search for movies
                        </Grid>
                        <Grid item xs={12}>
                            <Grid justify="flex-end" container spacing={1}>
                                <Button variant="outlined" onClick={this.closeSubmissionDialog}>
                                    Ok
                                    </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </DialogContent>
            </Dialog>
        )
    }
}

const mapStateToProps = (state) => ({
    movie: state.movie
});

export default connect(mapStateToProps, null)(NominationSubmissionDialog);