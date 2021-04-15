import React from "react";
import Typography, { TypographyProps } from "@material-ui/core/Typography";

const Steria: React.FunctionComponent = () => {
  const typoProps: TypographyProps = {
    paragraph: true,
    variant: "h5",
    align: "justify",
  };

  return (
    <div>
      <Typography {...typoProps}>
        Next i moved to Infotel where I entered as developer Fullstack in 2015
        and where i worked during 2 years (2017).
        <br />
      </Typography>
      <Typography {...typoProps}>
        Infotel is an IT Services company where i worked for one customer
        (Bureau Veritas).
        <br />
      </Typography>
      <Typography {...typoProps}>
        This experience take place when i decided to work more and more on
        frontend activities. Fortunately for me, the customer has multiple
        projects where frontend skills was needed. During this 2 years, i worked
        on projects using Angular and Ionic.
      </Typography>
    </div>
  );
};

export default Steria;
