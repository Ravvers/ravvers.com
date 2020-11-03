import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Nav from './Nav';
//import Banner from './Banner';
import Portfolio from './Portfolio';
import About from './About'
import Footer from './Footer';

function App() {
  return (
    <Router>
    <div className="App">
      <div id='container'>
        <Nav/>
        <Switch>
          <Route exact path='/' component={Portfolio}/>
          <Route path='/about' component={About}/>
          <Route default component={Portfolio}/>
        </Switch>
      </div>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
