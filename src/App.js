import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import ThingsToDo from "./views/ThingsToDo";
import PlacesToStay from "./views/PlacesToStay";
import Covid from "./views/Covid";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App(){
  return(
    <section>
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
            <Route path="/covid">
              <Covid />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </section>
  );
}

export default App;