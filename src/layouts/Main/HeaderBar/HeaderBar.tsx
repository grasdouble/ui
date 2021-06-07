import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";

import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbar: theme.mixins.toolbar,
    appBar: {
      [theme.breakpoints.up("sm")]: {
        zIndex: theme.zIndex.drawer + 1,
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
  })
);

interface MyProps {
  children?: React.ReactNode;
  sidepanelFct: Function;
}

const HeaderBar: React.FunctionComponent<MyProps> = ({ sidepanelFct }) => {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar variant="dense">
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={() => sidepanelFct(true)}
          edge="start"
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Typography noWrap>Sebastien Le Mouillour</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderBar;
