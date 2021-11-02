import logo from './logo.svg';
import './App.css';
import ViewComponent from './component/ViewComponent'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
          <Router>
              <Switch>
                  <Route path="/view" component={ViewComponent}></Route>
                 <Route path="/search/:key" component={SearchComponent}></Route>
              </Switch>
          </Router>

    </div>
  );
}

export default App;
