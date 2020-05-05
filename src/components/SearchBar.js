import React, { Component } from "react";
import { Button, TextField } from "@material-ui/core";

class SearchBar extends Component {
  state = {
    term: "",
  };

  onInputChange = (e) => {
    this.setState({ term: e.target.value });
  };

  onFormSubmit = (e) => {
    console.log("Search Button Submitted");
    e.preventDefault();
    //* passed in from props
    this.props.onTermSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          {/* <form className={classes.root} noValidate autoComplete="off">  */}
          <TextField
            id="standard-basic"
            label="Enter Search Text"
            required={true}
            onChange={this.onInputChange}
            value={this.state.term}
          />
          <Button
            variant="contained"
            type="submit"
            color="primary"
            style={{ marginTop: "20px", marginLeft: "20px" }}
          >
            Search
          </Button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
