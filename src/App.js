import "./App.css";
import logo from "./logo.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="mockBee logo" width="180" height="180" />
        <h1 className="brand-title">
          Welcome to <span>TI Social!</span>
        </h1>
      </header>
    </div>
  );
}

export default App;
