import React from "react";
import "../Articles.css";

function PostData({ data }) {
  return (
    <div className="articlePostData">
      <div className="">
        Date :<span>{data.date}</span>
      </div>
      <div className="">
        Author:
        <span>{data.author}</span>
      </div>
    </div>
  );
}
export default PostData;
