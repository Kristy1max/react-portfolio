import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';


// Actions
import ScrollToTop from './components/ScrollToTop';

// Styles
import './App.scss';

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/projects' component={Projects} />
            <Route path='/contact' component={Contact} />
          </Switch>
      </Router>
    </> 
  );
}

export default App;
