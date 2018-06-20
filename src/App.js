import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import components
import Navbar from './components/Navbar';
import TitleBanner from './components/TitleBanner';
import Home from './components/Home';
import Receipts from './components/Receipts';
import Weekly from './components/Weekly';
import Add from './components/Add';
import Footer from './components/Footer';



class App extends Component {

  fileSelectedHandler = event => {
    console.log(event);
  }

  render() {
    return (
      <Router>
        <div className='root'>
          <Navbar />

          <Switch>
            <Route exact path='/'>
            <div className="wrapper">
              <TitleBanner>
                Receipt Itemizer
              </TitleBanner>
              <Home />
            </div>
            </Route>
            <Route exact path='/add'>
            <div className="wrapper">
              <TitleBanner>
                Add Receipts
              </TitleBanner>
              <Add />
            </div>
            </Route>
            <Route exact path='/receipts'>
            <div className="wrapper">
              <TitleBanner>
                Receipts
              </TitleBanner>
              <Receipts />
            </div>
            </Route>
            <Route exact path='/weekly'>
            <div className="wrapper">
              <TitleBanner>
                Weekly Report
              </TitleBanner>
              <Weekly />
            </div>
            </Route>

            

         </Switch>

         <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
