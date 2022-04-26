import "./App.css";
import data from "./texts.js";
import React, { useState } from "react";

const App = () => {
  const [number, setNumber] = useState(0);
  const [paragraphs, setParagraphs] = useState([]);

  const generateParagraphs = () => {
    let saveParagraphs = [];
    if (number > 8) {
      setParagraphs([...data]);
      return;
    } else if (number < 0) {
      setParagraphs([data[0]]);
      return;
    }

    for (let i = 0; i < number; i++) {
      saveParagraphs.push(data[i]);
    }

    setParagraphs([...saveParagraphs]);
    console.log(paragraphs);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="page">
      <section className="header">
        <h1>TIRED OF BORING LOREM IPSUM?</h1>
        <form className="setup" onSubmit={handleSubmit}>
          <h3>Paragraphs: </h3>
          <input
            type="number"
            id="number"
            name="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          ></input>
          <button className="btn" onClick={() => generateParagraphs()}>
            <h5>Generate</h5>
          </button>
        </form>
      </section>
      <section className="content">
        {paragraphs.map((paragraph) => {
          return (
            <div class="paragraph">
              <p>{paragraph}</p>
            </div>
          );
        })}
      </section>
    </section>
  );
};

export default App;
