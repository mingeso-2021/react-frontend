import './assets/css/App.css';

import SendDocuments  from './components/SendDocuments.js'
import NavBar from './components/NavBar.jsx' 
import Footer from './components/Footer.js'

function App() {
  return (
    <div className="page-container  background">
      <div className="content-wrap">
          <NavBar />
          <SendDocuments />
      </div>
      <Footer />
    </div>
  );
}

export default App;
