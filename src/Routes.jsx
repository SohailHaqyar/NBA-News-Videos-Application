import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/home/Home";
import Layout from "./hoc/Layout/Layout";
import VideoArticle from "./components/Articles/Videos/Video/index";
import NewsArticle from "./components/Articles/News/Post/index";
import NewsMain from "./components/Articles/News/Main/index";
import Videos from "./components/Articles/Videos/Main/VideosMain";
class Routes extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/videos" exact component={Videos} />
          <Route path="/news" exact component={NewsMain} />
          <Route
            path="/videos/:id"
            exact
            component={VideoArticle}
          />
          <Route
            path="/articles/:id"
            exact
            component={NewsArticle}
          />
        </Switch>
      </Layout>
    );
  }
}
export default Routes;
