import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary defaultKeyword="autumn" />
        </main>
        <footer className="App-footer">
          Coded by Allison Drechny and open-sourced on GitHub
        </footer>
      </div>
    </div>
  );
}
