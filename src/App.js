import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState("");
  const [quote, setQuote] = useState({"quote": "", "author": ""});
  const [fetchValue, setFetchValue] = useState("quotes/random");

  const myQuote = {"quote": "H E L l O O O O U!? The input is empty",
"author": "Anna"}

  useEffect(() => {fetch(`https://anna-quote-server.glitch.me/${fetchValue}`)
  .then(res => res.json())
  .then(data => setQuote(data))}, [fetchValue]) 

  function randomQuote () {
    fetch(`https://anna-quote-server.glitch.me/quotes/random`)
  .then(res => res.json())
  .then(data => setQuote(data))
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="quotes">
          {quote.length > 1 ? (
            quote.map((quote) => (
              <div>
                <h3>{quote.quote}</h3>
                <p>Author: {quote.author}</p>
              </div>
            ))
          ) : (
            <div>
              <h3>{quote.quote}</h3>
              <p>Author: {quote.author}</p>
            </div>
          )}
        </div>
        <div>
          <input
            type="text"
            value={inputValue}
            placeholder="Type a term you are looking for..."
            onChange={(e) => setInputValue(e.target.value)}
          ></input>
          <div className="buttonsDiv">
            <button
              name="randomQuote"
              className="buttons"
              onClick={() => randomQuote()}
            >
              Get random quote
            </button>
            <button
              name="customQuote"
              className="buttons"
              onClick={() => {
                inputValue === ""
                  ? setQuote(myQuote)
                  : setFetchValue(`quotes/search?term=${inputValue}`);
              }}
            >
              Find the quote
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
