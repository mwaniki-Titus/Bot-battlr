import React from "react";
import BotCard from "./BotCard";

const YourBotArmy =({enlistedBots, onRealease, onDischarge}) => {

return (

  <div className="your-bot-army">
    <h2>Your Bot Army</h2>
    <div className="bot-cards">
      {enlistedBots.map((bot) => (
        <div key={bot.id} className="bot-card">
          <button className="realease-btn" onClick={() => onDischarge(bot)}>
             x
            </button>
            <BotCard bot={bot} onEnlist={() => onRealease(bot)} />
          </div>
      ))}

    </div>
  </div>
 );
};
export default YourBotArmy;
