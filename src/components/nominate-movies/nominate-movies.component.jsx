import React from 'react';
import "./nominate-movies.styles.scss";

import { Grid } from "@material-ui/core";
import SearchBar from "../searchbar/searchbar.component";

class NominateMovies extends React.Component {
    render() {
        return (
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="stretch">
                <Grid item xs={12}>
                    <h1>Nominate Movies</h1>
                </Grid>
                <Grid item xs={12}>
                    <SearchBar />
                </Grid>

                <Grid item xs={11}>
                    <Grid 
                    container
                    direction="row"
                    justify="center"
                    >
                        <Grid container xs={8}>
                            <p>Search results</p>
                        </Grid>
                        <Grid container xs={4}>
                            <p>My Nominations list</p>
                        </Grid>

                    </Grid>
                </Grid>

            </Grid>

        )
    }
}

export default NominateMovies;