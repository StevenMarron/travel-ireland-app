import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import ThingsToDo from "./views/ThingsToDo";
import PlacesToStay from "./views/PlacesToStay";
import Navbar from "./components/Navbar";

function App(){
  return(
    <div className="container-fluid">
      <Router>  
        <Navbar />
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/thingstodo">
              <ThingsToDo />
            </Route>
            <Route path="/placestostay">
              <PlacesToStay />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;