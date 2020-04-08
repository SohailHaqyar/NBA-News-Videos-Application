import React, { Component } from "react";
import axios from "axios";
import { URL } from "../../../../config";
import Header from "./header";
import "../../Articles.css";
class NewsArticles extends Component {
  constructor(props) {
    super(props);

    this.state = {
      article: [],
      team: [],
    };
  }
  componentWillMount() {
    axios
      .get(
        `${URL}/articles?id=${this.props.match.params.id}`
      )
      .then((res) => {
        let article = res.data[0];
        axios
          .get(`${URL}/teams?id=${article.team}`)
          .then((res) =>
            this.setState({ article, team: res.data })
          );
      });
  }

  render() {
    const { article, team } = this.state;
    console.log(this.state);
    return (
      <div className="articleWrapper">
        <Header
          teamData={team[0]}
          date={article.date}
          author={article.author}
        />
        <div className="articleBody">
          <h1>{article.title}</h1>
          <div
            className="articleImage"
            style={{
              background: `url('/images/articles/${article.image}')`,
            }}
          ></div>
          <div className="articleText">{article.body}</div>
        </div>
      </div>
    );
  }
}
export default NewsArticles;
