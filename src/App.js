import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';

// Styles
import './App.scss';


function App() {
  return (
    <>
      <Router>  
        <Navbar />
          <Switch>
            <Route path='/home' exact component={Home} />
            <Route path='/projects' component={Projects} />
          </Switch>
      </Router>
    </>
  );
}

export default App;
