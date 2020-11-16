import './App.css';
import Nav from './reactComponents/nav/Nav';
import Home from './reactComponents/home/Home';
import Footer from './reactComponents/footer/Footer';
import CurrentShow from './reactComponents/currentshow/CurrentShow'
import About from './About';
import Artist from './Artist';
import Reserve from './Reserve';
import Admin from './reactComponents/forms/Admin'
import AllShows from './reactComponents/allShows/AllShows'
import Login from './reactComponents/forms/Login'


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
               <Route path="./allShows" component={AllShows} />
               <Route path="/admin" component={Admin} />
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
