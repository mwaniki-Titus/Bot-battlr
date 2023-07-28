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

  const handleEnlist = (bot) => {
    if (!enlistedBots.includes(bot)) {
      setEnlistedBots([...enlistedBots,bot]);
    }
  };
  const handleRelease = (bot) => {
    const updatedEnlistedBots = enlistedBots.filter((b) => b.id !== bot.id);
    setEnlistedBots(updatedEnlistedBots);
  };
  const handleDischarge = (bot) => {
    fetch(`http://localhost:8001/bots/${bot.id}`,{
      method:'DELETE',
    })
      .then((response) => response.json())
      .then(() => {
        const updatedBots = bots.filter((b) => b.id !== bot.id);
        setBots(updatedBots)
      })
      .catch((error) => console.error('error discharging bot:', error));
    };

  return (
    <div className='App'>
      <h1>Bot Battlr</h1>
      <div className='container'>
        <BotCollection bots={bots} onEnlist={handleEnlist}/>
        <YourBotArmy
          enlistedBots={enlistedBots}
          onRelease={handleRelease}
          onDischarge={handleDischarge}/>
           
      </div>
    </div>
  );
}

export default App;




