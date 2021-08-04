import './assets/css/App.css';

import SendDocuments  from './components/SendDocuments.js'
import NavBar from './components/NavBar.jsx' 
import Footer from './components/Footer.js'

function App() {
  return (
    <Router>
      <NavBar/>
        <Route exact path = "/" render = {() => {
          return(
            <div className="page-container background" >
              <div className="content-wrap">
                
                <SendDocuments />
                <div className="foot">
                <Footer /> 
                </div>
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
                <div className="foot">
                <Footer /> 
                </div>
              </div>
            </div> 
          )  
        }}>
        </Route>
      
    </Router> 
      
  );
}

export default App;
