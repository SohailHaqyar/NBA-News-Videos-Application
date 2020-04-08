import React, { Component } from "react";
import "./VideoList.css";
import axios from "axios";
import { URL } from "../../../config";
import Button from "../Buttons/Buttons";
import VideoTemplate from "./VideoTemplate";
class VideoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      teams: [],
      videos: [],
      start: this.props.start,
      end: this.props.start + this.props.amount,
      amount: this.props.amount,
    };
  }
  componentWillMount() {
    this.request(this.state.start, this.state.end);
  }

  request = (start, end) => {
    if (this.state.teams.length < 1) {
      axios
        .get(`${URL}/teams`)
        .then((res) => this.setState({ teams: res.data }));
    }
    axios
      .get(`${URL}/videos?_start=${start}&_end=${end}`)
      .then((res) =>
        this.setState({
          videos: [...this.state.videos, ...res.data],
          start,
          end,
        })
      );
  };
  renderVideos = () => {
    let template;
    switch (this.props.type) {
      case "card":
        template = (
          <VideoTemplate
            data={this.state.videos}
            teams={this.state.teams}
          />
        );
        break;

      default:
        template = null;
        break;
    }
    return template;
  };
  loadMore = () => {
    let end = this.state.end + this.state.amount;
    this.request(this.state.end, end);
  };
  renderButton = () => {
    return this.props.loadmore ? (
      <Button
        type="loadmore"
        loadMore={this.loadMore}
        cta="Load More Videos"
      />
    ) : (
      <Button
        type="linkTo"
        cta="More Videos"
        linkTo="/videos"
      />
    );
  };
  renderTitle = () => {
    return this.props.title ? (
      <h3>
        <strong>NBA Videos</strong>
      </h3>
    ) : null;
  };
  render() {
    console.log(this.state.videos);
    return (
      <div className="videoList_wrapper">
        {this.renderTitle()}
        {this.renderVideos()}
        {this.renderButton()}
      </div>
    );
  }
}
export default VideoList;
