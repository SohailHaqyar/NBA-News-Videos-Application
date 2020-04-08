import React from "react";
import "./CardInfo.css";
import FontAwesome from "react-fontawesome";
function CardInfo({ date, team, teams }) {
  const teamName = (teams, team) => {
    let data = teams.find((item) => item.id === team);
    if (data) {
      return data.name;
    }
  };
  return (
    <div className="cardInfo">
      <span className="teamName">
        {teamName(teams, team)}
      </span>
      <span className="date">
        <FontAwesome name="clock-o" />
        12/120
      </span>
    </div>
  );
}

export default CardInfo;
