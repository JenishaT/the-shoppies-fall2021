import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Homepage from "./components/hompage/homepage.component";

function App() {
  return (
    <div className="App">
      <h4>NavBar Here</h4>
      <BrowserRouter>
                <Switch>
                  <Route exact path="/" component={Homepage} />
                </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
