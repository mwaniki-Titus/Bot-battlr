import React, { useState, useEffect } from 'react';
import './App.css';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';

function App (){
  const [enlistedBots, setEnlistedBots] = useState([]);
  const [bots, setBots] = useState([]);

  useEffect (() => {
    fetch("http://localhost:8001/bots")
    .then((response) => response.json())
    .then((data) => setBots(data))
    .catch((error) => console.error('Error fetching data:',error));

  }, []);
  return (
    <div className='App'>
      <h1>Bot Battlr</h1>
      <div className='container'>
        <YourBotArmy/>
           
      </div>

    </div>
  );
}

export default App;




