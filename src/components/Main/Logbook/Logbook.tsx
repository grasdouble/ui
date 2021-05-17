import React from "react";

import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import { typoH1Props, typoH3Props } from "../../../utils/typoProps";
import { generateLogbookBlock } from "../../../utils/logbookUtils";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    divider: {
      marginBottom: "20px",
    },
  })
);

const Logbook: React.FunctionComponent = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <Typography {...typoH1Props}>Logbook - 2021</Typography>
      <Typography {...typoH3Props}>
        A Logbook to talk about all and nothing in the same place
      </Typography>
      {generateLogbookBlock(classes)}
    </Container>
  );
};

export default Logbook;
