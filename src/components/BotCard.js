import React from "react";

const BotCard = ({}) => {
  return(
    <div>
      <img src={bot.avatar_url} alt={BotCard.name}/>
      <h3>{bot.name}</h3>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
    </div>
  );
};

export default BotCard;