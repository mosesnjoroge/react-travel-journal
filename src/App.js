import './App.css';
import Nav from './components/Nav';
import Entries from './components/Entries';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/stylesheets/Cards.css';

function App() {

  return (
    <div className="App">
      <Nav/>

      <Entries
        posttitle = 'cuba'
        entrytext = 'very cool place'
      />

      <Entries
        posttitle = 'cuba'
        entrytext = 'very cool place'
      />

      <Entries
        posttitle = 'cuba'
        entrytext = 'very cool place'
      />

      <Entries
        posttitle = 'cuba'
        entrytext = 'very cool place'
      />
    </div>
  );
}

export default App;
