import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import Typography, { TypographyProps } from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
      <Typography {...typoProps} className={classes.aboutMe}>
        Developer since approximatively {nbXp} years, I started to develop on
        backend side and after 8 years to work with Java, I decide to change to
        work more on frontend activities. <br />
      </Typography>
      <Typography {...typoProps} className={classes.aboutMe}>
        Since 2015, I'm working on different projects firstly with Angular and
        after with ReactJS as framework.
      </Typography>
      <Typography {...typoProps} className={classes.aboutMe}>
        Now, I'm Principal Frontend Engineer at Talend where I have the
        opportunity to continue to increase my skills and also to share my
        knowledges with others.
      </Typography>
      <Typography {...typoProps} className={classes.aboutMe}>
        On this personal website, you will be able to see a short description of
        my background and of my skills.
      </Typography>
      <Typography {...typoProps} className={classes.aboutMe}>
        Do not hesitate to browse it and contact me if my profile interests you.
      </Typography>
      <Typography {...typoProps} className={classes.aboutMe}>
        <b>Please, pay attention that this website is still under development and
        some pages are not finished</b>
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
    </Container>
  );
};

export default AboutMe;
