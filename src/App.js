import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="text-center mt-5">Dictionary</h1>
        <main>
          <Dictionary />
        </main>
        <footer className="mt-5">Designed and coded by Laura Gómez</footer>
      </div>
    </div>
  );
}

export default App;
