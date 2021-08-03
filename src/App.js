import React from 'react';
import './assets/css/App.css';

import SendDocuments  from './components/SendDocuments.js'
import NavBar from './components/NavBar.jsx' 
import Footer from './components/Footer.js'
import Diplomas from './components/Diplomas.js'
import { BrowserRouter as Router,Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <NavBar/>
        <Route exact path = "/" render = {() => {
          return(
            <div className="page-container background" >
              <div className="content-wrap">
                
                <SendDocuments />
                <Footer /> 
              </div>
            </div> 
          )  
        }}>
        </Route> 
        <Route exact path="/diplomas" render = {() => {
          return(
            <div className="page-container background" >
              <div className="content-wrap">
                
                <Diplomas />
                <Footer /> 
              </div>
            </div> 
          )  
        }}>
        </Route>
      
    </Router> 
      
  );
}

export default App;
