import React from "react";
import Typography, { TypographyProps } from "@material-ui/core/Typography";

const Talend: React.FunctionComponent = () => {
  const typoProps: TypographyProps = {
    paragraph: true,
    variant: "h5",
    align: "justify",
  };
  return (
    <div>
      <Typography {...typoProps}>
        After my first experience, I entered at Steria as software ingeneer in
        2009 and where i worked during 6 years (2015).
        <br />
      </Typography>
      <Typography {...typoProps}>
        Steria (now named Sopra/Steria) is an IT Services company where i worked
        for projects of the French Ministry of the Interior and Enedis (management
        company of the public electricity distribution network).
        <br />
      </Typography>
      <Typography {...typoProps}>
        During this time, I had the opportunity to learn more about the project
        management by firstly leading some subjects and, later, part of the team
        activities. I also worked closely with the customers to collect their
        needs and transform that in specification.
      </Typography>
    </div>
  );
};

export default Talend;
