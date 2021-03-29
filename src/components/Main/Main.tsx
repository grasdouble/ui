import React from "react";
import clsx from "clsx";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import AboutMe from "./AboutMe";
import Background from "./Background";
import Skills from "./Skills";
import ContactMe from "./ContactMe";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    toolbar: {
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      marginLeft: theme.spacing(7) + 1,
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(9) + 1,
      },
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    contentShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
  })
);

interface MyProps {
  children?: React.ReactNode;
  sidepanelState: Boolean;
  pageState: String;
  pageFct: Function;
}

const getPage = (page: String) => {
  switch (page) {
    case "background":
      return <Background />;
    case "skills":
      return <Skills />;
    case "contactme":
      return <ContactMe />;
    case "aboutme":
    default:
      return <AboutMe />;
  }
};

const Main: React.FunctionComponent<MyProps> = ({
  sidepanelState,
  pageState,
}) => {
  const classes = useStyles();

  return (
    <main
      className={clsx(classes.content, {
        [classes.contentShift]: sidepanelState,
      })}
    >
      <div className={classes.toolbar} />
      {getPage(pageState)}
    </main>
  );
};

export default Main;
