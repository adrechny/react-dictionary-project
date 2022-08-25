import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary defaultKeyword="winter" />
        </main>
        <footer className="App-footer">
          Coded by Allison Drechny and open-sourced on{" "}
          <a
            href="https://github.com/adrechny/react-dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
