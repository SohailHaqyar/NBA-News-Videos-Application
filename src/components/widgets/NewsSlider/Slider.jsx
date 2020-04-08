import React, { Component } from "react";
import axios from "axios";
import SliderTemplate from "./slider_templates";
export default class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      news: [],
    };
  }
  UNSAFE_componentWillMount() {
    axios
      .get(
        `http://localhost:3004/articles?_start=${this.props.start}&_end=${this.props.amount}`
      )
      .then((res) => this.setState({ news: res.data }));
  }

  render() {
    console.log(this.state.news);
    return (
      <SliderTemplate
        type={this.props.type}
        data={this.state.news}
        settings={this.props.settings}
      />
    );
  }
}
