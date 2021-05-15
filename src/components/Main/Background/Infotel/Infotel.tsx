import React from "react";
import Typography from "@material-ui/core/Typography";

import {
  typoTitleProps,
  typoTextProps,
  typoSubTitleProps,
} from "../../../../utils/typoProps";

const Infotel: React.FunctionComponent = () => {
  return (
    <div>
      <Typography {...typoTitleProps}>Infotel (2015 -&gt; 2017)</Typography>
      <Typography {...typoTextProps}>
        Next i moved to Infotel where I entered as developer Fullstack in 2015
        and where i worked during 2 years (2017).
        <br />
      </Typography>
      <Typography {...typoTextProps}>
        Infotel is an IT Services company where i worked for one customer
        (Bureau Veritas).
        <br />
      </Typography>
      <Typography {...typoTextProps}>
        This experience take place when i decided to work more and more on
        frontend activities. Fortunately for me, the customer has multiple
        projects where frontend skills was needed. During this 2 years, i worked
        on projects using Angular and Ionic.
      </Typography>
      <Typography {...typoSubTitleProps}>
        Most Important Project / Customer
      </Typography>
    </div>
  );
};

export default Infotel;