import React, { Component } from "react";
import { URL } from "../../../../config";
import axios from "axios";
import "../../Articles.css";
import Header from "./header";
import RelatedVideos from "../../../widgets/VideoList/videosRelated/videosRelated";
export default class VideoArticle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      article: [],
      team: [],
      teams: [],
      related: [],
    };
  }
  componentWillMount() {
    axios
      .get(`${URL}/videos?id=${this.props.match.params.id}`)
      .then((res) => {
        let article = res.data[0];
        axios
          .get(`${URL}/teams?id=${article.team}`)
          .then((res) => {
            this.setState({ article, team: res.data });
            this.getRelated();
          });
      });
  }
  getRelated = () => {
    console.log(this.state);
    axios.get(`${URL}/teams`).then((res) => {
      let teams = res.data;
      axios
        .get(
          `${URL}/videos?q=${this.state.team[0].city}&_limit=3`
        )
        .then((res) =>
          this.setState({ teams, related: res.data })
        );
    });
  };
  render() {
    const { article, team } = this.state;
    console.log(this.state);
    return (
      <div>
        <Header teamData={team[0]} />
        <div className="videoWrapper">
          <h1>{article.title}</h1>
          <iframe
            src={`https://www.youtube.com/embed/${article.url}`}
            frameborder="0"
            width="100%"
            height="300px"
          ></iframe>
        </div>
        <RelatedVideos
          data={this.state.related}
          teams={this.state.teams}
        />
      </div>
    );
  }
}
