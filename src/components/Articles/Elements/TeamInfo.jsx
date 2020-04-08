import React from "react";
import "../Articles.css";
const TeamInfo = ({ team }) => (
  <div className="articleTeamHeader">
    <div
      className="left"
      style={{
        background: `url('/images/teams/${team.logo}')`,
      }}
    ></div>
    <div className="right">
      <div className="">
        <span>
          {team.city} {team.name}
        </span>
        <div className="">
          <strong>
            W{team.stats[0].wins}-L{team.stats[0].defeats}
          </strong>
        </div>
      </div>
    </div>
  </div>
);
export default TeamInfo;
