import React from "react";
import "../VideoList.css";
import VideoListTemplate from "../VideoTemplate";
const RelatedVideos = ({ teams, data }) => (
  <div className="relatedWrapper">
    <VideoListTemplate data={data} teams={teams} />
  </div>
);

export default RelatedVideos;
 