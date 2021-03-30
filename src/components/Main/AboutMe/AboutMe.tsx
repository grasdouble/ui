import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import Typography, { TypographyProps } from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grid: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    avatar: {
      padding: theme.spacing(1),
      [theme.breakpoints.down("sm")]: {
        margin: theme.spacing(1),
        width: theme.spacing(15),
        height: theme.spacing(15),
      },
      [theme.breakpoints.up("md")]: {
        width: theme.spacing(25),
        height: theme.spacing(25),
      },
    },
    aboutMe: {
      [theme.breakpoints.down("xs")]: {
        maxWidth: 300,
      },
      [theme.breakpoints.up("sm")]: {
        maxWidth: 400,
      },
      [theme.breakpoints.up("md")]: {
        maxWidth: 500,
      },
      [theme.breakpoints.up("lg")]: {
        maxWidth: 600,
      },
    },
  })
);

const AboutMe: React.FunctionComponent = () => {
  const classes = useStyles();

  const nbXp = new Date().getFullYear() - 2007;
  const typoProps: TypographyProps = {
    paragraph: true,
    variant: "h5",
    align: "justify",
  };

  return (
    <Container maxWidth="lg">
      <Grid container className={classes.grid} justify="center" spacing={5}>
        <Grid key="avatar" item>
          <Avatar alt="Sebastien Le Mouillour" className={classes.avatar}>
            S
          </Avatar>
        </Grid>
        <Grid key="aboutMe" item>
          <Typography {...typoProps} className={classes.aboutMe}>
            Developer since approximatively {nbXp} years, I started to develop
            on backend side and after 8 years to work with Java, I decide to
            change to work more on frontend activities. <br />
          </Typography>
          <Typography {...typoProps} className={classes.aboutMe}>
            Since 2015, I'm working on different projects firstly with Angular
            and after with ReactJS as framework.
          </Typography>
          <Typography {...typoProps} className={classes.aboutMe}>
            Now, I'm Principal Frontend Engineer at Talend where I have the
            opportunity to continue to increase my skills and also to share my
            knowledges with others.
          </Typography>
          <Typography {...typoProps} className={classes.aboutMe}>
            On this personal website, you will be able to see a short
            description of my background and of my skills.
          </Typography>
          <Typography {...typoProps} className={classes.aboutMe}>
            Do not hesitate to browse it and contact me if my profile interests
            you.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutMe;
