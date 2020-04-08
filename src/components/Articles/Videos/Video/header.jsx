import React from "react";
import TeamInfo from "../../Elements/TeamInfo";
export default function Header({ teamData }) {
  const TeamIn = (team) => {
    return team ? <TeamInfo team={team} /> : null;
  };
  return <div>{TeamIn(teamData)}</div>;
}
