import logo from './logo.svg';
import './App.css';
import Header from './componentes/header/Header';
import Footer from './componentes/footer/Footer';

function App() {
  return (
    <>
    <Header className="Header-perso"/>
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
    </div>
    <Footer className="Footer-perso"/>
    </>
  );
}

export default App;
