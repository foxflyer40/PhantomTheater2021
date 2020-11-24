import "./App.css";
import Nav from "./reactComponents/nav/Nav";
import Home from "./reactComponents/home/Home";
import Footer from "./reactComponents/footer/Footer";
import About from "./reactComponents/about/About";
import Artist from "./reactComponents/artist/Artist";
import Reserve from "./reactComponents/reserve/Reserve";
import Season from "./reactComponents/season/Season";
import Burger from "./reactComponents/burger/Burger.js";
import AdminForm from "./reactComponents/forms/AdminForm";
import AllShows from "./reactComponents/forms/AllShows";
import Login from "./reactComponents/forms/Login";
import ArtistForm from "./reactComponents/forms/ArtistForm";
import ProposalForm from "./reactComponents/forms/ProposalForm";
import EditShow from "./reactComponents/forms/EditShow";
import { AuthProvider } from "./reactComponents/forms/AuthContext";
// import PrivateRoute from "../src/reactComponents/forms/PrivateRoute";

import Dashboard from "./reactComponents/forms/Dashboard";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Burger />
        <Nav />
        <AuthProvider>
          <Switch>
            <Route exact path="/">
              <Home />
              {/* <CurrentShow /> */}
            </Route>
            <Route path="/login" component={Login} />
            <Route path="/adminDash" component={Dashboard} />
            <Route path="/proposalForm" component={ProposalForm} />
            <Route path="/editShow" component={EditShow} />
            <Route path="/adminForm" component={AdminForm} />
            <Route path="/artistForm" component={ArtistForm} />
            <Route path="/allShows" component={AllShows} />
            <Route path="/Season" component={Season} />
            <Route path="/About" component={About} />
            <Route path="/Artist" component={Artist} />
            <Route path="/Reserve" component={Reserve} />
          </Switch>
        </AuthProvider>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
