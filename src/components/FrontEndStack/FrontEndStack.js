import React from "react";
import { Grid, Card, makeStyles, Paper } from "@material-ui/core";
import { StackItem } from "../StackItem/StackItem";

import react from "../../assets/Stack-Front-end/react.png";
import html from "../../assets/Stack-Front-end/html.png";
import css from "../../assets/Stack-Front-end/css.png";
import typescript from "../../assets/Stack-Front-end/typescript.png";
import redux from "../../assets/Stack-Front-end/redux.svg";
import jest from "../../assets/Stack-Front-end/Jest.png";
import dj from "../../assets/Stack-Front-end/django.png";
import mat from "../../assets/Stack-Front-end/material-ui.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  card: {
    backgroundColor: "#FAFAFA",
    borderRadius: 7,
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    paddingTop: 40,
    paddingBottom: 40,
  },
}));

export const FrontEndStack = (props) => {
  const classes = useStyles();
  return (
    <Grid container justify={"center"} xs={12}>
      <Grid
        className={classes.card}
        container
        xs={12}
        sm={8}
        spacing={3}
        justify={"center"}
      >
        <StackItem img={react} text={"React-native \n React"} />
        <StackItem img={html} text={"html"} />
        <StackItem img={css} text={"css"} />
        <StackItem img={typescript} text={"typescript"} />
        <StackItem img={redux} text={"redux"} />
        <StackItem img={jest} text={"Jest"} />
        <StackItem img={dj} text={"django"} />
        <StackItem img={mat} text={"material UI"} />
      </Grid>
    </Grid>
  );
};
