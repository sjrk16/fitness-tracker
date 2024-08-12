import "./App.css"
import { useEffect, useState } from 'react';

function App() {
  const [quotes, setQuotes] = useState([]);
  const [randomQuote, setRandomQuote] = useState(null);

  useEffect(() => {
    const fetchQuotes = () => {
      fetch("https://type.fit/api/quotes")
        .then(response => response.json())
        .then(data => {
          setQuotes(data);
          setRandomQuote(getRandomQuote(data));
        })
        .catch(error => console.error('Error fetching quotes:', error.message));
    };

    fetchQuotes();
  }, []);

  const getRandomQuote = (quotesArray) => {
    if (quotesArray.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * quotesArray.length);
    return quotesArray[randomIndex];
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRandomQuote = getRandomQuote(quotes);
    setRandomQuote(newRandomQuote);
  };

  return (
    <>
      <div className="con">
        <form onSubmit={handleSubmit}>
          <h3>Quotes Generator</h3>
          <p>{randomQuote ? randomQuote.text : 'No quotes available'}</p>
          <button type='submit'>Get Random Quote</button>
        </form>
      </div>
    </>
  );
}

export default App;
