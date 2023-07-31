import React, { useState, useEffect } from 'react';
import BotCard from './BotCard';
import SortBar from './SortBar';

const BotCollection = ({ bots, onEnlist }) => {
  const [sortedBots, setSortedBots] = useState([]);
  const [sortOption, setSortOption] = useState(null);

  useEffect(() => {
    // display the bots as they are without sorting
    setSortedBots(bots);
  }, [bots]);

  const handleSort = (option) => {
   
    if (sortOption === option) {
      setSortedBots([...sortedBots.reverse()]);
    } else {
      setSortedBots([...bots.sort((a, b) => b[option] - a[option])]);
    }
    
    setSortOption(option);
  };

  return (
    <div className="bot-collection">
      <h2>All Bots</h2>
      <SortBar onSort={handleSort} />
      <div className="bot-cards">
        {sortedBots.map((bot) => (
          <BotCard key={bot.id} bot={bot} onEnlist={() => onEnlist(bot)} />
        ))}
      </div>
    </div>
  );
};

export default BotCollection;
