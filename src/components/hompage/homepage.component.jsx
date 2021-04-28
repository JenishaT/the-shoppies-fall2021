import React from "react";
import "./homepage.component.scss";


import { Grid } from "@material-ui/core";
import Button from '@material-ui/core/Button';


class Homepage extends React.Component {

    componentDidMount() {
        document.documentElement.style.setProperty('--left-curtain-pos', -100);
        document.documentElement.style.setProperty('--right-curtain-pos', 100);
    }

    render() {
        return (
            <div class="curtain">
                <div class="curtain-wrapper">
                    <div class="curtain-panel curtain-panel-left">
                    </div>
                    <div class="curtain-content">
                        <div class="title">
                            <h1>Welcome</h1>
                            <h2>to</h2>
                            <h1>The Shoppies</h1>
                        </div>

                        <div class="nominate-button">
                            <Button variant="contained" color="primary">
                                Nominate Movies
                            </Button>
                        </div>

                    </div>

                    <div class="curtain-panel curtain-panel-right">
                    </div>
                </div>
            </div>

        )
    }
}

export default Homepage;