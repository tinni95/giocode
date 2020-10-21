import React from "react";
import { Grid, Card, makeStyles, Paper } from "@material-ui/core";
import { StackItem } from "../StackItem/StackItem";

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

export const StackContainer = ({ items }) => {
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
        {items.map((item) => (
          <StackItem img={item.img} text={item.text} />
        ))}
      </Grid>
    </Grid>
  );
};
