import React, { Component } from "react";
import "./styles/App.css";
import Main from "./components/layout/Main";
import { MuiThemeProvider } from "@material-ui/core";
import {
  Caregiver,
  Creator,
  Explorer,
  Hero,
  Innocent,
  Jester,
  Lover,
  Magician,
  Everyperson,
  Revolutionary,
  Ruler,
  Sage
} from "./styles/themes";

class App extends Component {
  constructor() {
    super();
    this.state = {
      theme: "Everyperson"
    };
  }

  switchTheme = theme => this.setState({ theme: theme });

  render() {
    let themeSwitch = (function(theme) {
      switch (theme) {
        case "Caregiver":
          return Caregiver;
        case "Creator":
          return Creator;
        case "Explorer":
          return Explorer;
        case "Hero":
          return Hero;
        case "Innocent":
          return Innocent;
        case "Jester":
          return Jester;
        case "Lover":
          return Lover;
        case "Magician":
          return Magician;
        case "Everyperson":
          return Everyperson;
        case "Revolutionary":
          return Revolutionary;
        case "Ruler":
          return Ruler;
        case "Sage":
          return Sage;
        default:
          return Hero;
      }
    })(this.state.theme);
    return (
      <MuiThemeProvider theme={themeSwitch}>
        <div>
          <Main theme={this.state.theme} switchTheme={this.switchTheme} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
