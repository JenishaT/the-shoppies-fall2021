import React from 'react';
import "./navbar.styles.scss";

import {
    AppBar, Grid, Tabs, Tab
} from "@material-ui/core";
import { withRouter, Link } from "react-router-dom";

const navOptions = [
    { id: 0, label: 'Home', href: '/' },
    { id: 1, label: 'Nominate Movies', href: '/nominate-movies' },
    { id: 2, label: 'My Nominations', href: '/nominations' }
];


class NavBar extends React.Component {
    state = {
        selectedNavOption: '/'
    };

    handleChange = (event, newSelectedOption) => {
        console.log(newSelectedOption);
        this.setState({ selectedNavOption: newSelectedOption});
    };

    render() {
        return (
            <AppBar position="relative" color="primary" className="navbar">
                <Grid container direction="row" alignContent="space-between" spacing={7}>
                    <Grid item
                        xs={3}
                        onClick={() => this.handleChange(0)}
                        component="a" href={'/'}
                    >
                        The Shoppies
                    </Grid>

                    <Grid item xs={9}>
                        <Tabs className="navTabs"
                            value={this.state.selectedNavOption}
                            indicatorColor="secondary"
                            textColor="white"
                            onChange={this.handleChange}
                        >
                            {navOptions.map(({ label, href }, index) => (
                                <Tab
                                key={index}
                                value={href}
                                label={label} 
                                component={Link}
                                to={href}></Tab>
                            ))}
                        </Tabs>
                    </Grid>

                </Grid>
            </AppBar>
        )
    }


}

export default NavBar;