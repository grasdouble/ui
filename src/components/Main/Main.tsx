import React from "react";
import clsx from "clsx";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import AboutMe from "./AboutMe";
import Background from "./Background";
import Skills from "./Skills";
import ContactMe from "./ContactMe";

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
      marginLeft: theme.spacing(0),
      marginRight: theme.spacing(0),
      [theme.breakpoints.up("md")]: {
        marginLeft: theme.spacing(9),
        marginRight: theme.spacing(9),
      },
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
  })
);

interface MyProps {
  children?: React.ReactNode;
  pageState: String;
  pageFct: Function;
  sidepanelFct: Function;
}

const getPage = (page: String, sidepanelFct: Function) => {
  switch (page) {
    case "background":
      return <Background />;
    case "skills":
      return <Skills />;
    case "contactme":
      return <ContactMe />;
    case "aboutme":
    default:
      return <AboutMe openSidePanel={sidepanelFct}/>;
  }
};

const Main: React.FunctionComponent<MyProps> = ({ pageState, sidepanelFct }) => {
  const classes = useStyles();

  return (
    <main className={clsx(classes.content)}>
      <div className={classes.toolbar} />
      {getPage(pageState, sidepanelFct)}
    </main>
  );
};

export default Main;
