import React from "react";

import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import { typoH1Props, typoH3Props } from "../../../utils/typoProps";
import { LogbookFull } from "../../../utils/logbookUtils";

const Logbook: React.FunctionComponent = () => {
  return (
    <Container maxWidth="lg">
      <Typography {...typoH1Props}>Logbook - 2021</Typography>
      <Typography {...typoH3Props}>
        A Logbook to talk about all and nothing in the same place
      </Typography>
      <LogbookFull />
    </Container>
  );
};

export default Logbook;
