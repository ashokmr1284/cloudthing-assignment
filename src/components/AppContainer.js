import React, { Component } from "react";

import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

import gaurdianAPI from "../apis/gaurdian";

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
    };
  }

  componentDidMount = () => {
    //this.onTermSubmit("modi");
  };
  onTermSubmit = async (term) => {
    const response = await gaurdianAPI.get("/search?api-key=test", {
      params: {
        q: term,
        "show-fields": "thumbnail,headline",
        "show-tags": "keyword",
        page: 1,
        "page-size": 10,
      },
    });

    this.setState(
      {
        results: response.data.response.results,
      },
      () => {
        console.log("this.state.results", this.state.results);
      }
    );
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="wide column">
              <SearchResults results={this.state.results} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AppContainer;
