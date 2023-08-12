import logo from './logo.svg';
import './App.css';
import './components/Header'
import './components/History'
import './components/Game'
import Header from './components/Header';

function App() {
  return (
  <div>
    <Header />
    <History />
    <Game />
  </div>
  );
}

export default App;
