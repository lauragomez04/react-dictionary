import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="text-center mt-5">Dictionary</h1>
        <main>
          <Dictionary defaultKeyword="flower" />
        </main>
        <footer className="mt-5 mb-4 text-center">
          Designed and coded by Laura Gómez
        </footer>
      </div>
    </div>
  );
}

export default App;
