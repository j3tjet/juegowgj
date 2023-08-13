import logo from './logo.svg';
import './App.css';
import Header from'./components/Header.js'
import History from'./components/History.js'
import Game from './components/Game.js'
import Fondo from './components/Fondo.js'


function App() {
  return (
  <div className="container-app">
    
    <Game/>
    <Fondo/>
    
    
    
  </div>
  );
}

export default App;
