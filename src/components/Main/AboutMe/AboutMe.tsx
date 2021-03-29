import React from "react";

import Typography from "@material-ui/core/Typography";

const nbXp = new Date().getFullYear() - 2007;

const AboutMe: React.FunctionComponent = () => {
  return (
    <React.Fragment>
      <Typography paragraph variant="h5">
        Developer since approximatively {nbXp} years, i initially start to develop on backend side but After 8 years to work with Java, i decide to change to work more on frontend activities.
        Since 2015, i work on different projects with Angular or ReactJS as framework. 
        Today, i'm Principal Frontend Engineer for Talend where i have the opportunity to continue to increase my skills and also to share my knowledges with others.
      </Typography>
    </React.Fragment>
  );
};

export default AboutMe;
