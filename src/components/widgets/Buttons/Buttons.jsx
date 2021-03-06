import React from "react";
import { Link } from "react-router-dom";
import "./Buttons.css";
function Button(props) {
  let template;
  switch (props.type) {
    case "loadmore":
      template = (
        <div className="blue_btn" onClick={props.loadMore}>
          {props.cta}
        </div>
      );
      break;
    case "linkTo":
      template = (
        <Link to={props.linkTo} className="blue_btn">
          {props.cta}
        </Link>
      );
      break;
    default:
      template = null;
      break;
  }

  return template;
}

export default Button;
