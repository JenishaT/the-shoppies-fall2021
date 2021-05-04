import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Homepage from "./components/hompage/homepage.component";
import NavBar from "./components/navbar/navbar.component"
import NominateMovies from "./components/nominate-movies/nominate-movies.component";

function App() {
  return (
    <div className="App">
      <link href="https://fonts.googleapis.com/css2?family=Oranienbaum&display=swap" rel="stylesheet"></link>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/nominate-movies" component={NominateMovies} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;