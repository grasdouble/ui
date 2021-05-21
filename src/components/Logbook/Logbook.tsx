import React from "react";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import {
  typoH2Props,
  typoH3Props,
  typoH4Props,
  typoCaptionProps,
  typoTextProps,
} from "utils/typoProps";

import data2021 from "datas/logbook/2021.json";

const generateLogbookContent = (entries: any[], date: string) => {
  const result: JSX.Element[] = [];
  entries.forEach((entry, idx) => {
    switch (entry.type) {
      case "title":
        result.push(
          <Typography {...typoH3Props} key={`logbook_item_${date}_${idx}`}>
            {entry.value}
          </Typography>
        );
        break;
      case "subtitle":
        result.push(
          <Typography {...typoH4Props} key={`logbook_item_${date}_${idx}`}>
            {entry.value}
          </Typography>
        );
        break;
      case "caption":
        result.push(
          <Typography {...typoCaptionProps} key={`logbook_item_${date}_${idx}`}>
            {entry.value}
          </Typography>
        );
        break;
      case "text":
      default:
        result.push(
          <Typography {...typoTextProps} key={`logbook_item_${date}_${idx}`}>
            {entry.value}
          </Typography>
        );
    }
  });
  return result;
};

export const LogbookFull = () => {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      divider: {
        marginBottom: "20px",
      },
    })
  );
  const classes = useStyles();

  const result: JSX.Element[] = [];
  data2021.forEach((day) => {
    if (day.date !== "0000-00-00") {
      result.push(
        <Divider
          className={classes.divider}
          key={`logbook_item_divider_${day.date}`}
        />
      );
      result.push(
        <Typography {...typoH2Props} key={`logbook_item_date_${day.date}`}>
          {day.date}
        </Typography>
      );
      result.push(...generateLogbookContent(day.entries, day.date));
    }
  });
  return <React.Fragment>{result}</React.Fragment>;
};

export const LogbookLastEntry = () => {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      divider: {
        marginBottom: "20px",
      },
    })
  );
  const classes = useStyles();

  const result: JSX.Element[] = [];
  const days = [data2021[1]];
  days.forEach((day) => {
    result.push(
      <Divider className={classes.divider} key="logbook_top_divider" />
    );
    result.push(
      <Typography {...typoH2Props} key="logbook_date">
        {day.date}
      </Typography>
    );
    result.push(...generateLogbookContent(day.entries, day.date));
  });
  return <React.Fragment>{result}</React.Fragment>;
};
