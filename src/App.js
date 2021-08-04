// Native components
import React from 'react';
import { BrowserRouter as Router,Route } from 'react-router-dom'
// Styles
import './assets/css/App.css';
// Import components
import SendDocuments  from './components/send-documents/SendDocuments.js'
import NavBar from './components/shared/NavBar.jsx' 
import Footer from './components/shared/Footer.js'
import Diplomas from './components/Diplomas.js'

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
