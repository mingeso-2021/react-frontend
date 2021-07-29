import './assets/css/App.css';
import SendDocuments from './components/SendDocuments.jsx'
import NavBar from './components/NavBar.jsx' 

function App() {
  return (
    <div className="App">
      <section className="components">
        <NavBar></NavBar>
        <SendDocuments />
      </section>
    </div>
  );
}

export default App;
