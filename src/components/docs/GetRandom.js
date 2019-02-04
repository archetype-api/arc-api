import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import axios from "axios";
import Example from "./Example";
import Button from "@material-ui/core/Button";
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
  button: {
    marginLeft: theme.spacing.unit * 3
  },
  details: {
    margin: theme.spacing.unit * 5
  }
});

class GetRandom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.getRandom();
  }

  getRandom = () => {
    axios
      .get(`/api/types/random`)
      .then(response => this.setState({ data: response.data }))
      .catch(err => console.log(err));
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root} id="getRandom">
        <Typography variant="h3" color="primary" className={classes.title}>
          Get Random Archetype
          <Button
            variant="contained"
            className={classes.button}
            color="primary"
            onClick={this.getRandom}
          >
            Random
          </Button>
        </Typography>
        <ExpansionPanel defaultExpanded={true}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Description</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>Get a random archetype object.</Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Example</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Paper className={classes.details} elevation={0}>
              <Typography>
                GET:
                <br />
                "baseURL/api/types/random"
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

export default withStyles(styles)(GetRandom);
