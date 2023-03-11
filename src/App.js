import './App.css';
import Nav from './components/Navbar';
import Entries from './components/Entries';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Entries/>
    </div>
  );
}

export default App;
