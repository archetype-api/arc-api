import React from "react";
import Caregiver from "../images/Caregiver.PNG";
import Creator from "../images/Creator.PNG";
import Explorer from "../images/Explorer.PNG";
import Hero from "../images/Hero.PNG";
import Innocent from "../images/innocent.PNG";
import Jester from "../images/Jester.PNG";
import Lover from "../images/Lover.PNG";
import Magician from "../images/Magician.PNG";
import Everyperson from "../images/Orphan.PNG";
import Revolutionary from "../images/Revolutionary.PNG";
import Ruler from "../images/Ruler.PNG";
import Sage from "../images/Sage.PNG";
import { withStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)"
  },
  title: {
    color: theme.palette.primary.light
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"
  }
});

const tileData = [
  {
    img: Caregiver,
    title: "Caregiver"
  },
  {
    img: Creator,
    title: "Creator"
  },
  {
    img: Explorer,
    title: "Explorer"
  },
  {
    img: Hero,
    title: "Hero"
  },
  {
    img: Innocent,
    title: "Innocent"
  },
  {
    img: Jester,
    title: "Jester"
  },
  {
    img: Lover,
    title: "Lover"
  },
  {
    img: Magician,
    title: "Magician"
  },
  {
    img: Everyperson,
    title: "Everyperson"
  },
  {
    img: Revolutionary,
    title: "Revolutionary"
  },
  {
    img: Ruler,
    title: "Ruler"
  },
  {
    img: Sage,
    title: "Sage"
  }
];
const Images = props => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={12}>
        {tileData.map(tile => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              classes={{
                root: classes.titleBar,
                title: classes.title
              }}
              actionIcon={
                <IconButton>
                  <StarBorderIcon className={classes.title} />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

export default withStyles(styles)(Images);
