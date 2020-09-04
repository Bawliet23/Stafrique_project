import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Switch, Route   } from 'react-router-dom';
import Accueil from './components/pages/Accueil';
import Apropos from './components/pages/Apropos';
import Catalogue from './components/pages/Catalogue';
import Contact from './components/pages/Contact';
function App() {
  return (
    
   <Router>
     <Navbar></Navbar>
     <Switch>
       <Route path="/Accueil" component={Accueil} />
       <Route path="/" exact component={Accueil} />
       <Route path="/Apropos" component={Apropos} />
       <Route path="/Catalogue" component={Catalogue} />
       <Route path="/Contact" component={Contact} />
     </Switch>
     
   </Router>
   
  );
}

export default App;
