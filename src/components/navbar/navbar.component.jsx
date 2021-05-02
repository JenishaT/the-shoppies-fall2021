import React from 'react';
import "./navbar.styles.scss";
import MenuIcon from "@material-ui/icons/Menu";
import { AppBar, Grid, Tabs, Tab, Hidden, Menu, IconButton, MenuItem } from "@material-ui/core";
import { Link } from "react-router-dom";


const navOptions = [
    { id: 0, label: 'Home', href: '/' },
    { id: 1, label: 'Nominate Movies', href: '/nominate-movies' },
    { id: 2, label: 'My Nominations', href: '/nominations' }
];


class NavBar extends React.Component {
    state = {
        selectedNavOption: '/',
        anchorEl: null
    };

    componentDidMount() {
        this.setState({ selectedNavOption: window.location.pathname });
    }

    handleChange = (event, newSelectedOption) => {
        this.setState({ selectedNavOption: newSelectedOption });
    };

    handleMenu = (event) => {
        this.setState({ anchorEl: event.target });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    render() {
        return (
            <AppBar position="relative" color="primary" className="navbar">
                <Grid container direction="row" alignContent="space-between" spacing={7}>
                    <Grid item
                        xs={8}
                        onClick={() => this.handleChange('/')}
                        component="a" href={'/'}
                    >
                        The Shoppies
                    </Grid>

                    <Grid item xs={4}>
                        <Hidden smDown>
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
                        </Hidden>

                        <Hidden mdUp>
                            <IconButton className="navTabs" onClick={this.handleMenu}>
                                <MenuIcon color="secondary" />
                            </IconButton>
                            <Menu
                                anchorEl={this.state.anchorEl}
                                open={!!this.state.anchorEl}
                                onClose={this.handleClose}
                            >
                                {navOptions.map(({ label, href }, index) => (
                                    <MenuItem
                                        id="nav-menu"
                                        key={index}
                                        onClick={this.handleClose}
                                        selected={href === window.location.pathname}
                                        component={Link}
                                        to={href}>
                                        {label}
                                    </MenuItem>
                                ))}
                            </Menu>

                        </Hidden>
                    </Grid>

                </Grid>
            </AppBar >
        )
    }


}

export default NavBar;