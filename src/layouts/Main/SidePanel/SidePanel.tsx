import React from "react";
import clsx from "clsx";

import { Link as LinkRouter, useLocation } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import BookmarksIcon from "@material-ui/icons/Bookmarks";
import InsertChartIcon from "@material-ui/icons/InsertChart";
import DraftsIcon from "@material-ui/icons/Drafts";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import AccountTreeOutlinedIcon from "@material-ui/icons/AccountTreeOutlined";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

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
  ["logbook", <MenuBookIcon />],
  ["projects", <AccountTreeOutlinedIcon />],
]);

interface MyProps {
  sidepanelState: boolean;
  sidepanelFct: Function;
}

const SidePanel: React.FunctionComponent<MyProps> = ({
  sidepanelState,
  sidepanelFct,
}) => {
  const classes = useStyles();
  const location = useLocation();

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

  const CustomLink = (path: string, props: any) => {
    return <LinkRouter to={path} {...props} />;
  };

  const nestedList = (items: any[]) => {
    const result: JSX.Element[] = [];
    if (items.length > 0) {
      items.forEach((nestedItem: any) => {
        result.push(
          <ListItem
            button
            key={nestedItem.key}
            selected={nestedItem.path === location.pathname}
            component={(props) => CustomLink(nestedItem.path, props)}
          >
            <ListItemIcon>{mapIcons.get(nestedItem.key)}</ListItemIcon>
            <ListItemText primary={nestedItem.text} />
          </ListItem>
        );
      });
    }
    return result;
  };

  const [open, setOpen] = React.useState(new Map<string, boolean>());
  const [refreshMe, refreshSidepanel] = React.useState(false);

  const handleClick = (item: string, e: any) => {
    e.preventDefault();
    e.stopPropagation();
    open.set(item, !open.get(item));
    setOpen(open);
    refreshSidepanel(!refreshMe);
  };

  return (
    <div>
      <Drawer anchor="left" open={sidepanelState} onClose={toggleDrawer(false)}>
        <div
          className={clsx(classes.list)}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {config.map((item) => {
              if (item.path !== "#") {
                return (
                  <ListItem
                    button
                    key={item.key}
                    selected={item.path === location.pathname}
                    component={(props) => CustomLink(item.path, props)}
                  >
                    <ListItemIcon>{mapIcons.get(item.key)}</ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItem>
                );
              } else {
                const isOpen = open.get(item.key);
                return (
                  <React.Fragment>
                    <ListItem button onClick={(e) => handleClick(item.key, e)}>
                      <ListItemIcon>{mapIcons.get(item.key)}</ListItemIcon>
                      <ListItemText primary={item.text} />
                      {isOpen ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={isOpen} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        {nestedList(item.nested || [])}
                      </List>
                    </Collapse>
                  </React.Fragment>
                );
              }
            })}
          </List>
          <Divider />
        </div>
      </Drawer>
    </div>
  );
};

export default SidePanel;
