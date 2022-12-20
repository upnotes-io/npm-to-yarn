import "./App.css";

function App() {
  return (
    <div className="App">
      <h2> Npm to yarn convertor </h2>
      <div className="input-container">
        <textarea placeholder="Input npm command"></textarea>
        <textarea disabled placeholder="Output to yarn"></textarea>
      </div>
    </div>
  );
}

export default App;
