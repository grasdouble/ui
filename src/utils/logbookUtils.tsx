import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

import {
  typoH2Props,
  typoH3Props,
  typoH4Props,
  typoCaptionProps,
  typoTextProps,
} from "./typoProps";

import data2021 from "../datas/logbook/2021.json";

const generateLogbookContent = (entries: any[]) => {
  const result: JSX.Element[] = [];
  entries.forEach((entry) => {
    switch (entry.type) {
      case "title":
        result.push(<Typography {...typoH3Props}>{entry.value}</Typography>);
        break;
      case "subtitle":
        result.push(<Typography {...typoH4Props}>{entry.value}</Typography>);
        break;
      case "caption":
        result.push(
          <Typography {...typoCaptionProps}>{entry.value}</Typography>
        );
        break;
      case "text":
      default:
        result.push(<Typography {...typoTextProps}>{entry.value}</Typography>);
    }
  });
  return result;
};

export const generateLogbookBlock = (classes: any) => {
  const result: JSX.Element[] = [];
  data2021.forEach((day) => {
    if (day.date !== "0000-00-00") {
      result.push(<Divider className={classes.divider} />);
      result.push(<Typography {...typoH2Props}>{day.date}</Typography>);
      result.push(...generateLogbookContent(day.entries));
    }
  });
  return result;
};
