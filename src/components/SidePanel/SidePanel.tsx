import React from "react";
import clsx from "clsx";
import {
  createStyles,
  makeStyles,
  useTheme,
  Theme,
} from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import BookmarksIcon from "@material-ui/icons/Bookmarks";
import InsertChartIcon from "@material-ui/icons/InsertChart";
import DraftsIcon from "@material-ui/icons/Drafts";

import config from "./config.json";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: "nowrap",
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: "hidden",
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9) + 1,
      },
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
    },
  })
);

const mapIcons = new Map([
  ["aboutme", <AccountCircleIcon />],
  ["background", <BookmarksIcon />],
  ["skills", <InsertChartIcon />],
  ["contactme", <DraftsIcon />],
]);

interface MyProps {
  sidepanelState: Boolean;
  sidepanelFct: Function;
  pageState: String;
  pageFct: Function;
}

const SidePanel: React.FunctionComponent<MyProps> = ({
  sidepanelState,
  sidepanelFct,
  pageState,
  pageFct,
}) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.root}>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: sidepanelState,
          [classes.drawerClose]: !sidepanelState,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: sidepanelState,
            [classes.drawerClose]: !sidepanelState,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={() => sidepanelFct(false)}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {config.map((item) => (
            <ListItem button key={item.key} selected={item.key === pageState} onClick={() => pageFct(item.key)} >
              <ListItemIcon>{mapIcons.get(item.key)}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
    </div>
  );
};

export default SidePanel;
