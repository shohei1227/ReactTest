import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         これは12月19日15:42の変更です<br/>14:01の変更です<br/>これは12:45の変更です<br/>これは12:33の変更です<br/>Hello World!!!<br/>これはテスト作成のReactプロジェクトです。<br/>Edit <code>src/App.js</code> and save to reload.
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
    </div>
  );
}

export default App;
