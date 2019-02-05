import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  head: {
    fontSize: "1.5em",
    textDecoration: "underline"
  },
  sub: {
    fontSize: ".75em",
    textDecoration: "underline"
  },
  ripple: {
    background: "white"
  }
});

class SideNav extends Component {
  constructor() {
    super();
    this.state = {
      labels: [
        { text: "Introduction", link: "intro", tag: "head" },
        { text: "Reference", link: "reference", tag: "head" },
        { text: "Get All", link: "getAll", tag: "head" },
        { text: "Get One", link: "getOne", tag: "head" },
        { text: "Shadow", link: "shadow", tag: "sub" },
        { text: "Opponents", link: "opp", tag: "sub" },
        { text: "Allies", link: "allies", tag: "sub" },
        { text: "Get Random", link: "getRandom", tag: "head" },
        { text: "Get Dual", link: "getDual", tag: "head" },
        { text: "Get Drama", link: "getDrama", tag: "head" },
        { text: "Common", link: "common", tag: "sub" },
        { text: "Uncommon", link: "uncommon", tag: "sub" }
      ]
    };
  }

  render() {
    const classes = this.props;
    return (
      <List>
        {this.state.labels.map((e, i) => (
          <Link
            key={i}
            to={`/#${e.link}`}
            scroll={el =>
              el.scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "start"
              })
            }
          >
            <ListItem button disableTouchRipple divider alignItems={`center`}>
              <ListItemText primary={e.text} className={classes[e.tag]} />
            </ListItem>
          </Link>
        ))}
      </List>
    );
  }
}

export default withStyles(styles, { withTheme: true })(SideNav);
