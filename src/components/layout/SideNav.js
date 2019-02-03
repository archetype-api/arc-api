import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

class SideNav extends Component {
  constructor() {
    super();
    this.state = {
      labels: [
        { text: "Introduction", link: "intro" },
        { text: "Reference", link: "reference" },
        { text: "Get All", link: "getAll" },
        { text: "Get One", link: "getOne" },
        { text: "Shadow", link: "shadow" },
        { text: "Opponents", link: "opp" },
        { text: "Allies", link: "allies" },
        { text: "Get Random", link: "getRandom" },
        { text: "Get Dual", link: "getDual" },
        { text: "Get Scenario", link: "getScenario" }
      ]
    };
  }

  render() {
    return (
      <List>
        {this.state.labels.map((e, i) => (
          <Link
            to={`/#${e.link}`}
            scroll={el =>
              el.scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "start"
              })
            }
          >
            <ListItem button key={e.text}>
              {/* <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon> */}
              <ListItemText primary={e.text} />
            </ListItem>
          </Link>
        ))}
      </List>
    );
  }
}

export default SideNav;
