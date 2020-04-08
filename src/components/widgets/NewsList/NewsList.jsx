import React, { Component } from "react";
import "./NewsList.css";
import { URL } from "../../../config";
import Button from "../Buttons/Buttons";
import {
  CSSTransition,
  TransitionGroup,
} from "react-transition-group";
import CardInfo from "../../widgets/CardInfo/CardInfo";
import { Link } from "react-router-dom";
import axios from "axios";
class NewsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      teams: [],
      items: [],
      start: this.props.start,
      end: this.props.start + this.props.amount,
      amount: this.props.amount,
    };
  }
  UNSAFE_componentWillMount() {
    this.request(this.state.start, this.state.end);
  }
  request = (start, end) => {
    if (this.state.teams.length < 1) {
      axios
        .get(`${URL}/teams`)
        .then((res) => this.setState({ teams: res.data }));
    }
    axios
      .get(`${URL}/articles?_start=${start}&_end=${end}`)
      .then((res) =>
        this.setState({
          items: [...this.state.items, ...res.data],
          start,
          end,
        })
      );
  };
  renderNews = (type) => {
    let template;
    switch (type) {
      case "card":
        template = this.state.items.map((item, i) => (
          <CSSTransition
            classNames={{
              enter: "newslist_wrapper",
              enterActive: "newslist_wrapper_enter",
            }}
            timeout={500}
            key={i}
          >
            <div className="newslist_item">
              <Link to={`/articles/${item.id}`}>
                <CardInfo
                  teams={this.state.teams}
                  team={item.team}
                  date={item.date}
                />
                <h2>{item.title}</h2>
              </Link>
            </div>
          </CSSTransition>
        ));
        break;
      case "cardMain":
        template = this.state.items.map((item, i) => (
          <CSSTransition
            classNames={{
              enter: "newslist_wrapper",
              enterActive: "newslist_wrapper_enter",
            }}
            timeout={500}
            key={i}
          >
            <Link to={`/articles/${item.id}`}>
              <div className="flex_wrapper">
                <div
                  className="left_news"
                  style={{
                    background: `url('/images/articles/${item.image}')`,
                  }}
                >
                  <div></div>
                </div>
                <div className="right">
                  <CardInfo
                    teams={this.state.teams}
                    team={item.team}
                    date={item.date}
                  />
                  <h2>{item.title}</h2>
                </div>
              </div>
            </Link>
          </CSSTransition>
        ));
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
  render() {
    return (
      <div>
        <TransitionGroup component="div" className="list">
          {this.renderNews(this.props.type)}
        </TransitionGroup>
        <Button
          type="loadmore"
          loadMore={this.loadMore}
          cta="Load More News"
        />
      </div>
    );
  }
}
export default NewsList;
