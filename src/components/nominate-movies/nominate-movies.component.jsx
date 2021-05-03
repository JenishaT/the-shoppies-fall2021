import React from 'react';
import "./nominate-movies.styles.scss";

import { Grid } from "@material-ui/core";
import SearchBar from "../searchbar/searchbar.component";
import SearchResults from "../search-results/search-results.component";
import NominationsList from "../nominations-list/nominations-list.component";
import { clearSearch } from "../../redux/movie/movie.actions";
import { connect } from "react-redux";

class NominateMovies extends React.Component {
    componentDidMount() {
        this.props.clearSearch();
    }
    
    render() {
        return (
            <Grid
                id="nominate-container"
                container
                direction="column"
                justify="center"
                alignItems="stretch"
                spacing={2}>
                <Grid item xs={12}>
                    <h1>Nominate Movies</h1>
                </Grid>
                <Grid item xs={12}>
                    <SearchBar />
                </Grid>

                <Grid item xs={12}>
                    <Grid
                        container
                        direction="row"
                        justify="center"
                    >
                        <Grid container xs={7}>
                            <SearchResults />
                        </Grid>
                        <Grid container xs={5}>
                            <NominationsList />
                        </Grid>

                    </Grid>
                </Grid>

            </Grid>

        )
    }
}
const mapDispatchToProps = (dispatch) => ({
    clearSearch : () => dispatch(clearSearch())
});

export default connect(null, mapDispatchToProps)(NominateMovies);