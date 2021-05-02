import React from 'react';
import "./nominate-movies.styles.scss";

import { Grid } from "@material-ui/core";
import SearchBar from "../searchbar/searchbar.component";
import SearchResults from "../search-results/search-results.component";

class NominateMovies extends React.Component {
    render() {
        return (
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="stretch"
                spacing={1}>
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
                            <p>My Nominations list</p>
                        </Grid>

                    </Grid>
                </Grid>

            </Grid>

        )
    }
}

export default NominateMovies;