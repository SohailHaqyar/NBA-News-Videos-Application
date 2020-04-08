import React from "react";
import NewsSlider from "../widgets/NewsSlider/Slider";
import NewsList from "../widgets/NewsList/NewsList";
import VideoList from "../widgets/VideoList/VideoList";
function Home() {
  return (
    <div>
      <NewsSlider
        type="featured"
        start={3}
        amount={6}
        settings={{
          dots: false,
        }}
      />
      <NewsList
        type="card"
        loadmore={true}
        start={3}
        amount={3}
      />
      <VideoList
        type="card"
        title={true}
        loadmore={true}
        start={0}
        amount={3}
      />
    </div>
  );
}
export default Home;
