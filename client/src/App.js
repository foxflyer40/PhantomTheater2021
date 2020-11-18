import './App.css';
import Nav from './reactComponents/nav/Nav';
import Home from './reactComponents/home/Home';
import Footer from './reactComponents/footer/Footer';
import CurrentShow from './reactComponents/currentshow/CurrentShow'
import About from './About';
import Artist from './Artist';
import Reserve from './Reserve';
import AdminForm from './reactComponents/forms/AdminForm'
import AllShows from './reactComponents/allShows/AllShows'
import Login from './reactComponents/forms/Login'
import ArtistForm from './reactComponents/forms/ArtistForm'
import ProposalForm from './reactComponents/forms/ProposalForm'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
   return (
      <Router>
         <div className="App">
            <Nav />

            <Switch>

               <Route exact path="/">
                  <Home />
                  <CurrentShow />
               </Route>
               <Route path="/artistForm" component={ArtistForm} />
               <Route path="/allShows" component={AllShows} />
               <Route path="/adminForm" component={AdminForm} />
               <Route path="/proposalForm" component={ProposalForm} />
               <Route path='/login' component={Login} />
               <Route path="/About" component={About} />
               <Route path="/Artist" component={Artist} />
               <Route path="/Reserve" component={Reserve} />

            </Switch>



            <Footer />
         </div>
      </Router>
   );
}

export default App;
