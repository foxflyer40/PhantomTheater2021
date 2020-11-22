import "./App.css";
import Nav from "./reactComponents/nav/Nav";
import Home from "./reactComponents/home/Home";
import Footer from "./reactComponents/footer/Footer";
import About from "./reactComponents/about/About";
import Artist from "./reactComponents/artist/Artist";
import Reserve from "./reactComponents/reserve/Reserve";
import Season from "./reactComponents/season/Season";
import Burger from "./reactComponents/burger/Burger.js";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Burger />
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
            {/* <CurrentShow /> */}
          </Route>
          <Route path="/About" component={About} />
          <Route path="/Artist" component={Artist} />
          <Route path="/Reserve" component={Reserve} />
          <Route path="/Season" component={Season} />
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
