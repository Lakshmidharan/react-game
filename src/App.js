import logo from './logo.svg';
import './App.css';
import Game from './Game';

function App() {
  return (
    <div className='container'>
      <div className='col-lg-10'>
        <div className="App">
          <h1 className='head'>Tik-Tac-Toe</h1>
          <Game />
        </div>
      </div>

    </div>
  );
}

export default App;