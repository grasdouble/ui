import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import BookmarksIcon from "@material-ui/icons/Bookmarks";
import InsertChartIcon from "@material-ui/icons/InsertChart";
import DraftsIcon from "@material-ui/icons/Drafts";
import MenuBookIcon from '@material-ui/icons/MenuBook';

import config from "./config.json";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
});

const mapIcons = new Map([
  ["aboutme", <AccountCircleIcon />],
  ["background", <BookmarksIcon />],
  ["skills", <InsertChartIcon />],
  ["contactme", <DraftsIcon />],
  ["diary", <MenuBookIcon />],
]);

interface MyProps {
  sidepanelState: boolean;
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

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      sidepanelFct(open);
    };

  return (
    <div>
      <React.Fragment>
        <Drawer
          anchor="left"
          open={sidepanelState}
          onClose={toggleDrawer(false)}
        >
          <div
            className={clsx(classes.list)}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <List>
              {config.map((item) => (
                <ListItem
                  button
                  key={item.key}
                  selected={item.key === pageState}
                  onClick={() => pageFct(item.key)}
                >
                  <ListItemIcon>{mapIcons.get(item.key)}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItem>
              ))}
            </List>
            <Divider />
          </div>
        </Drawer>
      </React.Fragment>
    </div>
  );
};

export default SidePanel;
