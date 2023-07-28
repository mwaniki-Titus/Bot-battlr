import React, { useState, useEffect } from 'react';
import './App.css';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';

function App (){
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




