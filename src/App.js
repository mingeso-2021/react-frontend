import React from 'react';
import './assets/css/App.css';

import SendDocuments  from './components/SendDocuments.js'
import NavBar from './components/NavBar.jsx' 
import Footer from './components/Footer.js'
import Diplomas from './components/Diplomas.jsx'
import { BrowserRouter as Router,Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <NavBar/>
        <Route exact path = "/" render = {() => {
          return(
            <div className="App">
              <section className="components">
                
                <SendDocuments />
              </section>
            </div> 
          )  
        }}>
        </Route> 
        <Route exact path="/diplomas" render = {() => {
          return(
            <div className="App">
              <section className="components">
                
                <Diplomas />
              </section>
            </div> 
          )  
        }}>
        </Route>
      
    </Router> 
      <Footer />
  );
}

export default App;
