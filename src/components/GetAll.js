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

const styles = theme => ({
  root: {
    width: "100%",
    padding: theme.spacing.unit * 3
  },
  title: {
    padding: theme.spacing.unit * 3
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
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
        <Typography
          variant="display2"
          color="primary"
          className={classes.title}
        >
          Get All
        </Typography>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Description</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Example</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              <Example data={this.state.data && this.state.data} />
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

export default withStyles(styles)(GetAll);
