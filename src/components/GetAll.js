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
  container: {
    display: "flex"
  },
  details: {
    margin: theme.spacing.unit * 5
  }
});

class GetAll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.getAll();
  }

  getAll = () => {
    axios
      .get("/api/types")
      .then(response => this.setState({ data: response.data }))
      .catch(err => console.log(err));
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Typography variant="h3" color="primary" className={classes.title}>
          Get All
        </Typography>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Description</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>Returns all 12 basic archetype objects.</Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Example</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.container}>
            <Paper className={classes.details} elevation={0}>
              <Typography>
                GET:
                <br />
                "baseURL/api/types"
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
              <Example data={this.state.data && this.state.data} />
            </Paper>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

export default withStyles(styles)(GetAll);
