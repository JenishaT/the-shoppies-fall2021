import React from "react";
import { Paper, InputBase, IconButton, Divider, Grid } from "@material-ui/core";
import { Search as SearchIcon, Clear as ClearQueryIcon } from "@material-ui/icons";

import { searchMovies } from "../../redux/movie/movie.actions";
import { connect } from "react-redux";

import "./searchbar.styles.scss";

class SearchBar extends React.Component {
    state = {
        query: "",
        clearQueryVisible: false
    }

    handleChange = (e) => {
        const { value, name } = e.target;
        this.setState({ [name]: value, clearQueryVisible: value !== "" });
        this.props.searchMovies(value);
    };

    searchSubmit = (e) => {
        e.preventDefault();
        const { query } = this.state;
        if (query) {
            this.props.searchMovies(query);
            this.setState({ clearQueryVisible: true });
        }
    };

    clearQuery = (e) => {
        this.props.searchMovies("");
        this.setState({ query: "", clearQueryVisible: false });
    };

    render() {
        return (
            <Grid container
                direction="row"
                justify="center"
                alignItems="center">
                <Grid container xs={11}>
                    <Paper
                        component="form"
                        id="search-bar-container"
                        variant="outlined"
                        onSubmit={this.searchSubmit}
                    >
                        {this.state.clearQueryVisible ? (
                            <IconButton onClick={this.clearQuery}>
                                <ClearQueryIcon />
                            </IconButton>
                        ) : null}
                        <InputBase
                            id="search"
                            placeholder="Search For Movies"
                            fullWidth
                            value={this.state.query}
                            onChange={this.handleChange}
                            name="query"
                        />
                        <Divider orientation="vertical" flexItem variant="middle" />
                        <IconButton type="submit">
                            <SearchIcon />
                        </IconButton>
                    </Paper>
                </Grid>
            </Grid>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    searchMovies: (query) => dispatch(searchMovies(query))
});

export default connect(null, mapDispatchToProps)(SearchBar);
