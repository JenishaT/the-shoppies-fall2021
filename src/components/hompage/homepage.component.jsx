import React from "react";
import Button from '@material-ui/core/Button';

import "./homepage.styles.scss";

class Homepage extends React.Component {
    
    render() {
        return (
            <div className="curtain">
                <div className="curtain-wrapper">
                    <div className="curtain-panel curtain-panel-left">
                    </div>
                    <div className="curtain-content">
                        <div className="title">
                            <h1>Welcome</h1>
                            <h2>to</h2>
                            <h1>The Shoppies</h1>
                        </div>

                        <div className="nominate-button">
                            <Button variant="contained" color="primary" disableElevation component="a" href={'/nominate-movies'}>
                                Nominate Movies
                            </Button>
                        </div>

                    </div>

                    <div className="curtain-panel curtain-panel-right">
                    </div>
                </div>
            </div>

        )
    }
}

export default Homepage;