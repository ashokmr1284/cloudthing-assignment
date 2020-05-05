import React, { Component } from "react";
import AppContainer from "./components/AppContainer";
import "./App.css";
import { Grid, Paper, Box, Typography, Card } from "@material-ui/core";

class App extends Component {
  render() {
    return (
      <Grid container spacing={3}>
        <Grid item xs></Grid>
        <Grid item xs={8}>
          <Typography
            variant="h3"
            component="h4"
            align="center"
            style={{ margin: "20px 0" }}
          >
            News Lister
          </Typography>
        </Grid>
        <Grid item xs></Grid>

        <AppContainer />
      </Grid>
    );
  }
}

export default App;
