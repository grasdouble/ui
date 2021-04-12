import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import Typography, { TypographyProps } from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    gridMain: {
      flexGrow: 1,
    },
    gridLeftPane: {},
    links: {
      [theme.breakpoints.down("sm")]: {
        paddingLeft: theme.spacing(2),
        marginTop: "auto",
        marginBottom: "auto",
      },
      [theme.breakpoints.up("md")]: {
        marginTop: theme.spacing(2),
      },
    },
    avatar: {
      border: "5px solid",
      [theme.breakpoints.down("sm")]: {
        margin: theme.spacing(1),
        width: theme.spacing(15),
        height: theme.spacing(15),
      },
      [theme.breakpoints.up("md")]: {
        width: theme.spacing(20),
        height: theme.spacing(20),
      },
    },
    aboutMe: {},
  })
);

interface MyProps {
  openSidePanel: Function;
}

const AboutMe: React.FunctionComponent<MyProps> = ({ openSidePanel }) => {
  const classes = useStyles();

  const nbXp = new Date().getFullYear() - 2007;
  const typoProps: TypographyProps = {
    paragraph: true,
    variant: "h5",
    align: "justify",
  };

  return (
    <Container maxWidth="lg">
      <Grid container className={classes.gridMain} justify="center" spacing={5}>
        <Grid key="leftPane" item sm={12} md={3} lg={2}>
          <Grid container className={classes.gridLeftPane} justify="center">
            <Grid key="avatar" item>
              <Avatar
                alt="Sebastien Le Mouillour"
                className={classes.avatar}
                src="/img/avatar.jfif"
              >
                Sébastien
                <br />
                LE MOUILLOUR
              </Avatar>
            </Grid>
            <Grid key="links" className={classes.links} item>
              <Box textAlign="center">
                <Box textAlign="left">
                  <Button
                    variant="outlined"
                    color="primary"
                    startIcon={<LinkedInIcon fontSize="large" />}
                    target="_blank"
                    href="https://www.linkedin.com/in/sebastienlemouillour/"
                  >
                    LinkedIn
                  </Button>
                </Box>
                <Box textAlign="left" mt={1}>
                  <Button
                    variant="outlined"
                    color="secondary"
                    startIcon={<AlternateEmailIcon fontSize="large" />}
                    target="_blank"
                    href="mailto:sebastien.lemouillour@gmail.com"
                  >
                    Contact Me
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid key="aboutMe" item sm={12} md={9} lg={10}>
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
          <Box textAlign="center" m={1}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<PlayCircleOutlineIcon fontSize="large" />}
              onClick={() => openSidePanel(true)}
            >
              Display Menu
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutMe;
