import React from "react";
import { Paper, InputBase, IconButton, Divider, Grid } from "@material-ui/core";
import ClearQueryIcon from "@material-ui/icons/Clear";
import SearchIcon from "@material-ui/icons/Search";
import { connect } from "react-redux";
import { clearSearch, searchMovies } from "../../redux/movie/movie.actions";
import "./searchbar.styles.scss";

class SearchBar extends React.Component {
    state = {
        query: "",
        clearQueryVisible: false
    }

    handleChange = (e) => {
        const { value, name } = e.target;
        this.setState({ [name]: value, clearQueryVisible: value !== "" });
        this.props.searchMovies(value, 1);
        this.props.updateQuery(value);
    };

    searchSubmit = (e) => {
        e.preventDefault();
        const { query } = this.state;
        if (query) {
            this.props.searchMovies(query, 1);
            this.setState({ clearQueryVisible: true });
        }
    };

    clearQuery = (e) => {
        this.props.clearSearch();
        this.setState({ query: "", clearQueryVisible: false });
        this.props.updateQuery("");
    };

    componentDidMount() {
        this.setState({ query: "", clearQueryVisible: false });
    }

    render() {
        return (
            <Grid container
                direction="row"
                justify="center"
                alignItems="center">
                <Grid container item xs={12}>
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
    searchMovies: (query, page) => dispatch(searchMovies(query, page)),
    clearSearch: () => dispatch(clearSearch())
});

export default connect(null, mapDispatchToProps)(SearchBar);
