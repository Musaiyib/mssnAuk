import './App.css';
import NavBar from './NavBar.js'
import Home from './Home.js'

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <div>
        <Home />
      </div>
    </div>
  )
}

export default App;
