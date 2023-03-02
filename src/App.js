import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />

        <footer>
          This project was coded by{" "}
          <a
            href="https://www.tetyanakozak.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tetyana Kozak
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Tetyana123/SheCodes-react-week5.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://boisterous-otter-2cb390.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}