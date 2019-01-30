import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit * 2
  }
});

const Intro = props => {
  const { classes } = props;
  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="h5" component="h3">
          Introduction
        </Typography>
        <Typography component="p">
          Arc API is a tool for constructing narratives. The system is based on
          the 12 Jungian Archetypes, described as "universal, archaic patterns
          that derive from the collective unconscious". <br />
          Use this tool to balance personalities, choose the perfect villain,
          and organize a diverse team of allies. Click on a type below to start.
        </Typography>
      </Paper>
    </div>
  );
};

export default withStyles(styles)(Intro);
