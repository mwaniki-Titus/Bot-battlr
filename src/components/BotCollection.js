import React from "react";
import BotCard from "./BotCollection";

const BotCollection = ({bots,}) => {
  return (
    <div className="bot-collection">
      <h2>All Bots</h2>
      <div className="bot-cards">
        {bots.map((bot)=>(
          <BotCard key={bot.id} bot={bot} onEnlist={() => onEnlist(bot)} />
        ))}
      </div>
    </div>
  );
};

export default BotCollection;