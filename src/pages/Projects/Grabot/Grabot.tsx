import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import MainTemplate from "layouts/Main";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    markdown: {
      "& img": {
        maxWidth: "80vw",
      },
    },
  })
);

const Grabot: React.FunctionComponent = () => {
  const classes = useStyles();

  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const res = await fetch(
        "https://raw.githubusercontent.com/Sanoofr/Grabot/main/README.md"
      );
      const text = await res.text();

      setData(text);
      setIsLoading(false);
    };
    fetchData();
  }, [setData]);

  return (
    <MainTemplate>
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <ReactMarkdown className={classes.markdown}>{data}</ReactMarkdown>
      )}
    </MainTemplate>
  );
};

export default Grabot;
