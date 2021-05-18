import React from "react";

import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import { typoH1Props } from "../../../../utils/typoProps";
import { LogbookLastEntry } from "../../../../utils/logbookUtils";

const LogbookEntry: React.FunctionComponent = () => {
  return (
    <Container maxWidth="lg">
      <Typography {...typoH1Props}>Last logbook entry</Typography>
      <LogbookLastEntry />
    </Container>
  );
};

export default LogbookEntry;
