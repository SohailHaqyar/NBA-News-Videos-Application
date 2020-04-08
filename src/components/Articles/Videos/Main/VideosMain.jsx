import React from "react";
import VideoList from "../../../widgets/VideoList/VideoList";
export default function VideosMain() {
  return (
    <VideoList
      type="card"
      title={false}
      loadmore={true}
      start={0}
      amount={10}
    />
  );
}
