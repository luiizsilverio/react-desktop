import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Exemplo de uso do Electron com React.
        </p>
        <a
          className="App-link"
          href="https://github.com/luiizsilverio"
          target="_blank"
          rel="noopener noreferrer"
        >
          LuizDev
        </a>
      </header>
    </div>
  );
}

export default App;
