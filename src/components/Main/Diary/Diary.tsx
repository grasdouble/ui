import React from "react";

import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import {
  typoH1Props,
  typoH2Props,
  typoH3Props,
  typoCaptionProps,
  typoTextProps,
} from "../../../utils/typoProps";

const Diary: React.FunctionComponent = () => {
  return (
    <Container maxWidth="lg">
      <Typography {...typoH1Props}>Diary</Typography>
      <Typography {...typoH2Props}>2021</Typography>
      <Typography {...typoH3Props}>On May 15, 2021</Typography>
      <Typography {...typoTextProps}>
        It might not be something original but, today, after working on this
        site playing with Material-ui, I decided to create this page.
      </Typography>
      <Typography {...typoTextProps}>The idea is simple.</Typography>
      <Typography {...typoTextProps}>
        Write a few words regularly about what I have learned or discovered
        during the day or, if I am not doing it daily, the last few days.
      </Typography>
      <Typography {...typoCaptionProps}>
        Note 1: The current version of the diary is ugly. Need to rethink it later
      </Typography>
      <Typography {...typoCaptionProps}>
        Note 2: Same for the background page.
      </Typography>
      <Typography {...typoCaptionProps}>
        Note 3: More globally, need to work on the theme.
      </Typography>
    </Container>
  );
};

export default Diary;
