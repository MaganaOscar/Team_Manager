import './App.css';
import {Router, navigate} from '@reach/router';
import Main from './views/Main';
import Create from './views/Create';
import Status from './views/Status';
import Index from './views/Index';

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Index path="/"/> */}
        <Main path="/players/list"/>
        <Create path="/players/addplayer"/>
      </Router>
    </div>
  );
}

export default App;
