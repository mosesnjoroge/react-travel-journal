import './App.css';
import Nav from './components/Nav';
import Entries from './components/Entries';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/stylesheets/Cards.css';
import entryData from './entryData'

function App() {
  const entryElements = entryData.map(entry => {
    return <Entries posttitle={entry.posttitle} entrytext={entry.entrytext} />
  })
  return (
    <div className="App">
      <Nav/>
      {entryElements}
    </div>
  );
}

export default App;
