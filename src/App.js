import logo from './logo.svg';
import './App.css';
import Header from'./components/Header.js'
import History from'./components/History.js'
import Game from './components/Game.js'
import Fondo from './components/Fondo.js'
import music from './sound/nocturnal.mp3'


function App() {
  return (
  <div className="container-app">
    <audio id="myAudio" controls autoplay>
        <source src={music} type="audio/mpeg"/>
        Tu navegador no soporta el elemento de audio.
    </audio>
    <Game/>
    <Fondo/>
    
    
    
  </div>
  );
}

export default App;
