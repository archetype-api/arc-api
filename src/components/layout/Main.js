import React from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Button from "@material-ui/core/Button";
import GetAll from "../reference/GetAll";
import GetOne from "../reference/GetOne";
import GetRandom from "../reference/GetRandom";
import { types } from "../../styles/colors";
import git from "../../images/github.png";
import Intro from "./Intro";
import swordblack from "../../images/swordblack.png";
import SideNav from "./SideNav";

const drawerWidth = 200;

const styles = theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
    height: "2vh"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  },
  button: {
    margin: theme.spacing.unit / 3
  },
  caregiver: {
    background: "#f16548"
  },
  git: {
    height: "6vh",
    width: "6vh",
    marginLeft: "1vw"
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between"
  },
  link: {
    display: "flex",
    textDecoration: "none"
  },
  linktext: {
    color: "white",
    paddingTop: "1vh",
    textDecoration: "underline"
  },
  logo: {
    height: "6vh",
    width: "6vh",
    marginRight: "1vw",
    paddingTop: ".5vh"
  },
  createdby: {
    paddingLeft: "1vw",
    fontSize: "1.25em",
    textDecoration: "underline"
  },
  authorlink: {
    fontSize: ".75em",
    color: theme.palette.primary.main
  }
});

class Main extends React.Component {
  constructor() {
    super();
    this.state = { open: true };
  }

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, theme } = this.props;
    const { open } = this.state;
    let buttonDisplay = types.map((e, i) => {
      return (
        <Button
          key={i}
          onClick={() => this.props.switchTheme(e.name)}
          variant="contained"
          style={e.style}
          className={classes.button}
        >
          {e.name}
        </Button>
      );
    });

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open
          })}
        >
          <Toolbar className={classes.toolbar} disableGutters={!open}>
            <Typography variant="h5" color="inherit" noWrap>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={this.handleDrawerOpen}
                className={classNames(classes.menuButton, open && classes.hide)}
              >
                <MenuIcon />
              </IconButton>

              <a
                href="https://github.com/archetype-api/arc-api"
                target="_blank"
                rel="noopener noreferrer"
                className={this.state.open ? classes.link : classes.hide}
              >
                <img src={swordblack} alt="logo" className={classes.logo} />
                <Typography variant="h5" className={classes.linktext}>
                  Arc API
                </Typography>
              </a>
            </Typography>
            <a
              href="https://github.com/archetype-api/arc-api"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.link}
            >
              <Typography variant="h5" className={classes.linktext}>
                <em>Find us on Github</em>
              </Typography>
              <img src={git} className={classes.git} alt="github" />
            </a>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          <SideNav />

          <Divider />
          <List>
            <Typography className={classes.createdby}>
              <em>Created by:</em>
            </Typography>
            <ListItem>
              <ListItemIcon>
                <AccountCircleIcon />
                <div>
                  <Typography className="name">Emmanuel Bravo</Typography>
                  <a
                    className={classes.authorlink}
                    href="https://github.com/khamwas"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github.com/khamwas
                  </a>
                </div>
              </ListItemIcon>
              <ListItemText />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <AccountCircleIcon />
                <div>
                  <Typography className="name">James Sheehan</Typography>
                  <a
                    className={classes.authorlink}
                    href="https://github.com/jmsdevx"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github.com/jmsdevx
                  </a>
                </div>
              </ListItemIcon>
              <ListItemText />
            </ListItem>
          </List>
        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open
          })}
        >
          <div className={classes.drawerHeader} />
          {/* <Images /> not ready */}
          <Intro />
          <div id="reference" />
          <div id="getAll" />
          {buttonDisplay}
          <GetAll theme={this.props.theme} />
          <GetOne theme={this.props.theme} />
          <GetRandom theme={this.props.theme} />
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Main);
