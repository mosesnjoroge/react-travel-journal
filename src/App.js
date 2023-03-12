import './App.css';
import Nav from './components/Nav';
import Entries from './components/Entries';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/stylesheets/Cards.css';
import data from './data'

function App() {
  const entryElements = data.map(entry => {
    return <Entries
    id = {entry.id}
    posttitle = {entry.posttitle}
    entrytext = {entry.entrytext}
     />
  })
  return (
    <div className="App">
      <Nav/>
      {entryElements}
    </div>
  );
}

export default App;
