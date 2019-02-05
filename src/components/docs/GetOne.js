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
    width: "80vw",
    padding: theme.spacing.unit * 3
  },
  title: {
    padding: theme.spacing.unit
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  },
  details: {
    margin: theme.spacing.unit * 3
  }
});

class GetOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.getOne();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.theme !== this.props.theme) {
      this.getOne();
    }
  }

  getOne = () => {
    axios
      .get(`/api/types/name/${this.props.theme}`)
      .then(response => this.setState({ data: response.data }))
      .catch(err => console.log(err));
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root} id="getOne">
        <Typography variant="h3" color="primary" className={classes.title}>
          Get One - {this.props.theme}
        </Typography>
        <ExpansionPanel defaultExpanded={true}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Description</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            {this.state.data.types && (
              <Typography>
                The {this.state.data.types.hero.name} is driven to{" "}
                {this.state.data.types.hero.drive}. He/she accomplishes this
                through the method of {this.state.data.types.hero.method}.
                His/her role is that of the {this.state.data.types.hero.role}{" "}
                and his/her story represents the aspect of the{" "}
                {this.state.data.types.hero.aspect}. The{" "}
                {this.state.data.types.hero.name}, also known as{" "}
                {this.state.data.types.hero.alias}, must be careful of falling
                into their shadow and {this.state.data.types.hero.shadow}.
              </Typography>
            )}
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
                {`baseURL/api/types/name/${this.props.theme.toLowerCase()}`}
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
        <div id="shadow" />
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Shadow</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            {this.state.data.types && (
              <Typography>
                The shadow of the {this.state.data.types.hero.name} is{" "}
                {this.state.data.types.hero.shadow}
              </Typography>
            )}
          </ExpansionPanelDetails>
          <div id="opp" />
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Opponents</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            {this.state.data.types && (
              <Example data={this.state.data.types.opponents} />
            )}
          </ExpansionPanelDetails>
          <div id="allies" />
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Allies</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            {this.state.data.types && (
              <Example data={this.state.data.types.allies} />
            )}
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

export default withStyles(styles)(GetOne);
