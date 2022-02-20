import React, { Component } from "react";

export default class Singlemovie extends Component {
  render() {
    let { watchProvider} = this.props;
    return (
      <div>
        <a href={watchProvider}
          rel="noreferrer"
          target="_blank"
          className="btn btn-sm btn-dark py-2">
          Checkout Movie
        </a>
        </div>
    );
  }
}
