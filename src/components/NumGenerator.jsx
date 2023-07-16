import React, {useEffect, useState} from 'react';
import './NumGeneratorStyles.css'
import Cards from './Cards';
import Buttons from './Buttons';

export default function NumGenerator(){
  const [mainNumbers, setMainNumbers] = useState([]);
  const [euroNumbers, setEuroNumbers] = useState([]);
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);

  useEffect(() => {
    const storedMainNumbers = localStorage.getItem('mainNumbers');
    const storedEuroNumbers = localStorage.getItem('euroNumbers');
    const storedHistory = localStorage.getItem('history');
    if (storedMainNumbers && storedEuroNumbers) {
      setMainNumbers(JSON.parse(storedMainNumbers));
      setEuroNumbers(JSON.parse(storedEuroNumbers));
    }
    if (storedHistory) {
      setHistory(JSON.parse(storedHistory));
    }
  }, []);
  
  function generateNumbers() {
    const newMainNumbers = [];
    const newEuroNumbers = [];
  
    while (newMainNumbers.length < 5) {
      const randomNumber = Math.floor(Math.random() * 50) + 1;
      if (!newMainNumbers.includes(randomNumber)) {
        newMainNumbers.push(randomNumber);
      }
    }
  
    while (newEuroNumbers.length < 2) {
      const randomNumber = Math.floor(Math.random() * 10) + 1;
      if (!newEuroNumbers.includes(randomNumber)) {
        newEuroNumbers.push(randomNumber);
      }
    }
  
    setMainNumbers(newMainNumbers.sort((a, b) => a - b));
    setEuroNumbers(newEuroNumbers.sort((a, b) => a - b));
  
    const newHistoryItem = {
      mainNumbers: newMainNumbers.sort((a, b) => a - b),
      euroNumbers: newEuroNumbers.sort((a, b) => a - b)
    };
  
    setHistory((prevHistory) => [...prevHistory, newHistoryItem]);
  
    localStorage.setItem('mainNumbers', JSON.stringify(newMainNumbers));
    localStorage.setItem('euroNumbers', JSON.stringify(newEuroNumbers));
    localStorage.setItem('history', JSON.stringify(history));
  }
  
  function toggleShowHistory() {
    setShowHistory(!showHistory);
  }

  function clearHistory() {
      setHistory([]);
      localStorage.removeItem('history');
  }

  return (
    <div className="numgenerator">
      <div className="container">
        <div className="eurojackpot-generator">
          <button className="generate-button" onClick={generateNumbers}>
            Generálás
          </button>
            <div>
              <h3 className="numbers-heading">Főszámok:</h3>
              <ul className="numbers-list">
                {mainNumbers.map((number) => (
                  <li className="number" key={number}>
                    {number}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="numbers-heading">Euro számok:</h3>
              <ul className="numbers-list">
                {euroNumbers.map((number) => (
                  <li className="number" key={number}>
                    {number}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Buttons 
                clearHistory={clearHistory}
                toggleShowHistory={toggleShowHistory}
              />
            </div>
          </div>
            <Cards
              history={history}
              showHistory={showHistory}
              toggleShowHistory={toggleShowHistory}
              clearHistory={clearHistory}
            />
      </div>
    </div>
  );
}