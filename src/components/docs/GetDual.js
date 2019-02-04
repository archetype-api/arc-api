import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import axios from "axios";
import Example from "./Example";
import Paper from "@material-ui/core/Paper";
import Selector from "../layout/Select";

const suggestions = [
  { label: "Caregiver" },
  { label: "Creator" },
  { label: "Explorer" },
  { label: "Hero" },
  { label: "Innocent" },
  { label: "Jester" },
  { label: "Lover" },
  { label: "Magician" },
  { label: "Everyperson" },
  { label: "Revolutionary" },
  { label: "Ruler" },
  { label: "Sage" }
].map(suggestion => ({
  value: suggestion.label,
  label: suggestion.label
}));

const styles = theme => ({
  root: {
    width: "100%",
    padding: theme.spacing.unit * 3
  },
  title: {
    padding: theme.spacing.unit
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  },
  button: {
    marginLeft: theme.spacing.unit * 3
  },
  details: {
    margin: theme.spacing.unit * 5
  }
});

class GetDual extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      queries: [],
      multi: ""
    };
  }

  componentDidMount() {
    this.getDual();
  }

  getDual = () => {
    axios
      .get(`/api/types/dual?primary=`)
      .then(response => this.setState({ data: response.data }))
      .catch(err => console.log(err));
  };

  handleChange = name => value => {
    this.setState({
      [name]: value
    });
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root} id="getRandom">
        <Typography variant="h3" color="primary" className={classes.title}>
          Get Dual Archetype
        </Typography>
        <ExpansionPanel defaultExpanded={true}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Description</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Create a combination of two types by using query parameters.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <Selector suggestions={suggestions} handleChange={this.handleChange} />
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Example</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Paper className={classes.details} elevation={0}>
              <Typography>
                GET:
                <br />
                {"baseURL/api/dual?primary=type&secondary=type"}
                <br />
                <br /> Response:
                <br /> 200
                <br />
                <br /> Headers:
                <br />
                Content-Type: application/json
              </Typography>
            </Paper>
            <Paper className={classes.details} elevation={0}>
              <Typography>Body: </Typography>
              <Example data={this.state.data} />
            </Paper>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

export default withStyles(styles)(GetDual);
