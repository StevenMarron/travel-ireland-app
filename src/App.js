import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Routing elements were imported from the react-router-dom package to connect the PWAs views
import Home from "./views/Home";
import ThingsToDo from "./views/ThingsToDo";
import PlacesToStay from "./views/PlacesToStay";
import Covid from "./views/Covid";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// The views and components needed by the Router are imported from their respective folders

function App(){
  return(
    <section>
      <Router>
        {/* The navbar and footer are components that will remain contant across all pages,
        therefore they are placed above and below the view components*/}
        <Navbar />
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/thingstodo">
              <ThingsToDo />
            </Route>
            {/* The path specifies what will be appended to the URL once that path is taken,
            the associated view .js file is placed inside the route tag */}
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