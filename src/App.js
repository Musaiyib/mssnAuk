import './App.css';
import NavBar from './NavBar.js'
import Home from './Home.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Reciept from './Reciept.js'

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <NavBar />
        </header>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/reciept">
            <Reciept />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
