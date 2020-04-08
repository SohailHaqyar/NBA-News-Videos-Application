import React from "react";
import "./VideoList.css";
import { Link } from "react-router-dom";
import CardInfo from "../CardInfo/CardInfo";
function VideoTemplate(props) {
  return props.data.map((item, i) => (
    <Link to={`/videos/${item.id}`} key={i}>
      <div className="videoListItem_wrapper">
        <div
          className="left_videos"
          style={{
            background: `url(/images/videos/${item.image})`,
          }}
        >
          <div className=""></div>
        </div>
        <div className="right_videos">
          <CardInfo
            teams={props.teams}
            team={item.team}
            date={item.date}
          />
          <h2>{item.title}</h2>
        </div>
      </div>
    </Link>
  ));
}
export default VideoTemplate;
