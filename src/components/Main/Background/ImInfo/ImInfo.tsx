import React from "react";
import Typography, { TypographyProps } from "@material-ui/core/Typography";

const ImInfo: React.FunctionComponent = () => {
  const typoProps: TypographyProps = {
    paragraph: true,
    variant: "h5",
    align: "justify",
  };
  return (
    <div>
      <Typography {...typoProps}>
        The story start here with ImInfo. I initially did my end-of-studies
        internship in this company and had the opportunity to start my real
        working experience as software developer.
        <br />
      </Typography>
      <Typography {...typoProps}>
        ImInfo was a company who work specifically on projects ​in Java and
        offered multiple trainings around this language.
        <br />
      </Typography>
      <Typography {...typoProps}>
        This work started in 2007 and finished in 2009 and, during this time, I
        confirmed what i learned during my study by working on different
        projects in Java and contribute on multiple training support.
      </Typography>
    </div>
  );
};

export default ImInfo;
