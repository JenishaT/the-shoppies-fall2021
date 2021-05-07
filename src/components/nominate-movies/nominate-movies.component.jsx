import React from 'react';
import { Grid } from "@material-ui/core";
import SearchBar from "../searchbar/searchbar.component";
import SearchResults from "../search-results/search-results.component";
import NominationsList from "../nominations-list/nominations-list.component";
import { connect } from "react-redux";
import { clearSearch } from "../../redux/movie/movie.actions";
import "./nominate-movies.styles.scss";

class NominateMovies extends React.Component {
    state = {
        query: ""
    }

    componentDidMount() {
        this.props.clearSearch();
    }

    onQueryUpdate(newQuery) {
        this.setState({ query: newQuery });
    }

    render() {
        return (
            <Grid
                id="nominate-container"
                container
                direction="column"
                justify="center"
                alignItems="stretch"
                spacing={2}
            >
                <Grid item xs={12}>
                    <h1>Nominate Movies</h1>
                </Grid>
                <Grid item xs={12}>
                    <SearchBar updateQuery={this.onQueryUpdate.bind(this)} />
                </Grid>
                <Grid item xs={12}>
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        spacing={1}
                    >
                        <Grid item xs={12} md={7}>
                            <SearchResults query={this.state.query} />
                        </Grid>
                        <Grid item xs={12} md={5}>
                            <NominationsList />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    clearSearch: () => dispatch(clearSearch())
});

export default connect(null, mapDispatchToProps)(NominateMovies);